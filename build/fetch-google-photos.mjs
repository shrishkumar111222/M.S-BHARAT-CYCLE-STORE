#!/usr/bin/env node
/**
 * Download the real Google Business Profile photos into public/images/.
 *
 *   GOOGLE_MAPS_API_KEY=xxxx npm run photos
 *
 * Needs the "Places API" enabled on the key
 * (console.cloud.google.com → APIs & Services → Library → Places API).
 * Place Photos are billed per request; a first run of this script is a
 * couple of dozen calls, comfortably inside the free monthly credit.
 *
 * What it does:
 *   1. Finds the place by name + town.
 *   2. Reads its photo references.
 *   3. Saves the highest-resolution version of each as
 *      storefront.jpg, gallery-1.jpg, gallery-2.jpg … matching the
 *      filenames the site already looks for.
 *
 * Photos on a Business Profile are ordered with the owner's own uploads
 * first, so photo #1 is almost always the storefront. Check the results
 * and rename if the order differs.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { BUSINESS } from '../src/scripts/config.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public/images');
const KEY = process.env.GOOGLE_MAPS_API_KEY;
const MAX_PX = 1600;

/** Slot names in the order Google tends to return owner photos. */
const SLOTS = [
  'storefront.jpg',
  'interior-1.jpg',
  'interior-2.jpg',
  'workshop.jpg',
  'gallery-1.jpg',
  'gallery-2.jpg',
  'gallery-3.jpg',
  'gallery-4.jpg',
  'gallery-5.jpg',
  'gallery-6.jpg',
  'gallery-7.jpg',
  'gallery-8.jpg',
];

const api = 'https://maps.googleapis.com/maps/api/place';

async function json(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url.split('?')[0]}`);
  const body = await res.json();
  if (body.status && body.status !== 'OK') {
    throw new Error(`${body.status}: ${body.error_message || 'no detail'}`);
  }
  return body;
}

async function findPlaceId() {
  const query = `${BUSINESS.name} ${BUSINESS.city} ${BUSINESS.district} ${BUSINESS.state}`;
  const url =
    `${api}/findplacefromtext/json?input=${encodeURIComponent(query)}` +
    `&inputtype=textquery&fields=place_id,name,formatted_address&key=${KEY}`;
  const { candidates } = await json(url);
  if (!candidates?.length) throw new Error(`No place found for "${query}"`);
  const [best] = candidates;
  console.log(`Matched: ${best.name} — ${best.formatted_address}`);
  return best.place_id;
}

async function getPhotoRefs(placeId) {
  const url =
    `${api}/details/json?place_id=${placeId}` +
    `&fields=name,formatted_phone_number,rating,user_ratings_total,opening_hours,geometry,photos` +
    `&key=${KEY}`;
  const { result } = await json(url);

  // Print the live details so config.js can be corrected from real data.
  console.log('\nLive Business Profile data — copy into src/scripts/config.js:');
  console.log(`  phone:       ${result.formatted_phone_number || '(not published)'}`);
  console.log(`  rating:      ${result.rating ?? '(none)'}`);
  console.log(`  reviewCount: ${result.user_ratings_total ?? 0}`);
  console.log(`  lat/lng:     ${result.geometry?.location.lat}, ${result.geometry?.location.lng}`);
  if (result.opening_hours?.weekday_text) {
    console.log('  hours:');
    result.opening_hours.weekday_text.forEach((l) => console.log(`    ${l}`));
  }
  console.log('');

  return result.photos?.map((p) => p.photo_reference) ?? [];
}

async function download(ref, filename) {
  const url = `${api}/photo?maxwidth=${MAX_PX}&photo_reference=${ref}&key=${KEY}`;
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(OUT, filename), buf);
  console.log(`  ✓ ${filename.padEnd(18)} ${(buf.length / 1024).toFixed(0)} KB`);
}

async function main() {
  if (!KEY) {
    console.error(
      'Missing GOOGLE_MAPS_API_KEY.\n\n' +
        '  1. console.cloud.google.com → create a project\n' +
        '  2. APIs & Services → Library → enable "Places API"\n' +
        '  3. Credentials → Create credentials → API key\n' +
        '  4. GOOGLE_MAPS_API_KEY=your_key npm run photos\n'
    );
    process.exit(1);
  }

  await mkdir(OUT, { recursive: true });

  const placeId = await findPlaceId();
  const refs = await getPhotoRefs(placeId);

  if (!refs.length) {
    console.log('This listing has no photos published through the Places API.');
    console.log('Download them manually — see public/images/PHOTO-GUIDE.md.');
    return;
  }

  console.log(`Downloading ${Math.min(refs.length, SLOTS.length)} photos:`);
  for (let i = 0; i < Math.min(refs.length, SLOTS.length); i++) {
    try {
      await download(refs[i], SLOTS[i]);
    } catch (err) {
      console.warn(`  ✗ ${SLOTS[i]} — ${err.message}`);
    }
  }

  console.log(
    '\nDone. Open the site and check that storefront.jpg really is the shop front;\n' +
      'rename files if Google returned them in a different order.\n' +
      'Then compress: npx @squoosh/cli --mozjpeg \'{"quality":72}\' -d public/images public/images/*.jpg'
  );
}

main().catch((err) => {
  console.error(`\nFailed: ${err.message}`);
  process.exit(1);
});
