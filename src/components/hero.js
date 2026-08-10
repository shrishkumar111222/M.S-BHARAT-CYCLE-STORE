import { icons, stars } from './icons.js';
import { photoSlot } from '../scripts/art.js';
import { BUSINESS, telLink, directionsLink } from '../scripts/config.js';

export const hero = () => `
<section class="hero" id="top">
  <!-- Layer 1: the real storefront photograph (public/images/storefront.jpg) -->
  <div class="hero__media" data-parallax="0.12">
    ${photoSlot({
      photo: 'storefront.jpg',
      art: 'storefront',
      alt: `Shop front of ${BUSINESS.name} at Siddharth Market, Kashi Nath More, Gaya`,
      eager: true,
    })}
  </div>

  <div class="hero__scrim" aria-hidden="true"></div>

  <div class="hero__fx" aria-hidden="true">
    <span class="orb orb--1"></span>
    <span class="orb orb--2"></span>
    <span class="orb orb--3"></span>
    <span class="hero__grid"></span>
    <span class="hero__sweep"></span>
  </div>

  <div class="hero__inner">
    <p class="eyebrow hero__badge" data-reveal="up">
      <span class="stars" aria-hidden="true">${stars(BUSINESS.rating)}</span>
      <span>${BUSINESS.rating} on Google · ${BUSINESS.district}, ${BUSINESS.state}</span>
    </p>

    <h1 class="hero__title" data-lines>
      <span data-line>Ride Better.</span>
      <span data-line><em>Ride Smarter.</em></span>
    </h1>

    <p class="hero__sub" data-reveal="up" data-delay="380">
      ${BUSINESS.tagline} — cycles for every rider, genuine spare parts,
      and a workshop that fixes it properly the first time.
    </p>

    <div class="hero__actions" data-reveal="up" data-delay="480">
      <a class="btn btn--primary btn--lg" href="${telLink()}">
        ${icons.phone}<span>Call Now</span>
      </a>
      <a class="btn btn--ghost btn--lg" href="${directionsLink()}"
         target="_blank" rel="noopener">
        ${icons.pin}<span>Visit Store</span>
      </a>
      <a class="btn btn--ghost btn--lg" href="#cycles">
        ${icons.grid}<span>View Collection</span>
      </a>
    </div>

    <dl class="hero__strip" data-reveal="up" data-delay="580">
      <div class="hero__fact">
        <dt>Open Today</dt>
        <dd>8:00 AM – 8:30 PM<small>Mon – Sat</small></dd>
      </div>
      <div class="hero__fact">
        <dt>Est.</dt>
        <dd>${BUSINESS.established}<small>Serving Gaya</small></dd>
      </div>
      <div class="hero__fact">
        <dt>Brands</dt>
        <dd>9+<small>Hero · Atlas · Firefox</small></dd>
      </div>
      <div class="hero__fact">
        <dt>Repairs</dt>
        <dd>Same Day<small>Most jobs while you wait</small></dd>
      </div>
    </dl>
  </div>

  <span class="hero__cue" aria-hidden="true">Scroll</span>
</section>`;
