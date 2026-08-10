# Phone shot list

The Google Business Profile has no photos to pull, so the pictures have to come
from the shop directly. A modern phone camera is more than good enough — the
Business Profile photos would have been phone photos too, usually worse ones.

This is a list you can hand to the owner, or work through yourself in about
twenty minutes at the shop.

## Before you start

- **Clean the front.** Sweep, move stray boxes, straighten the cycles in the
  window. Ten minutes of tidying is worth more than any camera.
- **Shoot in the morning or late afternoon.** Roughly 8–10 AM or 4–6 PM. Harsh
  midday sun blows out the highlights and throws hard black shadows.
- **Hold the phone horizontally (landscape)** for everything except the two
  shots marked *portrait*.
- **Tap the screen on the subject** before each shot so the phone exposes for
  the cycles, not the sky.
- **Do not use a filter, and do not zoom.** Walk closer instead — digital zoom
  destroys detail. Send originals, not WhatsApp-compressed copies (in WhatsApp
  choose *Document* rather than *Photo* to keep full quality).

## The shots

Save each one with the filename in the left column, in `public/images/`.

### Essential — the site needs these five

| Filename | What to shoot | How |
| --- | --- | --- |
| `storefront.jpg` | **The shop front.** The single most important photo on the site. | Stand across the road. Get the whole shop, the signboard, and a strip of road. Landscape, straight on, phone held level — don't tilt up or the building leans backwards. |
| `interior-1.jpg` | Cycles lined up inside | *Portrait.* Shoot down the row so the cycles recede into the distance. Depth sells better than a flat wall. |
| `workshop.jpg` | The repair area | Tools, stand, a cycle mid-repair. A little mess is good here — it reads as a working workshop, not a showroom. |
| `owner.jpg` | The owner or a mechanic | *Portrait.* At work, hands on a cycle, looking at the camera. Not posed stiffly behind the counter. This is the photo customers trust most. |
| `og-cover.jpg` | Sharing preview | Reuse the storefront shot, cropped wide (1200×630). This is what appears when the link is shared on WhatsApp. |

### Product shots — one per cycle type you stock

| Filename | What to shoot |
| --- | --- |
| `product-mountain.jpg` | A mountain bike, full side view |
| `product-road.jpg` | A road bike |
| `product-kids.jpg` | Kids cycles, ideally a few sizes together |
| `product-ladies.jpg` | A ladies cycle with basket and carrier |
| `product-electric.jpg` | An electric cycle |
| `product-hybrid.jpg` | A hybrid |

For these: **one cycle, side on, plain background.** Roll it out to a clear wall
or the shutter. Frame it so the cycle fills the width with a little air above
and below. Same spot and same angle for all six — consistency across the row is
what makes the grid look designed rather than assembled.

### Gallery — eight, any mix

`gallery-1.jpg` through `gallery-8.jpg`. Good candidates:

- The accessories wall — helmets, locks, bells, lights
- The spare parts counter, drawers open
- A close-up of a wheel, chain or gear set
- Someone being handed a new cycle
- The signboard on its own
- The shop lit up in the evening
- A rack of tyres or tubes
- Assembly work — a cycle being built up

Any slot you skip keeps its artwork. There is no broken layout and nothing to
change in the code.

## Sending them in

1. Drop the files into `public/images/` with the exact filenames above.
2. Compress them so the site stays fast:
   ```bash
   npx @squoosh/cli --mozjpeg '{"quality":72}' -d public/images public/images/*.jpg
   ```
   Or use https://squoosh.app in a browser — MozJPEG, quality 70–75.
3. `npm run build`

The photos are then baked into the page as real images. Nothing else changes.

## If the owner takes photos anyway, ask them to post to Google too

While they have the camera out, uploading the same photos to the Google
Business Profile is worth doing — listings with photos get materially more
clicks and direction requests than listings without. It also means the
`npm run photos` importer will work from then on.
