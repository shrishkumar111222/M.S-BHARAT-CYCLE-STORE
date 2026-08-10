import { icons, stars } from './icons.js';
import { REVIEWS } from '../scripts/data.js';
import { BUSINESS } from '../scripts/config.js';

const card = (r, i) => `
<article class="review glass" data-reveal="up" data-delay="${(i % 3) * 90}">
  <span class="review__stars" aria-label="${r.stars} out of 5 stars">
    ${stars(r.stars)}
  </span>
  <p class="review__quote">${r.text}</p>
  <div class="review__who">
    <span class="review__avatar" aria-hidden="true">${r.name.charAt(0)}</span>
    <span>
      <span class="review__name">${r.name}</span>
      <span class="review__when">${r.when}</span>
    </span>
    <span class="review__src" aria-label="Google review">${icons.google}</span>
  </div>
</article>`;

export const reviews = () => `
<section class="section reviews" id="reviews">
  <div class="shell">
    <div class="reviews__top">
      <div class="section-head" data-reveal="up">
        <span class="eyebrow">Customer Reviews</span>
        <h2 class="text-grad">What Gaya says<br>about us.</h2>
      </div>

      <div class="reviews__aside" data-reveal="up" data-delay="120">
        <div class="reviews__score glass">
          <span class="reviews__score-num">${BUSINESS.rating}</span>
          <span class="reviews__score-meta">
            <span class="stars" aria-hidden="true">${stars(BUSINESS.rating)}</span>
            <span>${BUSINESS.reviewCount} Google reviews</span>
          </span>
        </div>
        <div class="rail-nav">
          <button type="button" data-rail-prev aria-label="Previous reviews">
            ${icons.arrowLeft}
          </button>
          <button type="button" data-rail-next aria-label="Next reviews">
            ${icons.arrowRight}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="shell">
    <div class="rail" data-rail data-reveal-group tabindex="0" role="region"
         aria-label="Customer reviews, scrollable">
      ${REVIEWS.map(card).join('')}
    </div>

    <p style="margin-top:.5rem;font-size:var(--f-xs);color:var(--text-low)">
      Demo content — replace with verbatim Google reviews before launch.
      See <code>src/scripts/data.js</code>.
    </p>
  </div>
</section>`;
