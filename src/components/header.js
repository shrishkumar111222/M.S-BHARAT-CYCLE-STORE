import { icons } from './icons.js';
import { BUSINESS, telLink } from '../scripts/config.js';

export const NAV = [
  { id: 'why', label: 'Why Us' },
  { id: 'brands', label: 'Brands' },
  { id: 'cycles', label: 'Cycles' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'visit', label: 'Visit' },
];

const wordmark = `
<a class="brand" href="#top" aria-label="${BUSINESS.name} — home">
  <span class="brand__mark" aria-hidden="true">${icons.cycle}</span>
  <span class="brand__text">
    <span class="brand__name">M.S BHARAT</span>
    <span class="brand__sub">Cycle Store</span>
  </span>
</a>`;

export const header = () => `
<div class="progress" aria-hidden="true"></div>

<header class="header" id="site-header">
  <div class="header__inner">
    ${wordmark}

    <nav class="nav" aria-label="Primary">
      <span class="nav__pill" aria-hidden="true"></span>
      ${NAV.map((n) => `<a class="nav__link" href="#${n.id}">${n.label}</a>`).join('')}
    </nav>

    <a class="btn btn--primary header__cta" href="${telLink()}">
      ${icons.phone}<span>Call Now</span>
    </a>

    <button class="burger" type="button" aria-expanded="false"
            aria-controls="mobile-menu" aria-label="Open menu">
      <span class="burger__box" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>
  </div>
</header>

<div class="menu" id="mobile-menu" hidden>
  <nav aria-label="Mobile">
    <ul class="menu__list" role="list">
      ${NAV.map(
        (n, i) => `<li style="--i:${i}">
        <a class="menu__link" href="#${n.id}">
          <span>0${i + 1}</span>${n.label}
        </a></li>`
      ).join('')}
    </ul>
  </nav>
  <div class="menu__actions">
    <a class="btn btn--primary btn--block btn--lg" href="${telLink()}">
      ${icons.phone}<span>Call ${BUSINESS.phoneDisplay}</span>
    </a>
    <a class="btn btn--ghost btn--block btn--lg" href="#visit">
      ${icons.pin}<span>Visit Store</span>
    </a>
  </div>
</div>`;
