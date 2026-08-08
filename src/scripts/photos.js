/**
 * Progressive photo loader.
 *
 * Every image slot renders vector artwork first. This probes for a real
 * photograph at public/images/<data-photo> and, if one exists, fades it in
 * over the artwork. A missing file is a silent no-op — no broken images,
 * no console noise, no layout shift.
 *
 * See public/images/PHOTO-GUIDE.md for the expected filenames.
 */

const BASE = 'public/images/';

/** Resolve relative to the document so it works from a subpath on GitHub Pages. */
const resolve = (file) => new URL(BASE + file, document.baseURI).href;

function load(slot) {
  const file = slot.dataset.photo;
  if (!file || slot.dataset.photoState) return;
  slot.dataset.photoState = 'probing';

  const probe = new Image();
  probe.decoding = 'async';

  probe.onload = () => {
    // Guard against a server that returns an HTML 404 page as a 1px image.
    if (probe.naturalWidth < 8) {
      slot.dataset.photoState = 'missing';
      return;
    }
    const img = document.createElement('img');
    img.src = probe.src;
    img.alt = slot.dataset.alt || '';
    img.className = 'photo__img';
    img.decoding = 'async';
    img.loading = slot.dataset.eager === 'true' ? 'eager' : 'lazy';
    if (slot.dataset.eager === 'true') img.fetchPriority = 'high';
    slot.prepend(img);

    // Next frame so the transition actually runs.
    requestAnimationFrame(() => slot.classList.add('has-photo'));
    slot.dataset.photoState = 'loaded';
  };

  probe.onerror = () => {
    slot.dataset.photoState = 'missing';
  };

  probe.src = resolve(file);
}

export function initPhotos(root = document) {
  const slots = root.querySelectorAll('[data-photo]');
  if (!slots.length) return;

  // Hero and other eager slots load immediately; the rest wait for
  // the viewport so we never spend bandwidth on unseen images.
  const lazy = [];
  slots.forEach((slot) => {
    if (slot.dataset.eager === 'true') load(slot);
    else lazy.push(slot);
  });

  if (!('IntersectionObserver' in window)) {
    lazy.forEach(load);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        load(entry.target);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '300px 0px' }
  );

  lazy.forEach((slot) => io.observe(slot));
}
