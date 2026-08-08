import { icons } from './icons.js';
import { photoSlot } from '../scripts/art.js';
import { FEATURES } from '../scripts/data.js';
import { BUSINESS } from '../scripts/config.js';

const card = (f, i) => `
<article class="feature glass" data-reveal="up" data-delay="${i * 70}">
  <span class="feature__icon" aria-hidden="true">${icons[f.icon]}</span>
  <h3>${f.title}</h3>
  <p>${f.text}</p>
</article>`;

export const features = () => `
<section class="section features" id="why">
  <div class="shell">
    <div class="section-head" data-reveal="up">
      <span class="eyebrow">Why Choose Us</span>
      <h2 class="text-grad">Everything a cycle needs,<br>under one roof.</h2>
      <p>
        Buying a cycle is the easy part. What matters afterwards is whether
        someone nearby can service it, stock the right part and give you a
        straight answer. That is the shop we have built in Sherghati.
      </p>
    </div>

    <div class="features__grid">
      ${FEATURES.slice(0, 3).map(card).join('')}

      <article class="feature feature--wide glass" data-reveal="up" data-delay="220">
        <div class="feature__body">
          <span class="feature__icon" aria-hidden="true">${icons.chat}</span>
          <h3>Advice from people who ride these roads</h3>
          <p>
            We size the cycle to the rider, not to the sale. Tell us where you
            ride — town roads, village tracks, school runs — and we will point
            you to the model that will still feel right in three years.
          </p>
        </div>
        ${photoSlot({
          photo: 'owner.jpg',
          art: 'owner',
          alt: `The team at ${BUSINESS.name}`,
          className: 'photo--zoom',
        })}
      </article>

      ${FEATURES.slice(3).map((f, i) => card(f, i + 4)).join('')}
    </div>
  </div>
</section>`;
