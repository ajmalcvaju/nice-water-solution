export interface Product {
  id: string;
  name: string;
  category: 'purifier' | 'treatment' | 'ro-plant' | 'cooler';
  categoryLabel: string;
  badge: string;
  image: string;
  price: number;
  originalPrice: number;
  specs: string[];
  description: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'aqua-phoenix-gold-ro',
    name: 'Aqua Phoenix Gold Mineral RO Water Purifier',
    category: 'purifier',
    categoryLabel: 'Water Purifiers',
    badge: 'Active Copper',
    image: '/assets/images/product-aqua-phoenix-ro.png',
    price: 10999,
    originalPrice: 14500,
    specs: [
      '10 Litres Pure Mineral Water Storage',
      'RO + UV + UF + Active Copper Infusion',
      'Transparent Smoked Canopy with Water Gauge'
    ],
    description: 'Premium Gold edition domestic RO water purifier with pure & safe mineral technology, active copper filtration, and translucent protective shell.'
  },
  {
    id: 'wave-deluxe-ro-uv-uf',
    name: 'Wave Deluxe RO + UV + UF Water Purifier',
    category: 'purifier',
    categoryLabel: 'Water Purifiers',
    badge: 'Deluxe Edition',
    image: '/assets/images/product-wave-deluxe-ro.png',
    price: 11499,
    originalPrice: 15000,
    specs: [
      '10 Litres Storage Tank',
      'Multi-Stage RO+UV+UF Filtration',
      'Stainless Steel UV Chamber & LED Alerts'
    ],
    description: 'Deluxe transparent water purifier with high-flow RO membrane, stainless steel UV purification chamber, and clear water level display.'
  },
  {
    id: 'wave-krystal-12l-ro',
    name: 'Wave Krystal 12 Litres RO Water Purifier',
    category: 'purifier',
    categoryLabel: 'Water Purifiers',
    badge: 'Mineral Guard',
    image: '/assets/images/product-wave-krystal-ro.png',
    price: 12999,
    originalPrice: 16500,
    specs: [
      '12 Litres Pure Water Storage',
      'Reverse Osmosis + Mineral Controller',
      'Transparent Filtration Display Canopy'
    ],
    description: 'High recovery 12L domestic RO water purifier with integrated mineral controller, pure & safe drinking water technology, and transparent front panel.'
  },
  {
    id: 'wave-krystal-digital-ro',
    name: "Wave Krystal Digital RO Water Purifier",
    category: 'purifier',
    categoryLabel: 'Water Purifiers',
    badge: 'Digital Display',
    image: '/assets/images/product-wave-krystal-digital.jpg',
    price: 14499,
    originalPrice: 18500,
    specs: [
      '12 Litres Storage with Smart Water Gauge',
      'Multi-Stage RO + UV + UF + Alkaline Filtration',
      'Real-Time Digital Display (TDS, Temp, Auto Flush)'
    ],
    description: "Elite domestic water purifier featuring a smart digital panel, real-time TDS monitoring, automatic membrane flushing, and transparent blue storage tank."
  },
  {
    id: 'prolife-viber-advanced-12l-ro',
    name: 'Prolife Viber Advanced Water Purifier',
    category: 'purifier',
    categoryLabel: 'Water Purifiers',
    badge: '12L Capacity',
    image: '/assets/images/product-prolife-viber-ro.png',
    price: 13999,
    originalPrice: 18500,
    specs: [
      '12L Large Storage Capacity',
      'RO + UV + UF + TDS Adjuster/Controller',
      'Viber Copper Mineral Technology'
    ],
    description: '12 Litre large capacity domestic water purifier with multi-stage RO+UV+UF purification, active copper mineral enhancement, and adjustable TDS controller.'
  },
  {
    id: 'prolife-aqua-9l-ro',
    name: 'ProLife Aqua 9 L RO Water Purifier',
    category: 'purifier',
    categoryLabel: 'Water Purifiers',
    badge: 'Popular Choice',
    image: '/assets/images/product-prolife-aqua-9l.png',
    price: 9000,
    originalPrice: 12500,
    specs: [
      '9 Litres Storage Capacity',
      'Multi-Stage RO+UV Purification',
      'Food-Grade Natural Tank & Tap'
    ],
    description: 'Compact 9 Litre storage RO water purifier with natural mineral retention, food-grade transparent tank, and smooth flow dispensing tap.'
  },
  {
    id: 'prolife-fiesta-ro-uv-uf',
    name: 'Prolife Fiesta RO + UV + UF Water Purifier',
    category: 'purifier',
    categoryLabel: 'Water Purifiers',
    badge: 'Copper Charge',
    image: '/assets/images/product-prolife-fiesta-ro.png',
    price: 17990,
    originalPrice: 22500,
    specs: [
      'RO + UV + UF Multi-Stage Purification',
      'Active Copper Charge Technology',
      'Self Suction Booster Pump & Display'
    ],
    description: 'Advanced RO+UV+UF domestic water purifier with active copper charge technology, visible multi-stage filtration canopy, and self-suction booster pump.'
  },
  {
    id: 'domestic-water-treatment-plant',
    name: 'Domestic Water Treatment Plant',
    category: 'treatment',
    categoryLabel: 'Water Treatment Plant',
    badge: 'Whole-House',
    image: '/assets/images/product-water-treatment-plant.png',
    price: 28500,
    originalPrice: 35000,
    specs: [
      'FRP Vessel Media Column',
      'Multiport Top Mounted Backwash Valve',
      'Removes Iron, Turbidity, Odor & Hardness'
    ],
    description: 'Whole-house domestic water treatment plant that removes suspended dirt, iron, turbidity, and protects plumbing fixtures and overhead tanks.'
  },
  {
    id: 'nice-commercial-treatment-plant-5000l',
    name: 'Industrial Water Treatment Plant 5000L',
    category: 'treatment',
    categoryLabel: 'Water Treatment Plant',
    badge: 'Commercial WTP',
    image: '/assets/images/product-industrial-wtp-5000l.png',
    price: 54000,
    originalPrice: 68000,
    specs: [
      'Continuous 24/7 Filtered Water Supply',
      'Dual Columns with Heavy Brine Tank',
      'Ideal for Hotels, Hospitals & Hostels'
    ],
    description: 'High-capacity dual vessel water treatment plant with automated multiport valve for continuous sediment, iron, and hardness filtration.'
  },
  {
    id: 'nice-commercial-ro-plant-250lph',
    name: 'Commercial RO Plant 250 LPH Skid',
    category: 'ro-plant',
    categoryLabel: 'Water Treatment RO Plant',
    badge: 'Commercial RO',
    image: '/assets/images/product-commercial-ro-plant-250lph.png',
    price: 48000,
    originalPrice: 60000,
    specs: [
      'SS 304 Heavy Duty Skid Frame',
      'Vertical Multistage High-Pressure Pump',
      'Dual Flowmeters & Digital Controller'
    ],
    description: 'Compact 250 Litres/Hour commercial RO plant designed for restaurants, clinics, offices, and small institutions.'
  },
  {
    id: 'nice-industrial-ro-plant-1000lph',
    name: 'Industrial RO Plant 1000 LPH Skid',
    category: 'ro-plant',
    categoryLabel: 'Water Treatment RO Plant',
    badge: 'Heavy Duty 1000 LPH',
    image: '/assets/images/product-industrial-ro-plant-1000lph.png',
    price: 135000,
    originalPrice: 160000,
    specs: [
      'Triple FRP Media Columns with Digital Heads',
      'Stainless Steel Micron Filter & High-Pressure Pump',
      'Integrated Touchscreen PLC / SCADA Control Panel'
    ],
    description: 'Heavy duty 1000 LPH reverse osmosis plant for manufacturing units, colleges, hospital complexes, and packaged drinking water.'
  },
  {
    id: 'nice-ss-dual-tap-water-cooler',
    name: 'SS Dual Tap Water Cooler (Plain & Cold)',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: 'SS 304 Tank',
    image: '/assets/images/product-water-cooler.png',
    price: 36999,
    originalPrice: 45000,
    specs: [
      '100 Litre Food-Grade SS 304 Tank',
      'Dual Heavy Brass Faucets (Cold & Plain)',
      'Fast Refrigerant Chilling System'
    ],
    description: 'Commercial stainless steel drinking water cooler with dual faucets, heavy-gauge drain tray, and high-efficiency cooling compressor.'
  }
];
