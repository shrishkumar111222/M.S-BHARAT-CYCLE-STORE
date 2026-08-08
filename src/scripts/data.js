/**
 * Content data. Everything the client is likely to want changed —
 * products, prices, services, reviews — lives here, not in markup.
 */

export const BRANDS = [
  { name: 'Hero', tag: 'Cycles' },
  { name: 'Atlas', tag: 'Cycles' },
  { name: 'Firefox', tag: 'Performance' },
  { name: 'Avon', tag: 'Cycles' },
  { name: 'BSA', tag: 'Heritage' },
  { name: 'Hercules', tag: 'MTB' },
  { name: 'Montra', tag: 'Premium' },
  { name: 'Kids Cycles', tag: 'Ages 3–12' },
  { name: 'Electric Cycles', tag: 'E-Mobility' },
];

export const PRODUCTS = [
  {
    id: 'mountain',
    name: 'Mountain Bikes',
    cat: 'performance',
    tag: 'Best Seller',
    photo: 'product-mountain.jpg',
    art: 'mtb',
    price: '₹8,500',
    desc: 'Hard-tail frames with front suspension and 21-speed gearing — built for Bihar’s village roads and off-road tracks.',
    specs: [
      ['Frame', 'Steel / Alloy hardtail'],
      ['Gears', '18 – 21 speed'],
      ['Wheel size', '26" / 27.5"'],
      ['Brakes', 'V-brake or disc'],
      ['Suspension', 'Front fork'],
    ],
  },
  {
    id: 'road',
    name: 'Road Bikes',
    cat: 'performance',
    tag: 'Fast',
    photo: 'product-road.jpg',
    art: 'road',
    price: '₹12,000',
    desc: 'Lightweight frames and narrow tyres for riders who cover long distances on highway and town roads.',
    specs: [
      ['Frame', 'Lightweight alloy'],
      ['Gears', '14 – 21 speed'],
      ['Wheel size', '700c'],
      ['Brakes', 'Dual pivot / disc'],
      ['Handlebar', 'Drop or flat'],
    ],
  },
  {
    id: 'kids',
    name: 'Kids Cycles',
    cat: 'family',
    tag: 'Ages 3–12',
    photo: 'product-kids.jpg',
    art: 'kids',
    price: '₹3,200',
    desc: 'Safe, colourful cycles with training wheels, padded seats and full chain covers. Sized by your child’s height in store.',
    specs: [
      ['Wheel size', '12" / 14" / 16" / 20"'],
      ['Training wheels', 'Included'],
      ['Chain guard', 'Full cover'],
      ['Brakes', 'Caliper + coaster'],
      ['Assembly', 'Free at store'],
    ],
  },
  {
    id: 'ladies',
    name: 'Ladies Cycles',
    cat: 'family',
    tag: 'Comfort',
    photo: 'product-ladies.jpg',
    art: 'ladies',
    price: '₹5,400',
    desc: 'Step-through frames with baskets, rear carriers and upright seating — comfortable for daily shopping and school runs.',
    specs: [
      ['Frame', 'Step-through'],
      ['Basket', 'Front, included'],
      ['Carrier', 'Rear steel'],
      ['Seat', 'Wide cushioned'],
      ['Stand', 'Centre stand'],
    ],
  },
  {
    id: 'electric',
    name: 'Electric Cycles',
    cat: 'electric',
    tag: 'New Arrival',
    photo: 'product-electric.jpg',
    art: 'electric',
    price: '₹24,000',
    desc: 'Pedal-assist e-cycles with removable lithium batteries. Charge at home, ride 35–50 km on a single charge.',
    specs: [
      ['Motor', '250W BLDC hub'],
      ['Battery', 'Removable lithium-ion'],
      ['Range', '35 – 50 km per charge'],
      ['Charge time', '4 – 5 hours'],
      ['Licence', 'Not required'],
    ],
  },
  {
    id: 'hybrid',
    name: 'Hybrid Cycles',
    cat: 'performance',
    tag: 'All-Rounder',
    photo: 'product-hybrid.jpg',
    art: 'hybrid',
    price: '₹9,800',
    desc: 'Road-bike speed with mountain-bike comfort. The right pick if you ride to work on tar and take shortcuts on mud.',
    specs: [
      ['Frame', 'Alloy hybrid'],
      ['Gears', '21 speed'],
      ['Wheel size', '700c'],
      ['Tyres', 'Semi-slick'],
      ['Brakes', 'Disc'],
    ],
  },
];

export const PRODUCT_FILTERS = [
  { id: 'all', label: 'All Cycles' },
  { id: 'performance', label: 'Performance' },
  { id: 'family', label: 'Family & Kids' },
  { id: 'electric', label: 'Electric' },
];

export const SERVICES = [
  {
    name: 'Cycle Repair',
    detail:
      'General diagnosis and repair for every part of the cycle — frame, chain, pedals, bearings and cables. Most jobs are finished the same day while you wait.',
  },
  {
    name: 'Wheel Alignment',
    detail:
      'Spoke tensioning and rim truing on a proper wheel stand, so a buckled wheel runs straight again instead of rubbing the brake pads.',
  },
  {
    name: 'Brake Repair',
    detail:
      'Pad replacement, cable renewal and caliper adjustment for V-brakes and disc brakes. We set the bite point where you want it.',
  },
  {
    name: 'Gear Adjustment',
    detail:
      'Derailleur indexing and limit-screw setting so every shift lands cleanly, plus a check of the hanger alignment.',
  },
  {
    name: 'Tube & Tyre Replacement',
    detail:
      'Puncture repair while you wait, and fitting of new tubes or tyres from stock in all common sizes.',
  },
  {
    name: 'Accessory Installation',
    detail:
      'Fitting for carriers, baskets, mudguards, lights, bells, locks, bottle cages, stands and child seats.',
  },
  {
    name: 'Annual Maintenance',
    detail:
      'A yearly service package: full strip-down clean, re-greasing of bearings, cable replacement and a complete safety check.',
  },
];

export const FEATURES = [
  {
    icon: 'cycle',
    title: 'Bicycle Sales',
    text: 'A showroom floor of cycles from every trusted Indian brand — kids, ladies, mountain, road, hybrid and electric.',
  },
  {
    icon: 'gear',
    title: 'Repairs & Servicing',
    text: 'An in-house workshop with the right tools. Punctures and adjustments are usually done while you wait.',
  },
  {
    icon: 'shield',
    title: 'Genuine Spare Parts',
    text: 'Original chains, sprockets, tubes, tyres, brakes and bearings. No look-alike parts that fail in a month.',
  },
  {
    icon: 'bag',
    title: 'Bicycle Accessories',
    text: 'Helmets, locks, lights, pumps, bells, carriers, baskets, mudguards and bottle cages — all in stock.',
  },
  {
    icon: 'tag',
    title: 'Affordable Pricing',
    text: 'Honest, clearly-quoted prices. You are told the cost before the work starts, every single time.',
  },
  {
    icon: 'chat',
    title: 'Expert Guidance',
    text: 'Years on the shop floor means we size the cycle to the rider and recommend what actually suits your roads.',
  },
];

/**
 * Testimonials.
 *
 * These are written to reflect the kind of feedback the shop receives and
 * are marked as demo copy in the UI. Before launch, replace each entry with
 * a verbatim Google review (and the reviewer's real name and date) copied
 * from the Business Profile — then remove `demo: true`.
 */
export const REVIEWS = [
  {
    name: 'Rakesh Kumar',
    when: 'Local Guide · Sherghati',
    stars: 5,
    demo: true,
    text: 'Bought a Hero cycle for my son here. The owner sized it properly for his height instead of just selling the biggest one. Price was fair and they assembled it free.',
  },
  {
    name: 'Amit Sharma',
    when: 'Sherghati, Gaya',
    stars: 5,
    demo: true,
    text: 'Went in with a broken gear cable and a wobbly wheel. Both fixed in under an hour, and he showed me exactly what was wrong before charging. Genuinely trustworthy workshop.',
  },
  {
    name: 'Sunita Devi',
    when: 'Gaya',
    stars: 5,
    demo: true,
    text: 'Best cycle shop in Sherghati. I bought a ladies cycle with basket and carrier. Very good quality and the service after purchase is excellent.',
  },
  {
    name: 'Md. Irfan',
    when: 'Sherghati',
    stars: 4,
    demo: true,
    text: 'Good stock of spare parts — I got the exact tyre size I needed when two other shops did not have it. Reasonable rate and quick fitting.',
  },
  {
    name: 'Vikash Singh',
    when: 'Local Guide · Gaya',
    stars: 5,
    demo: true,
    text: 'Took my mountain cycle for full servicing. It came back feeling like a new cycle. Brakes, gears, chain all perfect. Will keep coming back here.',
  },
  {
    name: 'Praveen Yadav',
    when: 'Sherghati',
    stars: 5,
    demo: true,
    text: 'Very helpful shop. They explained the difference between the models patiently and did not push me to the expensive one. Happy with my purchase.',
  },
];

export const STATS = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 12000, suffix: '+', label: 'Happy Customers' },
  { value: 8500, suffix: '+', label: 'Cycles Sold' },
  { value: 4.8, suffix: '★', label: 'Google Rating', decimals: 1 },
];

export const GALLERY = [
  { photo: 'gallery-1.jpg', art: 'storefront', ratio: 'wide', caption: 'The shop on the main road, Sherghati' },
  { photo: 'gallery-2.jpg', art: 'showroom', ratio: 'tall', caption: 'Showroom floor — new arrivals' },
  { photo: 'gallery-3.jpg', art: 'workshop', ratio: 'square', caption: 'The repair workshop' },
  { photo: 'gallery-4.jpg', art: 'parts', ratio: 'wide', caption: 'Genuine spare parts counter' },
  { photo: 'gallery-5.jpg', art: 'kids', ratio: 'tall', caption: 'Kids cycles, every size' },
  { photo: 'gallery-6.jpg', art: 'accessories', ratio: 'square', caption: 'Helmets, locks and accessories' },
  { photo: 'gallery-7.jpg', art: 'electric', ratio: 'wide', caption: 'Electric cycles now in stock' },
  { photo: 'gallery-8.jpg', art: 'detail', ratio: 'tall', caption: 'Assembly and final checks' },
];
