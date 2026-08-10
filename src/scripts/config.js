/**
 * SINGLE SOURCE OF TRUTH — business details.
 * Edit ONLY this file to update phone, WhatsApp, address, hours or map.
 * Every button, link and schema block on the site reads from here.
 */
export const BUSINESS = {
  name: 'M.S BHARAT CYCLE STORE',
  branch: 'Gaya Ji Branch',
  tagline: "Gaya's Trusted Bicycle Destination",
  phone: '+917277343791',
  phoneDisplay: '+91 72773 43791',
  // Country code + number, no '+' and no spaces — wa.me link format.
  whatsapp: '917277343791',
  // From the shop's own signboard and the shared market address on the
  // neighbouring units.
  street: 'Siddharth Market, Kashi Nath More',
  city: 'Gaya',
  district: 'Gaya',
  state: 'Bihar',
  postalCode: '823001',
  country: 'IN',
  // Kashi Nath More, Gaya — refine to the exact shop pin from Google Maps.
  lat: 24.7914,
  lng: 84.9994,
  // Printed on the shop's signboard.
  gstin: '10ETWPA7958G1ZC',
  mapsPlaceUrl: 'https://www.google.com/maps/place/M.S+BHARAT+CYCLE+STORE/',
  rating: 4.8,
  reviewCount: 63,
  established: 2005,
  hours: [
    { days: 'Monday – Saturday', time: '8:00 AM – 8:30 PM', open: true },
    { days: 'Sunday', time: '9:00 AM – 6:00 PM', open: true },
    { days: 'Festival Holidays', time: 'By appointment', open: false },
  ],
  // Machine-readable hours for schema.org + the live open/closed badge.
  openingHours: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], opens: '08:00', closes: '20:30' },
    { days: ['Su'], opens: '09:00', closes: '18:00' },
  ],
};

export const waLink = (msg) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = () => `tel:${BUSINESS.phone}`;

export const directionsLink = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.lat},${BUSINESS.lng}`;
