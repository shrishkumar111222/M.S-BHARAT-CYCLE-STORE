/** Inline SVG icon set. Stroked, 24×24, currentColor — no icon font. */

const s = (d, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
        focusable="false">${extra}${d}</svg>`;

export const icons = {
  cycle: s(`<circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/>
           <path d="M15 6h3M6 17.5l4-8.5h5l3.5 8.5M10.5 9L14 17.5"/>
           <circle cx="12" cy="17.5" r="1"/>`),

  car: s(`<path d="M5 17h14M4 17v-4.2a2 2 0 0 1 .3-1L6.4 8A2 2 0 0 1 8.1 7h7.8a2 2 0 0 1 1.7 1l2.1 3.8a2 2 0 0 1 .3 1V17"/>
         <path d="M4 13h16"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/>`),

  gear: s(`<circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`),

  shield: s(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>`),

  bag: s(`<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
         <path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>`),

  tag: s(`<path d="M20.6 13.4L12 22l-9-9V4a1 1 0 0 1 1-1h8z"/><circle cx="7.5" cy="7.5" r="1.4"/>`),

  chat: s(`<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-4-.9L3 21l1.9-4.6A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>
          <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>`),

  phone: s(`<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/>`),

  pin: s(`<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>`),

  grid: s(`<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>`),

  arrowRight: s(`<path d="M5 12h14M13 6l6 6-6 6"/>`),
  arrowLeft: s(`<path d="M19 12H5M11 18l-6-6 6-6"/>`),
  arrowUp: s(`<path d="M12 19V5M6 11l6-6 6 6"/>`),

  close: s(`<path d="M18 6L6 18M6 6l12 12"/>`),
  plus: s(`<path d="M12 5v14M5 12h14"/>`),
  zoom: s(`<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M11 8v6M8 11h6"/>`),

  directions: s(`<path d="M3 11l18-8-8 18-2-8-8-2z"/>`),

  clock: s(`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`),

  star: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>`,

  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1s-.5-.1-.7.1-.7 1-.9 1.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6a2 2 0 0 0 .3-.5.6.6 0 0 0 0-.6L9 6.6c-.2-.5-.5-.5-.7-.5H7.7a1.3 1.3 0 0 0-1 .5A4 4 0 0 0 5.5 9.5a7 7 0 0 0 1.5 3.7 15.9 15.9 0 0 0 6.1 5.4 20 20 0 0 0 2 .8 4.9 4.9 0 0 0 2.2.1 3.6 3.6 0 0 0 2.4-1.7 3 3 0 0 0 .2-1.7c-.1-.2-.3-.3-.6-.4z"/>
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>`,

  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true" focusable="false">
    <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/>
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none"/></svg>`,

  google: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2a9.7 9.7 0 0 0 3-7.4z"/>
    <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5a6 6 0 0 1-9-3.2H3.1v2.6A10 10 0 0 0 12 22z"/>
    <path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9z"/>
    <path fill="#EA4335" d="M12 6a5.4 5.4 0 0 1 3.8 1.5l2.8-2.8A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.9 5.5l3.3 2.6A6 6 0 0 1 12 6z"/></svg>`,
};

/** Render N filled stars (rounded to nearest half → nearest whole). */
export const stars = (n = 5) => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));
