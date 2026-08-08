/**
 * All interactive behaviour: navigation, accordion, filters, quick view,
 * lightbox, review rail, map consent, live open/closed badge.
 * Vanilla — no framework, no third-party runtime.
 */

import { BUSINESS, telLink, waLink } from './config.js';
import { artSVG } from './art.js';
import { initPhotos } from './photos.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ------------------------------------------------------------------ *
 * Mobile menu
 * ------------------------------------------------------------------ */

export function initMenu() {
  const burger = $('.burger');
  const menu = $('#mobile-menu');
  if (!burger || !menu) return;

  const setOpen = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = false;
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('is-locked', open);
    // The header auto-hides on scroll-down; never leave it hidden with the
    // menu open or the close button goes with it.
    if (open) $('.header')?.classList.remove('is-hidden');
    if (!open) {
      // Wait for the fade before removing from the a11y tree.
      setTimeout(() => {
        if (!menu.classList.contains('is-open')) menu.hidden = true;
      }, 400);
    }
  };

  burger.addEventListener('click', () =>
    setOpen(burger.getAttribute('aria-expanded') !== 'true')
  );

  $$('.menu__link', menu).forEach((a) =>
    a.addEventListener('click', () => setOpen(false))
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
  });

  // Close if the viewport grows past the desktop breakpoint.
  window.matchMedia('(min-width: 980px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

/* ------------------------------------------------------------------ *
 * Scroll-spy + sliding nav pill
 * ------------------------------------------------------------------ */

export function initNav() {
  const nav = $('.nav');
  if (!nav) return;
  const pill = $('.nav__pill', nav);
  const links = $$('.nav__link', nav);
  const sections = links
    .map((l) => document.getElementById(l.getAttribute('href').slice(1)))
    .filter(Boolean);

  const movePill = (link) => {
    if (!pill || !link) return;
    pill.style.width = `${link.offsetWidth}px`;
    pill.style.transform = `translateX(${link.offsetLeft - nav.clientLeft}px)`;
    pill.style.opacity = '1';
  };

  const setActive = (id) => {
    let active = null;
    links.forEach((l) => {
      const on = l.getAttribute('href') === `#${id}`;
      l.classList.toggle('is-active', on);
      if (on) active = l;
    });
    if (active) movePill(active);
    else if (pill) pill.style.opacity = '0';
  };

  if (!('IntersectionObserver' in window) || !sections.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      // Pick the entry closest to the top of the viewport.
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((s) => io.observe(s));
  window.addEventListener(
    'resize',
    () => movePill($('.nav__link.is-active', nav)),
    { passive: true }
  );
}

/* ------------------------------------------------------------------ *
 * Services accordion
 * ------------------------------------------------------------------ */

export function initAccordion() {
  $$('.service__row').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.service');
      const open = item.classList.contains('is-open');
      // Single-open accordion reads calmer than many panels at once.
      $$('.service').forEach((s) => {
        s.classList.remove('is-open');
        $('.service__row', s)?.setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ------------------------------------------------------------------ *
 * Product filters
 * ------------------------------------------------------------------ */

export function initFilters() {
  const buttons = $$('.filter');
  const cards = $$('.product');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      buttons.forEach((b) =>
        b.setAttribute('aria-pressed', String(b === btn))
      );
      cards.forEach((card) => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('is-filtered', !show);
      });
    });
  });
}

/* ------------------------------------------------------------------ *
 * Quick view
 * ------------------------------------------------------------------ */

export function initQuickView(products) {
  const modal = $('#quickview');
  if (!modal || !products) return;

  const media = $('.quickview__media', modal);
  let lastFocus = null;

  const open = (id) => {
    const p = products.find((x) => x.id === id);
    if (!p) return;

    lastFocus = document.activeElement;
    media.innerHTML = `
      <div class="photo photo--zoom" data-photo="${p.photo}" data-alt="${p.name}">
        ${artSVG(p.art, p.name)}
      </div>`;
    $('[data-qv-tag]', modal).textContent = p.tag;
    $('[data-qv-name]', modal).textContent = p.name;
    $('[data-qv-desc]', modal).textContent = p.desc;
    $('[data-qv-specs]', modal).innerHTML = p.specs
      .map(([k, v]) => `<li><span>${k}</span><span>${v}</span></li>`)
      .join('');
    $('[data-qv-wa]', modal).href = waLink(
      `Hello, I would like to enquire about ${p.name} at ${BUSINESS.name}.`
    );
    $('[data-qv-call]', modal).href = telLink();

    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.classList.add('is-locked');
    initPhotos(media);
    $('.quickview__close', modal).focus();
  };

  const close = () => {
    modal.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    setTimeout(() => {
      modal.hidden = true;
      media.innerHTML = '';
    }, 400);
    lastFocus?.focus();
  };

  $$('[data-quickview]').forEach((btn) =>
    btn.addEventListener('click', () => open(btn.dataset.quickview))
  );
  $('[data-qv-close]', modal).addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
}

/* ------------------------------------------------------------------ *
 * Gallery lightbox
 * ------------------------------------------------------------------ */

export function initLightbox(gallery) {
  const box = $('#lightbox');
  if (!box || !gallery?.length) return;

  const frame = $('.lightbox__frame', box);
  const caption = $('[data-lb-caption]', box);
  const count = $('[data-lb-count]', box);
  let index = 0;
  let lastFocus = null;

  const render = () => {
    const g = gallery[index];
    frame.innerHTML = `
      <div class="photo" data-photo="${g.photo}" data-alt="${g.caption}" data-eager="true">
        ${artSVG(g.art, g.caption)}
      </div>`;
    caption.textContent = g.caption;
    count.textContent = `${index + 1} / ${gallery.length}`;
    initPhotos(frame);
  };

  const open = (i) => {
    index = i;
    lastFocus = document.activeElement;
    render();
    box.hidden = false;
    requestAnimationFrame(() => box.classList.add('is-open'));
    document.body.classList.add('is-locked');
    $('[data-lb-close]', box).focus();
  };

  const close = () => {
    box.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    setTimeout(() => {
      box.hidden = true;
      frame.innerHTML = '';
    }, 400);
    lastFocus?.focus();
  };

  const step = (n) => {
    index = (index + n + gallery.length) % gallery.length;
    render();
  };

  $$('[data-lightbox]').forEach((btn) =>
    btn.addEventListener('click', () => open(Number(btn.dataset.lightbox)))
  );
  $('[data-lb-close]', box).addEventListener('click', close);
  $('[data-lb-prev]', box).addEventListener('click', () => step(-1));
  $('[data-lb-next]', box).addEventListener('click', () => step(1));
  box.addEventListener('click', (e) => {
    if (e.target === box || e.target.classList.contains('lightbox__stage')) close();
  });

  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  // Swipe on touch devices
  let x0 = null;
  box.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), {
    passive: true,
  });
  box.addEventListener(
    'touchend',
    (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 55) step(dx < 0 ? 1 : -1);
      x0 = null;
    },
    { passive: true }
  );
}

/* ------------------------------------------------------------------ *
 * Review rail — arrows + pointer drag
 * ------------------------------------------------------------------ */

export function initRail() {
  const rail = $('[data-rail]');
  if (!rail) return;

  const prev = $('[data-rail-prev]');
  const next = $('[data-rail-next]');
  const step = () => rail.querySelector('.review')?.offsetWidth + 18 || 320;

  const sync = () => {
    const max = rail.scrollWidth - rail.clientWidth - 2;
    if (prev) prev.disabled = rail.scrollLeft <= 2;
    if (next) next.disabled = rail.scrollLeft >= max;
  };

  prev?.addEventListener('click', () =>
    rail.scrollBy({ left: -step(), behavior: 'smooth' })
  );
  next?.addEventListener('click', () =>
    rail.scrollBy({ left: step(), behavior: 'smooth' })
  );
  rail.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync, { passive: true });
  sync();

  // Drag to scroll with a mouse — matches the touch experience.
  let down = false;
  let startX = 0;
  let startScroll = 0;

  rail.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') return;
    down = true;
    startX = e.clientX;
    startScroll = rail.scrollLeft;
    rail.classList.add('is-dragging');
  });

  rail.addEventListener('pointermove', (e) => {
    if (!down) return;
    rail.scrollLeft = startScroll - (e.clientX - startX);
  });

  const release = () => {
    if (!down) return;
    down = false;
    rail.classList.remove('is-dragging');
  };
  rail.addEventListener('pointerup', release);
  rail.addEventListener('pointerleave', release);
  rail.addEventListener('pointercancel', release);

  // A drag should not also fire the link underneath.
  rail.addEventListener('click', (e) => {
    if (Math.abs(rail.scrollLeft - startScroll) > 6) e.preventDefault();
  });
}

/* ------------------------------------------------------------------ *
 * Map — load the iframe only on request
 * ------------------------------------------------------------------ */

export function initMap() {
  const map = $('[data-map]');
  const btn = $('[data-map-load]');
  if (!map || !btn) return;

  btn.addEventListener('click', () => {
    if (map.classList.contains('is-loaded')) return;
    const iframe = document.createElement('iframe');
    iframe.src = map.dataset.src;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.title = `Map showing ${BUSINESS.name} in ${BUSINESS.city}`;
    iframe.allowFullscreen = true;
    map.prepend(iframe);
    map.classList.add('is-loaded');
  });
}

/* ------------------------------------------------------------------ *
 * Live open / closed badge
 * ------------------------------------------------------------------ */

const DAY_CODES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function initStatus() {
  const badge = $('[data-status]');
  if (!badge) return;
  const text = $('[data-status-text]', badge);

  const update = () => {
    // Evaluate in India Standard Time regardless of the visitor's timezone.
    const nowIST = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
    );
    const code = DAY_CODES[nowIST.getDay()];
    const mins = nowIST.getHours() * 60 + nowIST.getMinutes();
    const toMins = (t) => {
      const [h, m] = t.split(':').map(Number);
      return h * 60 + m;
    };

    const slot = BUSINESS.openingHours.find((h) => h.days.includes(code));
    const open =
      !!slot && mins >= toMins(slot.opens) && mins < toMins(slot.closes);

    badge.classList.toggle('is-open', open);
    badge.classList.toggle('is-closed', !open);
    text.textContent = open
      ? `Open now · until ${slot.closes}`
      : slot
      ? `Closed · opens ${slot.opens}`
      : 'Closed today';

    // Highlight today's row in the hours table.
    const todayLabel = code === 'Su' ? 'Sunday' : 'Monday';
    $$('.hours li').forEach((li) => {
      const days = li.dataset.hoursRow || '';
      li.classList.toggle(
        'is-today',
        code === 'Su' ? days.includes('Sunday') : days.includes(todayLabel)
      );
    });
  };

  update();
  setInterval(update, 60_000);
}

/* ------------------------------------------------------------------ *
 * Back to top + footer year
 * ------------------------------------------------------------------ */

export function initMisc() {
  $('[data-to-top]')?.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  const year = $('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
}
