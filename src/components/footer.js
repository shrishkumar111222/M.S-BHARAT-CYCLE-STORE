import { icons } from './icons.js';
import { NAV } from './header.js';
import { BUSINESS, telLink, waLink, directionsLink } from '../scripts/config.js';

export const cta = () => `
<section class="cta">
  <div class="shell cta__inner">
    <span class="eyebrow" data-reveal="up">Ready when you are</span>
    <h2 class="text-grad" data-reveal="up" data-delay="80">
      Let's get you on the right cycle.
    </h2>
    <p data-reveal="up" data-delay="160">
      Call the shop, send a WhatsApp message, or just walk in.
      We are happy to talk through the options with no pressure to buy.
    </p>
    <div class="cta__actions" data-reveal="up" data-delay="240">
      <a class="btn btn--primary btn--lg" href="${telLink()}">
        ${icons.phone}<span>Call ${BUSINESS.phoneDisplay}</span>
      </a>
      <a class="btn btn--ghost btn--lg"
         href="${waLink('Hello, I would like to know more about the cycles you have in stock.')}"
         target="_blank" rel="noopener">
        ${icons.whatsapp}<span>Message on WhatsApp</span>
      </a>
    </div>
  </div>
</section>`;

export const footer = () => `
<footer class="footer">
  <div class="shell">
    <div class="footer__grid">
      <div class="footer__about">
        <a class="brand" href="#top" aria-label="${BUSINESS.name} — back to top">
          <span class="brand__mark" aria-hidden="true">${icons.cycle}</span>
          <span class="brand__text">
            <span class="brand__name">M.S BHARAT</span>
            <span class="brand__sub">Cycle Store</span>
          </span>
        </a>
        <p>
          ${BUSINESS.tagline}. Sales, servicing, genuine spare parts and
          accessories for every kind of rider in ${BUSINESS.district},
          ${BUSINESS.state}.
        </p>
        <div class="socials">
          <a href="${BUSINESS.mapsPlaceUrl}" target="_blank" rel="noopener"
             aria-label="Find us on Google Maps">${icons.google}</a>
          <a href="${waLink('Hello!')}" target="_blank" rel="noopener"
             aria-label="Message us on WhatsApp">${icons.whatsapp}</a>
          <a href="#" aria-label="Facebook (add your page link)">${icons.facebook}</a>
          <a href="#" aria-label="Instagram (add your profile link)">${icons.instagram}</a>
        </div>
      </div>

      <div>
        <h4>Quick Links</h4>
        <ul class="footer__links" role="list">
          ${NAV.map((n) => `<li><a href="#${n.id}">${n.label}</a></li>`).join('')}
        </ul>
      </div>

      <div>
        <h4>Business Hours</h4>
        <ul class="footer__hours" role="list">
          ${BUSINESS.hours
            .map(
              (h) => `<li><span>${h.days}</span><strong>${h.time}</strong></li>`
            )
            .join('')}
        </ul>
      </div>

      <div>
        <h4>Location</h4>
        <address class="address" style="font-size:var(--f-sm)">
          <span class="text-blue">${BUSINESS.branch}</span><br>
          ${BUSINESS.street},<br>
          ${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.postalCode}
        </address>
        <ul class="footer__links" role="list" style="margin-top:1rem">
          <li><a href="${telLink()}">${BUSINESS.phoneDisplay}</a></li>
          <li><a href="${directionsLink()}" target="_blank" rel="noopener">Get directions</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy; <span data-year>${new Date().getFullYear()}</span> ${BUSINESS.name}. All rights reserved.</p>
      <p>GSTIN: ${BUSINESS.gstin}</p>
    </div>
  </div>
</footer>`;

export const dock = () => `
<div class="dock">
  <a class="dock__btn dock__btn--wa"
     href="${waLink('Hello M.S Bharat Cycle Store, I have a question.')}"
     target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    ${icons.whatsapp}<span class="dock__label">Chat on WhatsApp</span>
  </a>
  <a class="dock__btn dock__btn--call" href="${telLink()}" aria-label="Call the store">
    ${icons.phone}<span class="dock__label">Call the store</span>
  </a>
  <button class="dock__btn dock__btn--top" type="button" data-to-top
          aria-label="Back to top">
    ${icons.arrowUp}<span class="dock__label">Back to top</span>
  </button>
</div>

<nav class="callbar" aria-label="Quick contact">
  <a href="${waLink('Hello M.S Bharat Cycle Store, I have a question.')}"
     target="_blank" rel="noopener">${icons.whatsapp}<span>WhatsApp</span></a>
  <a href="${telLink()}">${icons.phone}<span>Call Now</span></a>
</nav>`;
