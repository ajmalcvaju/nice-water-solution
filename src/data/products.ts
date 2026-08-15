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
    id: 'nice-frio-15-online-water-cooler',
    name: 'Frio 15 (Online) Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '15L Cold Storage',
    image: '/assets/images/product-frio-15.jpg',
    price: 24700,
    originalPrice: 30000,
    specs: [
      'Online Normal Supply & 15L Cold Storage',
      'Dual Faucets & Spun Filtration System',
      'Food-Grade SS 304 Body (335 x 290 x 1210 mm)',
      'Heavy-Duty Tecumseh Compressor'
    ],
    description: 'Sleek, slimline commercial water cooler featuring a durable food-grade SS 304 body, dual faucets, Tecumseh cooling compressor, and integrated spun filtration.'
  },
  {
    id: 'nice-frio-nn-15-water-cooler',
    name: 'Frio NN 15 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '15L Normal Storage',
    image: '/assets/images/product-frio-nn-15.jpg',
    price: 18850,
    originalPrice: 23000,
    specs: [
      '15L Food-Grade Normal Storage Capacity',
      'Dual Faucets & Integrated Spun Filtration',
      'Food-Grade SS 304 Body (335 x 290 x 1210 mm)',
      'Reliable Tecumseh Cooling Unit'
    ],
    description: 'Highly durable commercial water dispenser with a food-grade SS 304 body, 15 Litres normal storage, dual taps, spun pre-filtration, and a heavy-duty Tecumseh compressor.'
  },
  {
    id: 'nice-frio-nh-18-water-cooler',
    name: 'Frio NH 18 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '18L Hot & Normal',
    image: '/assets/images/product-frio-nh-18.jpg',
    price: 23400,
    originalPrice: 28500,
    specs: [
      '15L Normal & 3L Hot Water Storage (18L Total)',
      'Dual Faucets & Integrated Spun Filtration',
      'Food-Grade SS 304 Body (335 x 290 x 1210 mm)',
      'Heavy-Duty Tecumseh Compressor & Heating Element'
    ],
    description: 'Premium dual-tap hot and normal commercial water dispenser built with a durable food-grade SS 304 body, 18 Litres total storage, integrated spun pre-filtration, and a high-performance Tecumseh compressor.'
  },
  {
    id: 'nice-frio-nc-15-water-cooler',
    name: 'Frio NC 15 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '15L Cold & Normal',
    image: '/assets/images/product-frio-nc-15.jpg',
    price: 24700,
    originalPrice: 30000,
    specs: [
      '5L Normal & 10L Cold Water Storage (15L Total)',
      'Dual Faucets & Integrated Spun Filtration',
      'Food-Grade SS 304 Body (335 x 290 x 1210 mm)',
      'High-Performance Tecumseh Compressor'
    ],
    description: 'Robust dual-tap cold and normal commercial water dispenser featuring a food-grade SS 304 body, 15 Litres total storage capacity, active spun pre-filtration, and a high-efficiency Tecumseh cooling compressor.'
  },
  {
    id: 'nice-frio-nhc-16-water-cooler',
    name: 'Frio NHC 16 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '16L Hot, Cold & Normal',
    image: '/assets/images/product-frio-nhc-16.jpg',
    price: 26260,
    originalPrice: 32000,
    specs: [
      '5L Normal, 10L Cold & 1L Hot Storage (16L Total)',
      '3 Taps (Normal, Hot & Cold) & Spun Filtration',
      'Food-Grade SS 304 Body (335 x 290 x 1210 mm)',
      'Heavy-Duty Tecumseh Compressor & Heating Element'
    ],
    description: 'Premium triple-tap hot, cold, and normal commercial water cooler built with a food-grade SS 304 body, 16 Litres total storage, integrated spun pre-filtration, and a high-performance Tecumseh compressor.'
  },
  {
    id: 'nice-hydra-20-online-water-cooler',
    name: 'Hydra 20 (Online) Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '20L Cold Storage',
    image: '/assets/images/product-hydra-20.jpg',
    price: 31200,
    originalPrice: 38000,
    specs: [
      'Online Normal Supply & 20L Cold Storage',
      'Dual Faucets & Spun Filtration System',
      'Food-Grade SS 304 Body (365 x 330 x 1160 mm)',
      'Heavy-Duty Tecumseh Compressor'
    ],
    description: 'High-capacity, robust commercial water cooler with a durable food-grade SS 304 body, 20 Litres cold storage capacity, dual faucets, a high-power Tecumseh compressor, and integrated spun filtration.'
  },
  {
    id: 'nice-hydra-nn-20-water-cooler',
    name: 'Hydra NN 20 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '20L Normal Storage',
    image: '/assets/images/product-hydra-nn-20.jpg',
    price: 21450,
    originalPrice: 26000,
    specs: [
      '20L Food-Grade Normal Storage Capacity',
      'Dual Faucets & Integrated Spun/Carbon Filtration',
      'Food-Grade SS 304 Body (365 x 330 x 1160 mm)',
      'Reliable Tecumseh Cooling Unit'
    ],
    description: 'Robust commercial water dispenser built with a food-grade SS 304 body, 20 Litres normal storage, dual taps, spun and carbon pre-filtration, and a heavy-duty Tecumseh compressor.'
  },
  {
    id: 'nice-hydra-nh-23-water-cooler',
    name: 'Hydra NH 23 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '23L Hot & Normal',
    image: '/assets/images/product-hydra-nh-23.jpg',
    price: 26650,
    originalPrice: 33000,
    specs: [
      '20L Normal & 3L Hot Water Storage (23L Total)',
      'Dual Faucets & Integrated Spun/Carbon Filtration',
      'Food-Grade SS 304 Body (365 x 330 x 1160 mm)',
      'Heavy-Duty Tecumseh Compressor & Heating Element'
    ],
    description: 'Premium dual-tap hot and normal commercial water dispenser built with a food-grade SS 304 body, 23 Litres total storage capacity, active spun and carbon filtration, and a high-efficiency Tecumseh compressor.'
  },
  {
    id: 'nice-hydra-nc-20-water-cooler',
    name: 'Hydra NC 20 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '20L Cold & Normal',
    image: '/assets/images/product-hydra-nc-20.jpg',
    price: 34450,
    originalPrice: 42000,
    specs: [
      '10L Normal & 10L Cold Water Storage (20L Total)',
      'Dual Faucets & Integrated Spun/Carbon Filtration',
      'Food-Grade SS 304 Body (365 x 330 x 1160 mm)',
      'High-Performance Tecumseh Compressor'
    ],
    description: 'Highly efficient dual-tap cold and normal commercial water cooler constructed with a food-grade SS 304 body, 20 Litres total storage, integrated spun & carbon pre-filtration, and a heavy-duty Tecumseh compressor.'
  },
  {
    id: 'nice-hydra-nhc-23-water-cooler',
    name: 'Hydra NHC 23 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '23L Hot, Cold & Normal',
    image: '/assets/images/product-hydra-nhc-23.jpg',
    price: 37050,
    originalPrice: 45000,
    specs: [
      '10L Normal, 10L Cold & 3L Hot Storage (23L Total)',
      '3 Taps (Normal, Hot & Cold) & Spun/Carbon Filtration',
      'Food-Grade SS 304 Body (365 x 330 x 1160 mm)',
      'Heavy-Duty Tecumseh Compressor & Heating Element'
    ],
    description: 'Premium triple-tap hot, cold, and normal commercial water cooler built with a food-grade SS 304 body, 23 Litres total storage, integrated spun and carbon pre-filtration, and a high-performance Tecumseh compressor.'
  },
  {
    id: 'nice-cube-nhc-11-water-cooler',
    name: 'Cube NHC 11 Countertop Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '11L Compact Storage',
    image: '/assets/images/product-cube-nhc-11.jpg',
    price: 20150,
    originalPrice: 25000,
    specs: [
      '5L Normal, 5L Cold & 1L Hot Storage (11L Total)',
      '3 Countertop Taps (Normal, Hot & Cold)',
      'Food-Grade SS 304 Body (330 x 290 x 685 mm)',
      'Compact Tecumseh Cooling Unit & Spun Filtration'
    ],
    description: 'Space-saving countertop triple-tap water dispenser featuring a food-grade SS 304 body, 11 Litres total storage, built-in spun filtration, and a compact Tecumseh compressor.'
  },
  {
    id: 'nice-edge-nn-80-water-cooler',
    name: 'Edge NN 80 Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '80L High Capacity',
    image: '/assets/images/product-edge-nn-80.png',
    price: 28200,
    originalPrice: 35000,
    specs: [
      '80L Food-Grade Normal Storage Capacity',
      '3 Heavy-Duty Faucets & Spun/Carbon Filtration',
      'Food-Grade SS 304 Body (565 x 525 x 1340 mm)',
      'Robust Industrial Tecumseh Compressor'
    ],
    description: 'High-capacity commercial floor-standing water cooler built with a premium food-grade SS 304 body, 80 Litres storage, 3 taps, integrated spun & carbon dual filtration, and a high-performance Tecumseh compressor.'
  },
  {
    id: 'nice-cube-nc-10-water-cooler',
    name: 'Cube NC 10 Countertop Water Cooler',
    category: 'cooler',
    categoryLabel: 'Water Cooler',
    badge: '10L Compact Storage',
    image: '/assets/images/product-cube-nc-10.jpg',
    price: 18200,
    originalPrice: 22000,
    specs: [
      '5L Normal & 5L Cold Water Storage (10L Total)',
      '2 Countertop Faucets (Normal & Cold)',
      'Food-Grade SS 304 Body (330 x 290 x 685 mm)',
      'Compact Tecumseh Compressor & Spun Filtration'
    ],
    description: 'Space-saving countertop dual-tap water dispenser featuring a food-grade SS 304 body, 10 Litres total storage, built-in spun filtration, and a compact Tecumseh compressor.'
  }
];
