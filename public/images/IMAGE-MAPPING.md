# Which photo gets which filename

The photos are numbered **in the order they were sent** — first message 1–5,
second message 6–10. Each row names the one thing that makes that photo
impossible to confuse with the others.

## If you only do one thing

Upload **Photo 8** as **`storefront`**. That is the hero image, the first thing
anyone sees. On its own it transforms the site.

## The full list

| # | How to recognise it | Save as |
| --- | --- | --- |
| 1 | Daytime, **tall**, taken from further back — cardboard boxes on the left, the photo/tour shop visible on the right | `gallery-6` |
| 2 | Daytime, **tall**, closer in — sign fills the top, a man in a light shirt with his back to camera on the right | `gallery-3` |
| 3 | Inside — a **red jeep and a blue jeep**, the blue one's grille lit up with coloured LEDs | `product-rideon` |
| 4 | Night, **wide** — the sign lit up with **red and white balloons** tied across the front | `gallery-2` |
| 5 | Inside, shelves of toy cars — has **"Thursday 2:02 PM"** and a heart printed on it | ❌ **skip** |
| 6 | Night, tall — has **hearts, "Friday" and "MOOD"** printed across the middle | ❌ **skip** |
| 7 | Daytime, tall — a **small child sitting in the white jeep** with an Indian flag | ⚠️ see below |
| 8 | Night, **wide** — lit sign, a man **sitting on a stool inside** looking at his phone, **no balloons** | `storefront` ⭐ |
| 9 | Night, **tall** — same evening scene as 8 but vertical | `gallery-4` |
| 10 | Inside, **wide** — shelves of toy jeeps and bikes above, a row of cycles below, **nobody in the picture** | `gallery-1` |

Then upload **Photo 8 a second time**, named **`og-cover`**. That is the small
picture that shows up when the website link is shared on WhatsApp.

## The two to skip

Photos **5** and **6** have Snapchat stickers printed into the image — the time,
the hearts, the word "MOOD". They cannot be removed, only cropped around, and a
client will notice them immediately on a website that is otherwise clean.

If the owner still has the originals without stickers, both are worth having.

## Photo 7 — the child

It is the warmest photo in the set and it sells the kids' range better than any
product shot. But the child's face is clearly recognisable and this is a public
website that Google will index.

**Ask the child's parent first.** If they say yes, upload it as `gallery-5`.
If you cannot ask, leave it out.

## Names do not have to be exact

The site matches on the **name only**. Capital letters and the file extension
are ignored, so all of these fill the same slot:

```
storefront.jpg    Storefront.JPG    STOREFRONT.png    storefront.jpeg
```

You only need the name itself right: `storefront`, `gallery-1`, `gallery-2`,
`gallery-3`, `gallery-4`, `gallery-6`, `product-rideon`, `og-cover`.

**HEIC will not work** — browsers cannot display it. If your phone saved
`.HEIC`, convert to JPG first. On an iPhone: Settings → Camera → Formats →
Most Compatible, or just send the photo to yourself on WhatsApp and save it
back, which converts it to JPG automatically.

## How to upload

1. Go to **github.com/shrishkumar111222/M.S-BHARAT-CYCLE-STORE**
2. Open the **`public`** folder, then **`images`**
3. **Add file → Upload files**
4. Drag the photos in
5. Rename each one using the table above
6. **Commit changes** at the bottom

The site rebuilds itself and the photos appear in about a minute and a half.

## Slots still empty

No supplied photo fits these, and both are worth getting next time:

- **`workshop`** — the repair area, tools, a cycle being worked on. The whole
  Services section is built around it.
- **`owner`** — the owner or a mechanic at work, looking at the camera. This is
  the photo customers trust most.

Also useful: one mountain cycle, one ladies cycle and one kids cycle shot
side-on against a plain wall, same spot and angle for all three, saved as
`product-mountain`, `product-ladies` and `product-kids`.

## Compress before uploading

Large photos make the site slow on the mobile connections most customers use.
Aim for under about 300 KB each — https://squoosh.app in a browser, or:

```bash
npx @squoosh/cli --mozjpeg '{"quality":72}' -d public/images public/images/*.jpg
```
