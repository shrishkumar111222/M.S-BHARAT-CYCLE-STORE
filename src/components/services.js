import { icons } from './icons.js';
import { photoSlot } from '../scripts/art.js';
import { SERVICES } from '../scripts/data.js';
import { waLink } from '../scripts/config.js';

const row = (s, i) => `
<li class="service${i === 0 ? ' is-open' : ''}" data-reveal="up" data-delay="${i * 55}">
  <button class="service__row" type="button"
          aria-expanded="${i === 0}" aria-controls="svc-${i}">
    <span class="service__num">${String(i + 1).padStart(2, '0')}</span>
    <span class="service__name">${s.name}</span>
    <span class="service__plus" aria-hidden="true">${icons.plus}</span>
  </button>
  <div class="service__panel" id="svc-${i}">
    <div><p>${s.detail}</p></div>
  </div>
</li>`;

export const services = () => `
<section class="section services" id="services">
  <span class="services__watermark" aria-hidden="true" data-parallax="0.06">WORKSHOP</span>

  <div class="shell">
    <div class="section-head" data-reveal="up">
      <span class="eyebrow">Repairs &amp; Servicing</span>
      <h2 class="text-grad">A workshop, not just<br>a counter.</h2>
      <p>
        Every cycle we sell can be serviced here for as long as you ride it.
        Bring it in — most jobs are finished the same day.
      </p>
    </div>

    <div class="services__layout">
      <div class="services__media" data-reveal="scale">
        <div class="img-reveal" style="border-radius:var(--r-xl);overflow:hidden">
          ${photoSlot({
            photo: 'workshop.jpg',
            art: 'workshop',
            alt: 'The repair workshop at M.S Bharat Cycle Store',
            className: 'photo--zoom',
          })}
        </div>
        <div class="services__chip glass">
          <strong>Same&nbsp;Day</strong>
          <span>Most Repairs</span>
        </div>
      </div>

      <div>
        <ul class="service-list" role="list">
          ${SERVICES.map(row).join('')}
        </ul>

        <a class="btn btn--primary btn--lg" style="margin-top:2rem"
           href="${waLink(
             'Hello, I would like to book a cycle service at M.S Bharat Cycle Store.'
           )}" target="_blank" rel="noopener">
          ${icons.whatsapp}<span>Book a service on WhatsApp</span>
        </a>
      </div>
    </div>
  </div>
</section>`;
