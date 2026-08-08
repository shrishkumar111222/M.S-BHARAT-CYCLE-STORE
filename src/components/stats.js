import { STATS } from '../scripts/data.js';

const cell = (s, i) => `
<div class="stat" data-reveal="up" data-delay="${i * 80}">
  <p class="stat__value">
    <span data-count="${s.value}"${s.decimals ? ` data-decimals="${s.decimals}"` : ''}>0</span>
    <sup>${s.suffix}</sup>
  </p>
  <p class="stat__label">${s.label}</p>
  <span class="stat__bar" aria-hidden="true"></span>
</div>`;

export const stats = () => `
<section class="stats" aria-label="Store statistics">
  <div class="shell">
    <div class="stats__grid">
      ${STATS.map(cell).join('')}
    </div>
  </div>
</section>`;
