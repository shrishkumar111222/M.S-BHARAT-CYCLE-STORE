import { icons } from './icons.js';
import { photoSlot } from '../scripts/art.js';
import { GALLERY } from '../scripts/data.js';

const item = (g, i) => `
<button class="masonry__item" type="button" data-ratio="${g.ratio}"
        data-lightbox="${i}" data-reveal="blur" data-delay="${(i % 3) * 90}"
        aria-label="View photo: ${g.caption}">
  ${photoSlot({ photo: g.photo, art: g.art, alt: g.caption, className: 'photo--zoom' })}
  <span class="masonry__zoom" aria-hidden="true">${icons.zoom}</span>
  <span class="masonry__caption">${g.caption}</span>
</button>`;

export const gallery = () => `
<section class="section gallery" id="gallery">
  <div class="shell">
    <div class="section-head section-head--center" data-reveal="up">
      <span class="eyebrow">Gallery</span>
      <h2 class="text-grad">Inside the store</h2>
      <p>
        Photographs from the shop — the floor, the workshop and the stock.
      </p>
    </div>

    <div class="masonry">
      ${GALLERY.map(item).join('')}
    </div>
  </div>
</section>

<!-- Lightbox -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true"
     aria-label="Photo viewer" hidden>
  <div class="lightbox__bar">
    <span data-lb-count>1 / ${GALLERY.length}</span>
    <button class="lightbox__close" type="button" data-lb-close
            aria-label="Close photo viewer">${icons.close}</button>
  </div>

  <div class="lightbox__stage">
    <button class="lightbox__nav lightbox__nav--prev" type="button"
            data-lb-prev aria-label="Previous photo">${icons.arrowLeft}</button>
    <div class="lightbox__frame"></div>
    <button class="lightbox__nav lightbox__nav--next" type="button"
            data-lb-next aria-label="Next photo">${icons.arrowRight}</button>
  </div>

  <p class="lightbox__caption" data-lb-caption></p>
</div>`;
