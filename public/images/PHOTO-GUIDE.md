# Photo drop-in guide

The site ships with hand-drawn SVG artwork in every photo slot. The moment you
drop a real photograph into this folder with the matching filename, the site
detects it and fades the real photo in — **no code changes required**.

## How it works

Each photo slot in `index.html` carries a `data-photo="<filename>"` attribute.
On load, `src/scripts/photos.js` tries to load `public/images/<filename>`.

- File found → real photo fades in, artwork is removed from the DOM.
- File missing → artwork stays. No broken-image icon, no layout shift, no
  console error visible to visitors.

This means the site is presentable today and becomes photographic the instant
the owner shares their Google Business Profile images.

## Required filenames

Save as `.jpg` (or change the extension in the `data-photo` attribute).

| Filename | Where it appears | Ideal size | Notes |
| --- | --- | --- | --- |
| `storefront.jpg` | Hero background | 2400×1400 | **The real shop front.** Highest priority. |
| `storefront-night.jpg` | Location section | 1600×1100 | Optional; evening shot of the shop. |
| `interior-1.jpg` | Gallery (tall) | 1200×1600 | Cycles lined up inside the shop |
| `interior-2.jpg` | Gallery | 1200×900 | Counter / display wall |
| `workshop.jpg` | Services section | 1600×1200 | Repair area, tools, mechanic at work |
| `owner.jpg` | Why Choose Us | 1000×1200 | Owner or staff portrait |
| `gallery-1.jpg` … `gallery-8.jpg` | Gallery masonry | ≥1200px wide | Any Business Profile photos |
| `product-mountain.jpg` | Products | 1200×900 | MTB on display |
| `product-road.jpg` | Products | 1200×900 | Road bike |
| `product-kids.jpg` | Products | 1200×900 | Kids cycles |
| `product-ladies.jpg` | Products | 1200×900 | Ladies cycles |
| `product-electric.jpg` | Products | 1200×900 | Electric cycles |
| `product-hybrid.jpg` | Products | 1200×900 | Hybrid cycles |
| `og-cover.jpg` | Social sharing preview | 1200×630 | Used by OpenGraph / Twitter Card |

## Getting the photos

The Business Profile currently has none published, so they need to be taken at
the shop. **[SHOT-LIST.md](SHOT-LIST.md)** has the full brief — what to shoot,
how to frame it, and what to tidy first.

If photos are added to the Business Profile later, `npm run photos` (or the
"Fetch real Google Business photos" GitHub Action) will import them
automatically under the filenames above.

## Compressing before you commit

Keep every file under ~300 KB so the Lighthouse performance score stays high:

```bash
# from the project root
npx @squoosh/cli --mozjpeg '{"quality":72}' -d public/images public/images/*.jpg
```

Or use https://squoosh.app in the browser — MozJPEG, quality 70–75, resize the
longest edge to the "ideal size" column above.

## Rights

Only use photographs the business owns or has permission to publish. Do not
substitute stock photography for the storefront — the shop front must be the
real building.
