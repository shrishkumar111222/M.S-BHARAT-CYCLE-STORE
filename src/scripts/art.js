/**
 * Vector artwork for photo slots.
 *
 * Until real photographs are added to public/images/, every slot renders
 * one of these scenes: a graded gradient field, a soft light bloom and
 * line-art bicycle geometry. They are deliberately abstract — this site
 * never shows an invented photograph of the shop.
 */

/** Line-art bicycle, drawn once and reused at different scales. */
const BIKE = `
  <g fill="none" stroke="currentColor" stroke-width="1.6"
     stroke-linecap="round" stroke-linejoin="round">
    <circle cx="23" cy="47" r="17"/>
    <circle cx="77" cy="47" r="17"/>
    <circle cx="23" cy="47" r="1.8" fill="currentColor" stroke="none"/>
    <circle cx="77" cy="47" r="1.8" fill="currentColor" stroke="none"/>
    <path d="M23 47 L44 47 L57 20 L70 47"/>
    <path d="M44 47 L58 47 L44 20 L34 20"/>
    <path d="M57 20 L77 47"/>
    <path d="M44 20 L44 15"/>
    <path d="M38 15 L50 15"/>
    <path d="M57 20 L61 16 L57 13"/>
    <circle cx="51" cy="47" r="5"/>
    <path d="M51 47 L46 52"/>
  </g>`;

/** Sprocket-ish concentric detail used on workshop scenes. */
const COG = `
  <g fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.5">
    <circle cx="50" cy="35" r="26"/>
    <circle cx="50" cy="35" r="18"/>
    <circle cx="50" cy="35" r="10"/>
    <path d="M50 4 L50 66 M19 35 L81 35 M28 13 L72 57 M72 13 L28 57"/>
  </g>`;

/**
 * Per-scene palette. Two gradient stops plus the tint applied to the
 * line art, so no two slots on a page look identical.
 */
const SCENES = {
  storefront: { from: '#0d1522', to: '#050710', tint: '#2e9bff', motif: 'bike', glow: '20% 30%' },
  showroom:   { from: '#111827', to: '#070a12', tint: '#6bb6ff', motif: 'bike', glow: '70% 25%' },
  workshop:   { from: '#131a26', to: '#06080f', tint: '#46e5f5', motif: 'cog',  glow: '35% 60%' },
  parts:      { from: '#0f1420', to: '#05070d', tint: '#8fa4c0', motif: 'cog',  glow: '60% 40%' },
  kids:       { from: '#1a1430', to: '#08060f', tint: '#a78bfa', motif: 'bike', glow: '30% 35%' },
  ladies:     { from: '#101a26', to: '#05080f', tint: '#5eead4', motif: 'bike', glow: '65% 55%' },
  electric:   { from: '#0a1a2a', to: '#04070d', tint: '#2e9bff', motif: 'bike', glow: '50% 25%' },
  mtb:        { from: '#141b18', to: '#06080a', tint: '#84cc16', motif: 'bike', glow: '25% 55%' },
  road:       { from: '#1c1420', to: '#08060c', tint: '#f472b6', motif: 'bike', glow: '72% 32%' },
  hybrid:     { from: '#0e1922', to: '#05080e', tint: '#38bdf8', motif: 'bike', glow: '45% 40%' },
  accessories:{ from: '#1d1710', to: '#0a0704', tint: '#ffc247', motif: 'cog',  glow: '30% 30%' },
  owner:      { from: '#111722', to: '#06080f', tint: '#2e9bff', motif: 'none', glow: '50% 22%' },
  detail:     { from: '#0c1118', to: '#04060a', tint: '#8fa4c0', motif: 'cog',  glow: '55% 65%' },
  rideon:     { from: '#241016', to: '#0b0508', tint: '#ff5a5f', motif: 'none', glow: '40% 35%' },
  tricycle:   { from: '#0f1d1c', to: '#04090a', tint: '#2dd4bf', motif: 'none', glow: '60% 40%' },
};

let uid = 0;

/**
 * Build an inline SVG scene.
 * @param {string} key  a key of SCENES
 * @param {string} label accessible description of the slot
 */
export function artSVG(key = 'showroom', label = '') {
  const s = SCENES[key] || SCENES.showroom;
  const id = `art${++uid}`;
  const [gx, gy] = s.glow.split(' ');

  const motif =
    s.motif === 'bike'
      ? `<g transform="translate(50 42) scale(5.6) translate(-50 -35)"
            color="${s.tint}" opacity="0.34">${BIKE}</g>`
      : s.motif === 'cog'
      ? `<g transform="translate(300 200) scale(6) translate(-50 -35)"
            color="${s.tint}" opacity="0.2">${COG}</g>`
      : '';

  return `
<svg class="photo__art" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice"
     role="img" aria-label="${label || 'Illustration'}" focusable="false">
  <defs>
    <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${s.from}"/>
      <stop offset="100%" stop-color="${s.to}"/>
    </linearGradient>
    <radialGradient id="${id}b" cx="${gx}" cy="${gy}" r="70%">
      <stop offset="0%" stop-color="${s.tint}" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="${s.tint}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="${id}p" width="34" height="34" patternUnits="userSpaceOnUse">
      <path d="M34 0 L0 0 0 34" fill="none"
            stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="600" height="400" fill="url(#${id}g)"/>
  <rect width="600" height="400" fill="url(#${id}p)"/>
  <rect width="600" height="400" fill="url(#${id}b)"/>
  ${
    s.motif === 'bike'
      ? `<g transform="translate(300 210) scale(4.2) translate(-50 -35)"
            color="${s.tint}" opacity="0.32">${BIKE}</g>`
      : motif
  }
  <rect width="600" height="400" fill="none"
        stroke="#ffffff" stroke-opacity="0.06" stroke-width="2"/>
</svg>`;
}

/**
 * The build calls this with a Map of the photographs that actually exist in
 * public/images/, keyed by lowercase basename without extension, so present
 * photos are emitted as real <img> tags instead of probed at runtime.
 *
 * Keying this way means `Storefront.JPG` or `storefront.png` all satisfy the
 * `storefront.jpg` slot. Phones capitalise extensions and people rename files
 * on a mobile keyboard; none of that should silently break the site.
 */
let available = null;
export const setAvailablePhotos = (map) => {
  available = map;
};

/** "Storefront.JPG" → "storefront" */
export const photoKey = (file) =>
  file.replace(/\.[^.]+$/, '').trim().toLowerCase();

/**
 * Full markup for a photo slot.
 *
 * If the photograph exists at build time it is written straight into the
 * HTML — best for SEO and LCP, and no 404 probe. If it does not, the slot
 * renders artwork and keeps `data-photo` so photos.js can still pick the
 * file up at runtime the moment it is added, without a rebuild.
 *
 * @param {object} o
 * @param {string} o.photo filename expected in public/images/
 * @param {string} o.art   scene key
 * @param {string} o.alt   alt text used when the real photo loads
 * @param {boolean} o.eager skip lazy-loading (hero only)
 * @param {string} o.className extra classes
 */
export function photoSlot({ photo, art, alt = '', eager = false, className = '' }) {
  const safeAlt = alt.replace(/"/g, '&quot;');
  const actual = available?.get(photoKey(photo));

  if (actual) {
    return `
<div class="photo has-photo ${className}" data-art="${art}">
  <img class="photo__img" src="public/images/${encodeURIComponent(actual)}"
       alt="${safeAlt}"
       decoding="async" loading="${eager ? 'eager' : 'lazy'}"${
         eager ? ' fetchpriority="high"' : ''
       }>
</div>`;
  }

  return `
<div class="photo ${className}" data-photo="${photo}" data-art="${art}"
     data-alt="${safeAlt}"${eager ? ' data-eager="true"' : ''}>
  ${artSVG(art, alt)}
  <span class="photo__hint" aria-hidden="true">${photo}</span>
</div>`;
}
