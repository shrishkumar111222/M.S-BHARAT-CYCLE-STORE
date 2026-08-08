# M.S BHARAT CYCLE STORE

Marketing website for **M.S BHARAT CYCLE STORE** — bicycle sales and service in
Sherghati, Gaya, Bihar.

Dark, minimal, electric-blue. Built as static HTML, CSS and vanilla JavaScript
with a small Node build step. No framework, no Bootstrap, no runtime
dependencies — the deployed site loads nothing but its own files (plus one
webfont, which you can self-host to remove even that).

---

## Read this first: the photographs

**The site currently shows vector artwork, not photographs of the shop.**

Two separate reasons:

1. **The Google Business Profile has no photos published on it.** Nothing can be
   imported that isn't there — the Places API only returns photos that exist on
   the listing.
2. This build environment is blocked from reaching Google at all
   (`google.com/maps` and `lh3.googleusercontent.com` return 403 at the egress
   proxy), so even Street View was unavailable.

Rather than invent a storefront image, every photo slot renders artwork and is
wired to accept the real photograph the moment one exists.

### The path that actually works: photograph the shop

**→ [`public/images/SHOT-LIST.md`](public/images/SHOT-LIST.md)** is a shot list
you can hand to the owner. Phone camera, about twenty minutes, framing notes for
each shot. Business Profile photos would have been phone photos anyway — usually
worse ones, since nobody tidies the shop first.

Five photos carry the whole site: the storefront, one interior, the workshop,
the owner at work, and a wide crop of the storefront for link previews. Drop
them into `public/images/` and run `npm run build`.

### If photos get added to the Business Profile later

Two ways to import them automatically.

**Via GitHub, no terminal needed.** GitHub's runners can reach Google even
though this build environment could not.

1. Get a Google Maps API key (see below for the three-step setup).
2. This repo → **Settings → Secrets and variables → Actions → New repository
   secret**. Name it `GOOGLE_MAPS_API_KEY`, paste the key.
3. **Actions → "Fetch real Google Business photos" → Run workflow.**

It downloads whatever the listing has, rebuilds with the photos baked in, and
commits them. The run summary lists every file it got.

**Or from your own machine:**

```bash
# One-time: console.cloud.google.com → new project
#           → APIs & Services → Library → enable "Places API"
#           → Credentials → Create credentials → API key
GOOGLE_MAPS_API_KEY=your_key npm run photos
npm run build
```

`npm run photos` finds the listing, downloads every published Business Profile
photo into `public/images/` under the filenames the site expects, and prints the
live phone number, rating, review count, coordinates and opening hours so you
can correct `src/scripts/config.js` from real data.

Place Photos requests are billed per call; one run is a couple of dozen calls,
well inside Google's free monthly credit.

### Filenames and sizes

[`public/images/PHOTO-GUIDE.md`](public/images/PHOTO-GUIDE.md) lists every slot,
the filename it expects, the ideal pixel size and how to compress before
committing. `storefront.jpg` is the hero background and matters most.

### How the slots behave

| State | What renders |
| --- | --- |
| Photo present at build time | A real `<img>` baked into the static HTML — best for SEO and load speed |
| Photo missing at build time | Artwork, plus a runtime probe that fades the photo in the moment the file appears — no rebuild needed |
| Photo never added | Artwork. No broken images, no layout shift, no visible errors |

So the site is presentable right now and becomes photographic with no code
changes.

---

## Before you show this to the client

The phone number is live: **+91 72773 43791**. It drives every call button,
every WhatsApp link and the schema.org markup from a single place,
`src/scripts/config.js`.

One value in that file is still approximate:

```js
lat: 24.5586, lng: 84.7896,    // ← Sherghati town centre, not the shop's pin
```

Open the shop in Google Maps, right-click its pin, copy the coordinates and
paste them in. That corrects the "Get Directions" button, the map embed and the
geo tags.

Two more things worth doing:

- **Reviews.** `src/scripts/data.js` ships six testimonials written to reflect
  the kind of feedback the shop gets. They are labelled as demo content in the
  UI. Replace them with verbatim Google reviews — real names, real dates — and
  delete the `demo: true` flags and the notice under the carousel.
- **Statistics.** `STATS` in the same file (20+ years, 12,000+ customers,
  8,500+ cycles sold) are placeholders. Ask the owner for real figures.

Anything you can't verify, cut. A number the owner can't stand behind is worse
than no number.

---

## Running it

```bash
npm run build   # generates index.html, public/styles.css, sitemap.xml, robots.txt
npm run dev     # build + serve at http://localhost:5173
```

Node 18 or newer. The build has zero npm dependencies — it runs on the standard
library alone.

---

## Project structure

```
index.html                  generated — do not edit by hand
sitemap.xml, robots.txt     generated
.nojekyll                   stops GitHub Pages running the output through Jekyll

build/
  build.mjs                 renders index.html + bundles the CSS
  fetch-google-photos.mjs   downloads real Business Profile photos

public/
  styles.css                generated CSS bundle
  site.webmanifest          generated
  icons/favicon.svg
  images/                   ← real photographs go here
    PHOTO-GUIDE.md          filenames, sizes, compression

src/
  components/               one .css + one .js template per section
    header, hero, features, brands, products, services,
    gallery, reviews, stats, location, footer, dock, photo
    icons.js                inline SVG icon set
  styles/
    tokens.css              colours, type scale, spacing, motion — the design system
    base.css                reset, typography, buttons, glass, layout primitives
    reveal.css              scroll-animation utilities
  scripts/
    config.js               ← business details, single source of truth
    data.js                 ← products, services, reviews, stats, gallery
    art.js                  vector artwork + photo-slot markup
    photos.js               runtime photo loader
    reveal.js               scroll reveals, counters, parallax, progress bar
    ui.js                   menu, filters, quick view, lightbox, carousel, map
    main.js                 entry point
```

`index.html` is generated, but it is generated as **complete static markup** —
every heading, paragraph, product and review is in the HTML before any
JavaScript runs. The page reads fine with JS disabled; JS only adds behaviour.

To change content, edit `src/scripts/data.js` or `config.js` and rebuild. To
change how a section looks, edit its `src/components/*.css`.

---

## Deploying to GitHub Pages

### Automatic (recommended)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. **Settings → Pages → Source → GitHub Actions**
2. Push to `main`.
3. The site appears at `https://<user>.github.io/<repo>/`.

The workflow sets `SITE_URL` from the repository name, so the canonical tag,
OpenGraph URLs, sitemap and structured data all point at the right address
without you editing anything.

### Manual

**Settings → Pages → Source → Deploy from a branch → `main` / `(root)`**.
Everything needed is committed, including the generated `index.html`, so this
works with no build step. Run `npm run build` locally and commit the output
whenever you change content.

### Custom domain

```bash
echo "bharatcyclestore.in" > CNAME
SITE_URL=https://bharatcyclestore.in/ npm run build
```

Then point an `A`/`CNAME` DNS record at GitHub Pages and set the domain under
**Settings → Pages**.

---

## What's built in

**Sections** — hero, why choose us, brands marquee, filterable product
showcase with quick-view, services accordion, masonry gallery with lightbox,
animated statistics, review carousel, map and hours, closing CTA, footer.

**Interaction** — sticky auto-hiding header with a sliding active-section pill,
full-screen mobile menu, scroll-progress bar, floating WhatsApp/call/back-to-top
dock, sticky mobile call bar, drag-to-scroll review rail, keyboard- and
swipe-navigable lightbox, and a badge that shows whether the shop is open right
now (evaluated in IST, so it's correct for visitors in any timezone).

**Animation** — scroll reveals, line-by-line headline masks, count-up
statistics, parallax layers, cursor-tracking card glow, image-reveal wipes.
Written directly against `IntersectionObserver` and one shared
`requestAnimationFrame` loop rather than pulling in AOS and GSAP — about 1 KB
instead of ~150 KB, and no third-party requests. Everything respects
`prefers-reduced-motion`.

**Performance** — no framework, no jQuery, no icon font, no CSS framework. One
stylesheet, ES modules, lazy-loaded images, an SVG favicon, and a Google Maps
iframe that only loads when the visitor clicks "Show map" (third-party embeds
are usually the single biggest Lighthouse cost on a site like this).

**SEO** — semantic landmarks, one `h1`, descriptive alt text, meta description,
canonical URL, OpenGraph and Twitter Card tags, geo meta tags, `sitemap.xml`,
`robots.txt`, and `BicycleStore` schema.org JSON-LD covering address,
coordinates, opening hours, products and services.

`AggregateRating` is deliberately **not** in the structured data. Google's
policy requires ratings shown in rich results to be genuine and collected by the
site itself; the demo testimonials aren't. Add it once real review data is in
place.

**Accessibility** — skip link, visible focus rings, labelled controls, `Escape`
and arrow-key support in both modals, focus returned to the trigger on close,
and colour contrast held above 4.5:1 for body text.

---

## Browser support

Current Chrome, Edge, Firefox and Safari, desktop and mobile. Uses
`backdrop-filter`, CSS nesting-free modern syntax, `aspect-ratio`, `:has`-free
selectors and ES modules — all baseline-available. Internet Explorer is not
supported.

---

## Licence

All rights reserved. Built for M.S BHARAT CYCLE STORE.
Photographs, once added, remain the property of the business.
