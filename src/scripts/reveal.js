/**
 * Scroll animation engine — a ~1KB stand-in for AOS + GSAP ScrollTrigger.
 *
 * Handles: element reveals, line-by-line headline masks, count-up numbers,
 * parallax layers and the scroll-progress bar. Everything runs off two
 * IntersectionObservers plus one rAF-throttled scroll listener, so it stays
 * off the main thread's critical path and keeps Lighthouse happy.
 */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------------ *
 * 1. Element reveals
 * ------------------------------------------------------------------ */

export function initReveal() {
  const items = [...document.querySelectorAll('[data-reveal], .img-reveal')];
  const groups = [...document.querySelectorAll('[data-reveal-group]')];
  if (!items.length) return;

  items.forEach((el) => {
    // data-delay="120" → staggered entrance
    if (el.dataset.delay) el.style.setProperty('--reveal-delay', `${el.dataset.delay}ms`);
  });

  if (REDUCED || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  /* Items inside a horizontally-scrolling rail can sit outside the viewport
     on the x-axis, so they would never intersect on their own and would stay
     invisible once the user scrolls the rail. Reveal them as a group when
     the rail itself comes into view. */
  const grouped = new Set();
  groups.forEach((group) =>
    group.querySelectorAll('[data-reveal]').forEach((el) => grouped.add(el))
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.hasAttribute('data-reveal-group')) {
          el.querySelectorAll('[data-reveal]').forEach((child) =>
            child.classList.add('is-revealed')
          );
        } else {
          el.classList.add('is-revealed');
        }
        io.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  items.forEach((el) => {
    if (!grouped.has(el)) io.observe(el);
  });
  groups.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ *
 * 2. Headline line masks
 * ------------------------------------------------------------------ */

/**
 * Wraps each <span data-line> in an overflow-hidden mask so the text
 * slides up from below. Markup declares the lines, so there's no
 * text-measuring reflow.
 */
export function initLines() {
  document.querySelectorAll('[data-lines]').forEach((host) => {
    const lines = [...host.querySelectorAll('[data-line]')];
    lines.forEach((line, i) => {
      const mask = document.createElement('span');
      mask.className = 'line-mask';
      mask.style.setProperty('--line-delay', `${i * 110 + 120}ms`);
      line.replaceWith(mask);
      mask.appendChild(line);
      requestAnimationFrame(() => mask.classList.add('is-revealed'));
    });
  });
}

/* ------------------------------------------------------------------ *
 * 3. Count-up statistics
 * ------------------------------------------------------------------ */

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const duration = 1800;
  const start = performance.now();

  const format = (n) =>
    n.toLocaleString('en-IN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  if (REDUCED) {
    el.textContent = format(target);
    return;
  }

  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = format(target * easeOutExpo(p));
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = format(target);
  };
  requestAnimationFrame(tick);
}

export function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(countUp);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        entry.target.closest('.stat')?.classList.add('is-counted');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  els.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ *
 * 4. Parallax + scroll progress (one shared rAF loop)
 * ------------------------------------------------------------------ */

export function initScrollFx() {
  const layers = [...document.querySelectorAll('[data-parallax]')];
  const progress = document.querySelector('.progress');
  const dock = document.querySelector('.dock');
  const callbar = document.querySelector('.callbar');
  const header = document.querySelector('.header');

  let lastY = window.scrollY;
  let ticking = false;

  const run = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    if (progress) progress.style.setProperty('--p', max > 0 ? y / max : 0);

    if (dock) dock.classList.toggle('is-scrolled', y > 600);
    if (callbar) callbar.classList.toggle('is-visible', y > 600);

    if (header) {
      header.classList.toggle('is-stuck', y > 24);
      // Hide on the way down, reveal on the way up — but never over the hero.
      header.classList.toggle('is-hidden', y > lastY && y > 400);
    }

    if (!REDUCED) {
      layers.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        const rect = el.getBoundingClientRect();
        // Only transform what's on screen.
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
    }

    lastY = y;
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(run);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  run();
}

/* ------------------------------------------------------------------ *
 * 5. Cursor spotlight on glass cards
 * ------------------------------------------------------------------ */

export function initSpotlight() {
  if (REDUCED || !window.matchMedia('(hover: hover)').matches) return;

  document.querySelectorAll('.feature').forEach((card) => {
    card.addEventListener(
      'pointermove',
      (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      },
      { passive: true }
    );
  });
}
