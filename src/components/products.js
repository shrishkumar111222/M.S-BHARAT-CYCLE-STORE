import { icons } from './icons.js';
import { photoSlot } from '../scripts/art.js';
import { PRODUCTS, PRODUCT_FILTERS } from '../scripts/data.js';
import { waLink } from '../scripts/config.js';

const card = (p, i) => `
<article class="product glass" data-cat="${p.cat}" data-id="${p.id}"
         data-reveal="up" data-delay="${(i % 3) * 90}">
  ${photoSlot({
    photo: p.photo,
    art: p.art,
    alt: `${p.name} available at M.S Bharat Cycle Store`,
    className: 'photo--zoom',
  })}
  <span class="product__tag">${p.tag}</span>
  <button class="product__quick" type="button" data-quickview="${p.id}">
    Quick View
  </button>

  <div class="product__body">
    <h3>${p.name}</h3>
    <p class="product__desc">${p.desc}</p>
    <div class="product__meta">
      <span class="product__price">${p.price}<small>Starting from</small></span>
      <a class="product__enquire" href="${waLink(
        `Hello, I would like to enquire about ${p.name} at M.S Bharat Cycle Store.`
      )}" target="_blank" rel="noopener"
         aria-label="Enquire about ${p.name} on WhatsApp">
        ${icons.whatsapp}<span>Enquire</span>
      </a>
    </div>
  </div>
</article>`;

export const products = () => `
<section class="section products" id="cycles">
  <div class="shell">
    <div class="products__head">
      <div class="section-head" data-reveal="up">
        <span class="eyebrow">Our Collection</span>
        <h2 class="text-grad">Find the cycle<br>that fits your ride.</h2>
        <p>
          Prices shown are indicative starting points and change with model and
          stock. Walk in or call for today's exact rate.
        </p>
      </div>

      <div class="filters" role="group" aria-label="Filter cycles by type"
           data-reveal="up" data-delay="120">
        ${PRODUCT_FILTERS.map(
          (f, i) =>
            `<button class="filter" type="button" data-filter="${f.id}"
                     aria-pressed="${i === 0}">${f.label}</button>`
        ).join('')}
      </div>
    </div>

    <div class="products__grid">
      ${PRODUCTS.map(card).join('')}
    </div>
  </div>
</section>

<!-- Quick-view modal, populated from the embedded product JSON -->
<div class="quickview" id="quickview" role="dialog" aria-modal="true"
     aria-labelledby="qv-title" hidden>
  <div class="quickview__panel glass">
    <button class="quickview__close" type="button" data-qv-close
            aria-label="Close quick view">${icons.close}</button>
    <div class="quickview__media"></div>
    <div class="quickview__body">
      <span class="eyebrow" data-qv-tag></span>
      <h3 id="qv-title" data-qv-name></h3>
      <p data-qv-desc></p>
      <ul class="quickview__specs" data-qv-specs role="list"></ul>
      <div class="quickview__actions">
        <a class="btn btn--primary" data-qv-wa target="_blank" rel="noopener">
          ${icons.whatsapp}<span>Enquire</span>
        </a>
        <a class="btn btn--ghost" data-qv-call>${icons.phone}<span>Call store</span></a>
      </div>
    </div>
  </div>
</div>`;
