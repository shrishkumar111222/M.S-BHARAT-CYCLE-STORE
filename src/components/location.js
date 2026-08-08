import { icons } from './icons.js';
import { BUSINESS, telLink, directionsLink } from '../scripts/config.js';

/** Keyless Google Maps embed — works without an API key. */
const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BUSINESS.name}, ${BUSINESS.street}, ${BUSINESS.district}, ${BUSINESS.state}`
)}&output=embed`;

export const location = () => `
<section class="section location" id="visit">
  <div class="shell">
    <div class="section-head section-head--center" data-reveal="up">
      <span class="eyebrow">Store Location</span>
      <h2 class="text-grad">Come and see the cycles</h2>
      <p>
        We are on the main road in Sherghati. Parking is easy and you are
        welcome to test-ride before you decide.
      </p>
    </div>

    <div class="location__layout">
      <!-- The map iframe only loads on click, keeping third-party JS out of
           the initial page load. -->
      <div class="map" data-map data-src="${embedSrc}" data-reveal="scale">
        <div class="map__consent">
          <span class="map__pin" aria-hidden="true">${icons.pin}</span>
          <p>Load the interactive Google Map to see exactly where we are.</p>
          <button class="btn btn--primary" type="button" data-map-load>
            ${icons.pin}<span>Show map</span>
          </button>
        </div>
      </div>

      <div class="location__panel glass" data-reveal="up" data-delay="120">
        <span class="status" data-status>
          <span class="status__dot" aria-hidden="true"></span>
          <span data-status-text>Checking hours…</span>
        </span>

        <address class="address">
          <strong>${BUSINESS.name}</strong>
          ${BUSINESS.street},<br>
          ${BUSINESS.district}, ${BUSINESS.state} ${BUSINESS.postalCode}
        </address>

        <div>
          <h3 style="font-size:var(--f-xs);letter-spacing:.18em;text-transform:uppercase;color:var(--text-low);margin-bottom:.5rem">
            Business Hours
          </h3>
          <ul class="hours" role="list">
            ${BUSINESS.hours
              .map(
                (h) => `<li data-hours-row="${h.days}">
              <span class="hours__days">${h.days}</span>
              <span class="hours__time">${h.time}</span>
            </li>`
              )
              .join('')}
          </ul>
        </div>

        <div class="location__actions">
          <a class="btn btn--primary" href="${telLink()}">
            ${icons.phone}<span>${BUSINESS.phoneDisplay}</span>
          </a>
          <a class="btn btn--ghost" href="${directionsLink()}"
             target="_blank" rel="noopener">
            ${icons.directions}<span>Get Directions</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`;
