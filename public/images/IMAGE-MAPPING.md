# Photo selection — which shot goes where

Assessment of the 10 photos supplied by the client. Save each **accepted**
photo into this folder using the filename in the first column, then rebuild
(or let the GitHub Action rebuild).

## ✅ Use these

| Save as | Which photo | Why |
| --- | --- | --- |
| `storefront.jpg` | **Night, landscape, wide — lit signboard, man seated inside, full cycle display across the front** | The hero. Landscape fits the full-bleed hero without cropping, the illuminated sign is the strongest brand moment the shop has, and the warm shelf lighting sits perfectly against the site's dark theme. |
| `interior-1.jpg` | **Interior, landscape — lit shelving with ride-on jeeps and bikes above, row of cycles below** | Best interior shot by a distance. No people, clean lighting, and it shows the depth of stock in one frame. |
| `gallery-1.jpg` | **Night, landscape, with red and white balloons** | Festive, well lit. Reads as a shop that celebrates openings and festivals. |
| `gallery-2.jpg` | **Day, portrait, straight-on — sign filling the top, ride-ons lined up outside** | Cleanest daytime shot of the signboard. |
| `gallery-3.jpg` | **Night, portrait — lit sign, cycles in the foreground** | Good vertical for the masonry column. |
| `gallery-4.jpg` | **Day, portrait, wider angle — whole shop front with the kids' vehicles outside** | Shows the shop in its street context. |
| `product-rideon.jpg` | **Interior — red and blue ride-on jeeps with the light bars glowing** | The LED grilles read well as a product shot. Crop out the person standing at the right edge. |
| `og-cover.jpg` | **Same night landscape as `storefront.jpg`, cropped to 1200×630** | This is the thumbnail when the link is shared on WhatsApp. It matters more than people expect. |

## ❌ Do not use

| Which photo | Why not |
| --- | --- |
| **Interior shelf shot with "Thursday 2:02 PM" and a heart sticker** | Burned-in Snapchat/Instagram overlay. Nothing kills a premium feel faster than another app's UI printed across the image, and it cannot be removed — only cropped around, which loses the shot. The accepted landscape shelf photo shows the same display, better. |
| **Night storefront with hearts, "Friday" and "MOOD" lettering** | Same problem, and the stickers sit dead centre over the shopfront. |

If the owner has the originals of those two **without** the stickers, they are
worth having — the framing on both is good.

## ⚠️ Needs permission before publishing

| Which photo | Issue |
| --- | --- |
| **Day, portrait — small child sitting in the white ride-on jeep with the Indian flag** | Genuinely the warmest, most human photo in the set, and it sells the kids' range better than any product shot. But a minor's face is clearly identifiable, and this goes on a public website indexed by search engines. **Get explicit permission from the child's parent first.** With permission, save it as `gallery-5.jpg`. Without, leave it out — no photo is worth that risk to the shop's reputation. |

## Notes for future photos

The set is strong on the shopfront and weak on two things the site has slots
for:

- **`workshop.jpg`** — the repair area, tools, a cycle being worked on. The
  Services section is built around this image and currently falls back to
  artwork. This is the most valuable gap to fill.
- **`owner.jpg`** — the owner or a mechanic at work, looking at camera. The
  "Expert Guidance" card is built for it, and it is the photo customers trust
  most.

Also worth having: a plain side-on shot of one mountain cycle, one ladies
cycle and one kids cycle against a clear wall, for the product cards. Same
spot, same angle for all three.

## Before committing

Compress, or the page will load slowly on the 4G connections most of these
customers are using:

```bash
npx @squoosh/cli --mozjpeg '{"quality":72}' -d public/images public/images/*.jpg
```

Target under ~300 KB per file.
