import { BRANDS } from '../scripts/data.js';

const card = (b, dup = false) => `
<div class="brand-card"${dup ? ' aria-hidden="true"' : ''}>
  <span class="brand-card__name">${b.name}</span>
  <span class="brand-card__tag">${b.tag}</span>
</div>`;

export const brands = () => `
<section class="brands" id="brands" aria-labelledby="brands-title">
  <div class="shell">
    <h2 class="brands__label" id="brands-title" data-reveal="up">
      Trusted brands we stock &amp; service
    </h2>
  </div>

  <!-- Track is duplicated so the marquee loops without a visible seam -->
  <div class="marquee" data-reveal="up" data-delay="120">
    <div class="marquee__track">
      ${BRANDS.map((b) => card(b)).join('')}
      ${BRANDS.map((b) => card(b, true)).join('')}
    </div>
  </div>
</section>`;
