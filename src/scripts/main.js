/**
 * Entry point. The page is fully rendered as static HTML at build time —
 * this only attaches behaviour, so the site reads and ranks fine with
 * JavaScript disabled.
 */

import { initPhotos } from './photos.js';
import {
  initReveal,
  initLines,
  initCounters,
  initScrollFx,
  initSpotlight,
} from './reveal.js';
import {
  initMenu,
  initNav,
  initAccordion,
  initFilters,
  initQuickView,
  initLightbox,
  initRail,
  initMap,
  initStatus,
  initMisc,
} from './ui.js';

/** Product + gallery data are embedded in the page by the build. */
const readJSON = (id) => {
  const el = document.getElementById(id);
  if (!el) return null;
  try {
    return JSON.parse(el.textContent);
  } catch {
    return null;
  }
};

function boot() {
  document.documentElement.classList.add('js');

  initPhotos();
  initLines();
  initReveal();
  initCounters();
  initScrollFx();
  initSpotlight();

  initMenu();
  initNav();
  initAccordion();
  initFilters();
  initQuickView(readJSON('product-data'));
  initLightbox(readJSON('gallery-data'));
  initRail();
  initMap();
  initStatus();
  initMisc();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
