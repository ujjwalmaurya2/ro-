/**
 * Products Data Layer — Ajeet Aqua Appliances
 * 
 * Complete verified RO Product Catalog with genuine product imagery,
 * accurate models, and exact client-confirmed INR prices for Prayagraj.
 */

export interface ProductSpecification {
  purificationTechnology: string;
  purificationStages: number;
  storageCapacity: string;
  purificationSpeed: string;
  suitableWaterTDS: string;
  bodyMaterial: string;
  mountingType: string;
  powerConsumption: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  category?: 'domestic' | 'alkaline' | 'commercial';
  technology?: 'RO' | 'RO + UV' | 'RO + UV + UF' | 'RO + UV + UF + Alkaline' | 'Commercial RO';
  price: number;
  priceMin?: number;
  priceMax?: number;
  priceDisplay?: string;
  originalPrice?: number;
  image: string;
  alt: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specifications?: ProductSpecification;
  warranty?: string;
  availability?: 'In Stock' | 'Enquire for Stock' | 'Available on Order';
  isDemo: boolean;
  isFeatured?: boolean;
  bestFor?: string;
  ratingDemo?: number;
}

export const productsData: Product[] = [
  // ==========================================
  // KENT (4 Models)
  // ==========================================
  {
    id: "kent-grand",
    name: "KENT Grand",
    brand: "KENT",
    model: "Grand",
    category: "domestic",
    technology: "RO + UV + UF",
    price: 12499,
    priceDisplay: "₹12,499",
    originalPrice: 15500,
    image: "/images/products/kent-grand.webp",
    alt: "KENT Grand RO Water Purifier with Mineral RO Technology",
    gallery: [
      "/images/products/kent-grand.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "India's trusted Mineral RO water purifier with patented TDS control and in-tank UV disinfection.",
    description: "KENT Grand delivers pure, mineral-rich drinking water for Prayagraj homes. Its patented Mineral RO technology retains essential natural minerals, while in-tank UV keeps stored water free from bacterial contamination.",
    features: [
      "Mineral RO Technology retains essential natural minerals in purified water",
      "In-tank UV LED disinfection keeps stored water safe for drinking",
      "8-Litre high capacity food-grade storage tank",
      "Zero water wastage technology recirculates rejected water to overhead tank",
      "Fully automatic operation with auto-on and auto-off"
    ],
    specifications: {
      purificationTechnology: "Mineral RO + UV + UF + TDS Control",
      purificationStages: 6,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 20 L/hr",
      suitableWaterTDS: "Up to 2000 ppm (Borewell / Municipal)",
      bodyMaterial: "Food Grade Non-Toxic ABS Plastic",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "60 Watts"
    },
    warranty: "1 Year Manufacturer Warranty + Service Support",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Families looking for trusted mineral retention and zero water wastage"
  },
  {
    id: "kent-ace-plus-neo",
    name: "KENT Ace Plus Neo",
    brand: "KENT",
    model: "Ace Plus Neo",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 17499,
    priceMin: 17499,
    priceMax: 21499,
    priceDisplay: "₹17,499 - ₹21,499",
    originalPrice: 22000,
    image: "/images/products/kent-ace-plus-neo.webp",
    alt: "KENT Ace Plus Neo RO Water Purifier",
    gallery: [
      "/images/products/kent-ace-plus-neo.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Next-gen Mineral RO purifier with alkaline mineral booster and multi-stage purification.",
    description: "KENT Ace Plus Neo features an upgraded purification train with active alkaline enhancement to balance water pH between 8.0 and 9.5, making everyday drinking water healthy and sweet.",
    features: [
      "Advanced multi-stage RO + UV + UF + Alkaline purification",
      "Alkaline mineralizer raises water pH for optimum wellness",
      "Patented TDS controller retains essential calcium and magnesium",
      "Computer-controlled operation with filter change alert",
      "High-rejection RO membrane handles borewell water up to 2000 ppm"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Alkaline + TDS Controller",
      purificationStages: 7,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 20 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade ABS Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "60 Watts"
    },
    warranty: "1 Year Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Homes requiring alkaline water with mineral balance"
  },
  {
    id: "kent-supreme-plus-neo",
    name: "KENT Supreme Plus Neo",
    brand: "KENT",
    model: "Supreme Plus Neo",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 16499,
    priceMin: 16499,
    priceMax: 20499,
    priceDisplay: "₹16,499 - ₹20,499",
    originalPrice: 21000,
    image: "/images/products/kent-supreme-plus-neo.webp",
    alt: "KENT Supreme Plus Neo RO Water Purifier",
    gallery: [
      "/images/products/kent-supreme-plus-neo.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Supreme Mineral RO purifier featuring zero water wastage and multi-stage alkaline filtration.",
    description: "KENT Supreme Plus Neo combines state-of-the-art RO filtration with alkaline post-mineralization to eliminate bacteria, viruses, dissolved chemicals and heavy metals while keeping water healthy and mineralized.",
    features: [
      "Zero Water Wastage technology with booster recirculation",
      "Double purification by RO + UV removes dissolved impurities",
      "Alkaline booster balancing pH between 8.0 and 9.5",
      "In-tank UV LED ensures 24/7 microbial safety",
      "Transparent water level indicator for easy monitoring"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Alkaline + Mineral RO",
      purificationStages: 7,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 20 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade Virgin ABS",
      mountingType: "Wall Mount",
      powerConsumption: "60 Watts"
    },
    warranty: "1 Year Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Households seeking zero water wastage and alkaline minerals"
  },
  {
    id: "kent-grand-iot",
    name: "KENT Grand IoT",
    brand: "KENT",
    model: "Grand IoT",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 22199,
    priceDisplay: "₹22,199",
    originalPrice: 26000,
    image: "/images/products/kent-grand-iot.webp",
    alt: "KENT Grand IoT Smart RO Water Purifier with Digital Screen",
    gallery: [
      "/images/products/kent-grand-iot.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Smart IoT-enabled Mineral RO purifier with digital purity display and live mobile app telemetry.",
    description: "KENT Grand IoT represents the peak of home water technology. Track daily water consumption, live purified water TDS, and real-time filter life on the digital front display or right from your smartphone.",
    features: [
      "IoT-enabled telemetry with real-time digital TDS and purity readout",
      "Mobile app sync for filter life status, service requests, and water usage",
      "Zero water wastage technology with internal recirculation",
      "9-Litre large capacity food grade storage reservoir",
      "In-tank UV disinfection LED prevents biofilm accumulation"
    ],
    specifications: {
      purificationTechnology: "Smart IoT RO + UV + UF + Alkaline + TDS Control",
      purificationStages: 7,
      storageCapacity: "9 Litres",
      purificationSpeed: "Up to 20 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "High-Gloss Food Grade ABS Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "60 Watts"
    },
    warranty: "1 Year Manufacturer Warranty + Smart App Support",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Tech-forward homes that want real-time water purity and filter metrics"
  },

  // ==========================================
  // Aquaguard (5 Models)
  // ==========================================
  {
    id: "aquaguard-sure-delight-nxt",
    name: "Aquaguard Sure Delight NXT",
    brand: "Aquaguard",
    model: "Sure Delight NXT",
    category: "domestic",
    technology: "RO + UV",
    price: 9499,
    priceMin: 9499,
    priceMax: 10499,
    priceDisplay: "₹9,499 - ₹10,499",
    originalPrice: 13000,
    image: "/images/products/aquaguard-sure-delight-nxt.webp",
    alt: "Aquaguard Sure Delight NXT RO Water Purifier",
    gallery: [
      "/images/products/aquaguard-sure-delight-nxt.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Compact and reliable domestic RO purifier with smart LED alerts and power-cut dispensing.",
    description: "Aquaguard Sure Delight NXT provides trusted Eureka Forbes multi-stage RO+UV purification in an ultra-compact chassis. Delivers pure water from borewell, tanker, or municipal sources with minimum power draw.",
    features: [
      "Multi-stage RO + UV (e-boiling) purification",
      "Energy saving mode with power cut dispense feature",
      "Smart LED indicators for service reminders and tank-full status",
      "Food-grade 6-litre storage tank",
      "Compact footprint suited for compact modular kitchens"
    ],
    specifications: {
      purificationTechnology: "RO + UV (e-boiling)",
      purificationStages: 6,
      storageCapacity: "6 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade Engineered Plastic",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "45 Watts"
    },
    warranty: "1 Year Eureka Forbes Standard Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Budget-conscious families wanting trusted Eureka Forbes water purity"
  },
  {
    id: "aquaguard-delight-aquasaver",
    name: "Aquaguard Delight Aquasaver",
    brand: "Aquaguard",
    model: "Delight Aquasaver",
    category: "domestic",
    technology: "RO + UV + UF",
    price: 9999,
    priceMin: 9999,
    priceMax: 12999,
    priceDisplay: "₹9,999 - ₹12,999",
    originalPrice: 15000,
    image: "/images/products/aquaguard-delight-aquasaver.webp",
    alt: "Aquaguard Delight Aquasaver Water Purifier",
    gallery: [
      "/images/products/aquaguard-delight-aquasaver.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "High-recovery RO purifier with Aquasaver technology saving up to 60% water.",
    description: "Aquaguard Delight Aquasaver addresses water wastage with specialized high-recovery RO membrane technology, saving up to 60% water compared to standard purifiers while offering up to 2-year filter life.",
    features: [
      "Aquasaver technology reduces water wastage by up to 60%",
      "Up to 2-year filter lifespan powered by NanoPore media",
      "Includes external mega sediment filter for heavy silt protection",
      "Taste enhancer with active mineral enrichment",
      "Dual RO + UV + UF 9-stage purification"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Aquasaver Eco Recovery",
      purificationStages: 9,
      storageCapacity: "6 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade ABS Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "45 Watts"
    },
    warranty: "1 Year Standard Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Eco-conscious households wanting reduced water rejection"
  },
  {
    id: "aquaguard-enrich-nexen-2x",
    name: "Aquaguard Enrich Nexen 2X",
    brand: "Aquaguard",
    model: "Enrich Nexen 2X",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 12999,
    priceDisplay: "₹12,999",
    originalPrice: 17500,
    image: "/images/products/aquaguard-enrich-nexen-2x.webp",
    alt: "Aquaguard Enrich Nexen 2X RO Water Purifier",
    gallery: [
      "/images/products/aquaguard-enrich-nexen-2x.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "10-Stage RO+UV purifier with 2-year filter life and Active Copper + Zinc infusion.",
    description: "Aquaguard Enrich Nexen 2X brings advanced Nanopore 2X filter technology for 2 years of trouble-free water, enriched with Active Copper and Zinc ions for enhanced immunity and natural sweetness.",
    features: [
      "Active Copper & Zinc booster cartridge infuses vital micronutrients",
      "Long-Life 2X filter cartridge lasting up to 2 years",
      "10-Stage intensive purification system removes viruses and pesticides",
      "Supreme taste enhancer for sweet drinking water",
      "External mega sediment filter for extra pre-filtration"
    ],
    specifications: {
      purificationTechnology: "RO + UV + Active Copper + Zinc + Alkaline",
      purificationStages: 10,
      storageCapacity: "6.2 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Virgin Food-Grade ABS",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "45 Watts"
    },
    warranty: "1 Year Eureka Forbes Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Families seeking copper-infused alkaline water with low maintenance"
  },
  {
    id: "aquaguard-aspire-glow-2x",
    name: "Aquaguard Aspire Glow 2X",
    brand: "Aquaguard",
    model: "Aspire Glow 2X",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 15999,
    priceDisplay: "₹15,999",
    originalPrice: 20000,
    image: "/images/products/aquaguard-aspire-glow-2x.webp",
    alt: "Aquaguard Aspire Glow 2X RO Water Purifier",
    gallery: [
      "/images/products/aquaguard-aspire-glow-2x.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Designer purifier with Halo smart indicator glow, 12-stage purification and 2X filter life.",
    description: "Aquaguard Aspire Glow 2X turns water purification into an architectural kitchen feature. Features an illuminated Halo status ring that communicates purifier health at a glance, backed by 12 stages of RO+UV+Copper purification.",
    features: [
      "Halo smart ambient status ring shows purification status at a glance",
      "12-Stage multi-barrier purification with Active Copper and Alkaline boost",
      "2X Long-life filters reducing maintenance overhead",
      "Premium high-gloss piano black aesthetic with chrome highlights",
      "Fast 15 L/hr flow rate with high recovery"
    ],
    specifications: {
      purificationTechnology: "RO + UV + Halo Smart Status + Copper Alkaline",
      purificationStages: 12,
      storageCapacity: "7 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "High-Gloss Food Grade ABS",
      mountingType: "Wall Mount",
      powerConsumption: "50 Watts"
    },
    warranty: "1 Year Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Modern modular kitchens looking for premium aesthetics and halo status lights"
  },
  {
    id: "aquaguard-enrich-eon-2x",
    name: "Aquaguard Enrich Eon 2X",
    brand: "Aquaguard",
    model: "Enrich Eon 2X",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 18499,
    priceDisplay: "₹18,499",
    originalPrice: 24000,
    image: "/images/products/aquaguard-enrich-eon-2x.webp",
    alt: "Aquaguard Enrich Eon 2X RO Water Purifier",
    gallery: [
      "/images/products/aquaguard-enrich-eon-2x.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Premium RO purifier with Water Quality Indicator, 5th-Gen UV LED and 2-year filter life.",
    description: "Aquaguard Enrich Eon 2X combines a real-time Water Quality Indicator (WQI) with 5th generation UV LED tank disinfection and mineral enrichment, guaranteeing crystal clear taste from any Prayagraj water source.",
    features: [
      "Water Quality Indicator (WQI) ensures real-time water safety transparency",
      "5th Generation UV LED in-tank disinfection",
      "Active Copper, Zinc, and Alkaline minerals restore essential nutrients",
      "2-Year Long-Life Nanopore filter technology",
      "Sleek architectural design with high flow dispensing"
    ],
    specifications: {
      purificationTechnology: "RO + UV + WQI Indicator + Active Copper Alkaline",
      purificationStages: 12,
      storageCapacity: "7 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "High-Gloss Food Grade Polymer",
      mountingType: "Wall Mount",
      powerConsumption: "50 Watts"
    },
    warranty: "1 Year Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Premium homes demanding real-time water quality indicators"
  },

  // ==========================================
  // Livpure (5 Models)
  // ==========================================
  {
    id: "livpure-eterna",
    name: "Livpure Eterna",
    brand: "Livpure",
    model: "Eterna",
    category: "domestic",
    technology: "RO + UV",
    price: 14990,
    priceDisplay: "₹14,990",
    originalPrice: 19500,
    image: "/images/products/livpure-eterna.webp",
    alt: "Livpure Eterna RO Water Purifier",
    gallery: [
      "/images/products/livpure-eterna.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Domestic RO+UV purifier with Copper Guard technology and insect-proof sealed tank.",
    description: "Livpure Eterna delivers wholesome drinking water with active Copper Guard technology. Its sealed water tank prevents insect ingress while multi-stage RO eliminates heavy dissolved impurities from borewell supply.",
    features: [
      "Copper Guard cartridge infuses natural antibacterial copper ions",
      "Multi-stage RO + UV purification destroys cysts, bacteria, and viruses",
      "Insect-proof sealed storage reservoir ensures stored water remains clean",
      "High purification capacity up to 15 litres per hour",
      "Sturdy wall mount construction suitable for all kitchen spaces"
    ],
    specifications: {
      purificationTechnology: "RO + UV + Copper Guard",
      purificationStages: 7,
      storageCapacity: "7 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade ABS Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "55 Watts"
    },
    warranty: "1 Year Livpure Standard Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Families seeking copper-enriched purity and insect-proof storage"
  },
  {
    id: "livpure-eterna-premia",
    name: "Livpure Eterna Premia",
    brand: "Livpure",
    model: "Eterna Premia",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 16490,
    priceDisplay: "₹16,490",
    originalPrice: 21500,
    image: "/images/products/livpure-eterna-premia.webp",
    alt: "Livpure Eterna Premia RO Water Purifier",
    gallery: [
      "/images/products/livpure-eterna-premia.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Upgraded Eterna with Alkaline mineralizer, Cu Guard, and pre-activated carbon.",
    description: "Livpure Eterna Premia upgrades the filtration train with an Alkaline Enhancer cartridge, maintaining ideal physiological pH levels while ensuring complete removal of dissolved chemical contaminants.",
    features: [
      "Alkaline enhancer maintains water pH between 8.0 and 9.0",
      "Copper Guard mineralizer boosts immune defenses",
      "Pre-activated carbon block filter removes chlorine and bad odor",
      "Heavy-duty booster pump designed for fluctuating water pressure",
      "Smooth-action ergonomic water tap"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Cu Guard + Alkaline Enhancer",
      purificationStages: 8,
      storageCapacity: "7.5 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade ABS Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "55 Watts"
    },
    warranty: "1 Year Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Homes wanting active alkaline pH balance and copper protection"
  },
  {
    id: "livpure-allura",
    name: "Livpure Allura",
    brand: "Livpure",
    model: "Allura",
    category: "domestic",
    technology: "RO + UV + UF",
    price: 17490,
    priceDisplay: "₹17,490",
    originalPrice: 22000,
    image: "/images/products/livpure-allura.webp",
    alt: "Livpure Allura RO Water Purifier",
    gallery: [
      "/images/products/livpure-allura.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Ultra-slim designer RO purifier with 30-month warranty and copper mineralizer.",
    description: "Livpure Allura features a sleek slimline profile that integrates seamlessly into modern modular cabinetry. Backed by extensive warranty coverage, it provides peace of mind with crystal clear water.",
    features: [
      "Contemporary ultra-slim profile aesthetic",
      "Copper + Mineral cartridge enriches water with essential salts",
      "High rejection RO membrane removes dissolved salts and heavy metals",
      "Smart LED indication panel for machine health",
      "Leak-proof push-fit fittings with food-grade internal tubing"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Mineralizer",
      purificationStages: 8,
      storageCapacity: "7 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Premium ABS Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "50 Watts"
    },
    warranty: "1 Year Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Discerning homeowners seeking a sleek, slimline wall profile"
  },
  {
    id: "livpure-allura-premia",
    name: "Livpure Allura Premia",
    brand: "Livpure",
    model: "Allura Premia",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 17990,
    priceDisplay: "₹17,990",
    originalPrice: 23500,
    image: "/images/products/livpure-allura-premia.webp",
    alt: "Livpure Allura Premia RO Water Purifier",
    gallery: [
      "/images/products/livpure-allura-premia.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Top-of-the-line Allura with Alkaline enhancement, copper accent, and high water recovery.",
    description: "Livpure Allura Premia combines the minimalist aesthetic of the Allura series with high-potency alkaline mineralization and copper enrichment, offering sweet, hydrating water with high recovery.",
    features: [
      "Ultra-modern minimalist aesthetic with elegant copper trim",
      "Alkaline mineralizer restores vital electrolytes and alkaline pH",
      "High recovery membrane reduces water rejection",
      "Dual level LED diagnostic status indicators",
      "Multi-stage RO+UV+UF disinfection"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Alkaline + Mineralizer",
      purificationStages: 8,
      storageCapacity: "7 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "High-Grade Engineered Polymer",
      mountingType: "Wall Mount",
      powerConsumption: "50 Watts"
    },
    warranty: "1 Year Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Modern kitchens demanding alkaline minerals and slimline elegance"
  },
  {
    id: "livpure-sereno",
    name: "Livpure Sereno",
    brand: "Livpure",
    model: "Sereno",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 21990,
    priceDisplay: "₹21,990",
    originalPrice: 28000,
    image: "/images/products/livpure-sereno.webp",
    alt: "Livpure Sereno Stainless Steel RO Water Purifier",
    gallery: [
      "/images/products/livpure-sereno.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Surgical-grade 304 Stainless Steel tank RO purifier with in-tank UV and Copper Guard.",
    description: "Livpure Sereno eliminates all plastic contact with your purified water through its surgical-grade 304 Stainless Steel storage reservoir, backed by in-tank UV and active copper-alkaline mineralization.",
    features: [
      "Surgical-grade 304 Stainless Steel storage tank prevents plastic leaching",
      "In-tank UV sterilization lamp operates continuously",
      "Copper Guard and Alkaline mineralizer for rich taste and immunity",
      "Zero plastic contact with stored drinking water",
      "Handles tough borewell water up to 2000 ppm TDS"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + SS Tank + Alkaline Copper",
      purificationStages: 8,
      storageCapacity: "8 Litres (SS 304)",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade ABS with 304 Stainless Steel Tank",
      mountingType: "Wall Mount",
      powerConsumption: "60 Watts"
    },
    warranty: "1 Year Comprehensive + SS Tank Guarantee",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Families prioritizing zero plastic contact with 304 stainless steel storage"
  },

  // ==========================================
  // Havells (5 Models)
  // ==========================================
  {
    id: "havells-mirak",
    name: "Havells Mirak",
    brand: "Havells",
    model: "Mirak",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 14499,
    priceDisplay: "₹14,499",
    originalPrice: 18500,
    image: "/images/products/havells-mirak.webp",
    alt: "Havells Mirak Alkaline RO Water Purifier",
    gallery: [
      "/images/products/havells-mirak.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Alkaline RO purifier with Revitalizer cartridge and dual UV disinfection.",
    description: "Havells Mirak provides alkaline balance and dual UV sterilization in a striking contemporary shell. Its revitalizer cartridge restructures water molecules for improved bodily hydration and sweeter taste.",
    features: [
      "Alkaline Taste Enhancer maintains healthy pH between 8.0 and 9.0",
      "Dual UV sterilization in purification chamber and storage tank",
      "Revitalizer cartridge restructures water molecules for biological absorption",
      "Smart maintenance alerts with LED indicators",
      "Detachable transparent water tank for convenient periodic cleaning"
    ],
    specifications: {
      purificationTechnology: "RO + UV + Alkaline Taste Enhancer",
      purificationStages: 7,
      storageCapacity: "7 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 1500 ppm",
      bodyMaterial: "Food Grade ABS Plastic",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "45 Watts"
    },
    warranty: "1 Year Havells Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Homes looking for mineral-rich alkaline water with detachable tank cleaning"
  },
  {
    id: "havells-auriga",
    name: "Havells Auriga",
    brand: "Havells",
    model: "Auriga",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 16499,
    priceDisplay: "₹16,499",
    originalPrice: 21000,
    image: "/images/products/havells-auriga.webp",
    alt: "Havells Auriga RO Water Purifier",
    gallery: [
      "/images/products/havells-auriga.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "High-recovery alkaline purifier with dual-mode dispensing and electrical safety protection.",
    description: "Havells Auriga delivers high recovery purification with essential mineral reintroduction, packaged in a sleek front panel that complements premium kitchen interiors.",
    features: [
      "High recovery membrane system saves water while rejecting heavy TDS",
      "Alkaline water enrichment enhances antioxidant properties",
      "Dual mode dispensing options for glass or bottle fill",
      "Sleek contemporary front styling with soft touch controls",
      "Integrated electrical surge and voltage spike protection"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Alkaline Mineral Cartridge",
      purificationStages: 8,
      storageCapacity: "7.5 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "High-Gloss Engineered ABS",
      mountingType: "Wall Mount",
      powerConsumption: "50 Watts"
    },
    warranty: "1 Year Havells Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Households seeking elegant modern design with alkaline benefits"
  },
  {
    id: "havells-utc-alkaline",
    name: "Havells UTC Alkaline",
    brand: "Havells",
    model: "UTC Alkaline",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 17499,
    priceDisplay: "₹17,499",
    originalPrice: 22500,
    image: "/images/products/havells-utc-alkaline.webp",
    alt: "Havells Under-The-Counter UTC Alkaline RO Water Purifier",
    gallery: [
      "/images/products/havells-utc-alkaline.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Under-The-Counter RO purifier with designer chrome swan faucet and hydro-pneumatic tank.",
    description: "Havells UTC Alkaline tucks neatly inside your under-sink cabinet, keeping kitchen counters completely clear. Pure mineral-rich alkaline water is delivered through a high-arc gooseneck designer countertop faucet.",
    features: [
      "Under-The-Counter installation preserves kitchen countertops and wall space",
      "Designer brass gooseneck faucet mounted directly on the kitchen sink",
      "Pressurized hydro-pneumatic storage tank delivers high-pressure water flow",
      "Alkaline mineral cartridge restores natural calcium, magnesium, and pH balance",
      "High-rejection RO membrane purifies water up to 2000 ppm TDS"
    ],
    specifications: {
      purificationTechnology: "Under-Sink RO + UV + Alkaline + Mineralizer",
      purificationStages: 8,
      storageCapacity: "8 Litres Hydro-Pneumatic",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Under-Counter Heavy Chassis",
      mountingType: "Under-The-Sink",
      powerConsumption: "55 Watts"
    },
    warranty: "1 Year Havells Warranty",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Island kitchens and luxury homes wanting invisible under-sink installation"
  },
  {
    id: "havells-ghwruae025",
    name: "Havells GHWRUAE025",
    brand: "Havells",
    model: "GHWRUAE025",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 20499,
    priceDisplay: "₹20,499",
    originalPrice: 25000,
    image: "/images/products/havells-ghwruae025.webp",
    alt: "Havells GHWRUAE025 Max UTC Alkaline Water Purifier",
    gallery: [
      "/images/products/havells-ghwruae025.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Commercial-grade Under-Counter RO unit (SKU: GHWRUAE025) with heavy-duty pump.",
    description: "Havells GHWRUAE025 is engineered for large homes and demanding requirements, featuring a high-output booster pump, pressurized tank, and dual mineral enhancement for heavy groundwater conditions.",
    features: [
      "Heavy-duty under-sink purification platform (SKU: GHWRUAE025)",
      "High salt rejection membrane engineered for hard borewell water",
      "Brass ceramic disc countertop faucet included",
      "Auto-flushing feature extends membrane lifetime and performance",
      "Pressurized tank provides fast dispensing even without electric pressure"
    ],
    specifications: {
      purificationTechnology: "UTC Commercial Grade RO + UV + Alkaline",
      purificationStages: 8,
      storageCapacity: "8.5 Litres Pressurized",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Industrial Grade ABS Cabinet",
      mountingType: "Under-The-Sink / Wall",
      powerConsumption: "60 Watts"
    },
    warranty: "1 Year Havells Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Demanding under-sink installations requiring high flow rates"
  },
  {
    id: "havells-gracia-alkaline",
    name: "Havells Gracia Alkaline",
    brand: "Havells",
    model: "Gracia Alkaline",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 21999,
    priceDisplay: "₹21,999",
    originalPrice: 27500,
    image: "/images/products/havells-gracia-alkaline.webp",
    alt: "Havells Gracia Alkaline Water Purifier",
    gallery: [
      "/images/products/havells-gracia-alkaline.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Premium purifier with hot and ambient water dispensing and feather-touch controls.",
    description: "Havells Gracia Alkaline combines full RO+UV purification with instant hot and ambient water dispensing at the touch of a button. Features child-safety locks and alkaline enrichment for healthy daily hydration.",
    features: [
      "Instant hot, warm, and ambient water dispensing from a single unit",
      "Alkaline taste enhancer balances water pH between 8.0 and 9.0",
      "Child safety lock on hot water dispensing protects young children",
      "Dual UV sterilization in internal tank and supply tubing",
      "Feather-touch capacitive electronic control panel"
    ],
    specifications: {
      purificationTechnology: "Hot & Ambient RO + UV + Alkaline",
      purificationStages: 8,
      storageCapacity: "6.5 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Premium ABS Plastic",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "550 Watts (Heating) / 45 Watts (RO)"
    },
    warranty: "1 Year Havells Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Homes needing instant hot water for green tea, formula, and detox drinking"
  },

  // ==========================================
  // Blue Mount (5 Models)
  // ==========================================
  {
    id: "blue-mount-eva",
    name: "Blue Mount Eva",
    brand: "Blue Mount",
    model: "Eva",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 13990,
    priceDisplay: "₹13,990",
    originalPrice: 17500,
    image: "/images/products/blue-mount-eva.webp",
    alt: "Blue Mount Eva RO Water Purifier",
    gallery: [
      "/images/products/blue-mount-eva.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Silver Shakti Zinc, Copper, and Alkaline RO purifier with large 12-Litre tank.",
    description: "Blue Mount Eva delivers superior storage with a 12-litre tank powered by Silver Shakti technology. Combines Zinc, Copper, and Alkaline mineralization to produce fresh, healthy drinking water.",
    features: [
      "Silver Shakti Zinc, Copper, and Alkaline technology",
      "Extra-large 12-Litre high capacity storage reservoir",
      "Smart LED indicators for power and purification status",
      "Transparent water level gauge for instant tank level check",
      "Auto-flush membrane maintenance system prevents scaling"
    ],
    specifications: {
      purificationTechnology: "Alkaline RO + UV + UF + Silver Shakti",
      purificationStages: 7,
      storageCapacity: "12 Litres",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade Virgin Plastic",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "50 Watts"
    },
    warranty: "1 Year Standard Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Larger households needing high storage capacity (12 Litres)"
  },
  {
    id: "blue-mount-premium",
    name: "Blue Mount Premium",
    brand: "Blue Mount",
    model: "Premium",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 16990,
    priceDisplay: "₹16,990",
    originalPrice: 21000,
    image: "/images/products/blue-mount-premium.webp",
    alt: "Blue Mount Premium RO Water Purifier",
    gallery: [
      "/images/products/blue-mount-premium.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Core domestic alkaline RO with 12L capacity and Silver Shakti antibacterial protection.",
    description: "Blue Mount Premium is built for robust daily operation in Prayagraj conditions, featuring high rejection RO filtration, antibacterial Silver Shakti protection, and alkaline mineral restoration.",
    features: [
      "High rejection RO membrane handles high TDS borewell water",
      "Generous 12 Litre food-grade storage capacity",
      "Silver Shakti anti-bacterial technology prevents bacterial regeneration",
      "Multi-stage filtration suitable for municipal and groundwater supply",
      "Reliable heavy-duty booster pump for uninterrupted flow"
    ],
    specifications: {
      purificationTechnology: "Silver Shakti Alkaline RO + UV + UF",
      purificationStages: 8,
      storageCapacity: "12 Litres",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade Virgin Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "55 Watts"
    },
    warranty: "1 Year Standard Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Families looking for a reliable 12-Litre alkaline purifier"
  },
  {
    id: "blue-mount-advance",
    name: "Blue Mount Advance",
    brand: "Blue Mount",
    model: "Advance",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 17990,
    priceDisplay: "₹17,990",
    originalPrice: 22500,
    image: "/images/products/blue-mount-advance.webp",
    alt: "Blue Mount Advance RO Water Purifier",
    gallery: [
      "/images/products/blue-mount-advance.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Advance multi-stage alkaline purifier with 18 L/hr fast flow rate and LED display.",
    description: "Blue Mount Advance combines high-speed 18 L/hr purification with an advanced 8-stage purification cycle, delivering mineral-rich alkaline water to large families without waiting.",
    features: [
      "Advance multi-stage purification with essential mineral retention",
      "LED diagnostic display panel indicates active machine cycles",
      "High flow purification speed of 18 Litres per hour",
      "Dual protection against microbial and chemical contaminants",
      "Easy front-panel filter replacement access"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Alkaline Mineral Filter",
      purificationStages: 8,
      storageCapacity: "12 Litres",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade ABS Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "55 Watts"
    },
    warranty: "1 Year Standard Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Large families wanting fast 18 L/hr flow and 12-litre tank"
  },
  {
    id: "blue-mount-premium-copper",
    name: "Blue Mount Premium Copper",
    brand: "Blue Mount",
    model: "Premium Copper",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 18990,
    priceDisplay: "₹18,990",
    originalPrice: 24000,
    image: "/images/products/blue-mount-premium-copper.webp",
    alt: "Blue Mount Premium Copper RO Water Purifier",
    gallery: [
      "/images/products/blue-mount-premium-copper.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Copper-infused alkaline purifier with 99.9% pure copper cartridge and 12L tank.",
    description: "Blue Mount Premium Copper infuses drinking water with the natural goodness of copper ions, helping support digestion and immunity while keeping water alkaline and balanced.",
    features: [
      "99.9% pure active copper infusion cartridge for Ayurvedic health benefits",
      "Silver Shakti Alkaline balance with natural minerals",
      "12-Litre heavy storage capacity ensures water availability",
      "Transparent cabinet with aesthetic copper styling",
      "Microbiological protection with high-intensity UV disinfection"
    ],
    specifications: {
      purificationTechnology: "Active Copper + Alkaline RO + UV + UF",
      purificationStages: 9,
      storageCapacity: "12 Litres",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade Polycarbonate / ABS",
      mountingType: "Wall Mount",
      powerConsumption: "55 Watts"
    },
    warranty: "1 Year Standard Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Homes prioritizing copper water benefits with large 12L capacity"
  },
  {
    id: "blue-mount-antique-plus",
    name: "Blue Mount Antique Plus",
    brand: "Blue Mount",
    model: "Antique Plus",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 20000,
    priceDisplay: "₹20,000",
    originalPrice: 25000,
    image: "/images/products/blue-mount-antique-plus.webp",
    alt: "Blue Mount Antique Plus Matka Style RO Water Purifier",
    gallery: [
      "/images/products/blue-mount-antique-plus.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Unique traditional 'Matka' style washable earthen-inspired tank RO purifier.",
    description: "Blue Mount Antique Plus brings the traditional wisdom of Indian clay Matka storage into modern RO purification. Its washable earthen-inspired storage tank keeps water naturally cool, sweet, and pure.",
    features: [
      "Unique traditional Indian 'Matka' style washable water reservoir",
      "Silver Shakti Alkaline RO + UV purification system",
      "Natural cooling and sweet mineral taste reminiscent of earthen pots",
      "Detachable tank allows thorough 360-degree hygienic scrubbing",
      "High-efficiency low energy consumption motor"
    ],
    specifications: {
      purificationTechnology: "Matka Style Alkaline RO + UV + Silver Shakti",
      purificationStages: 8,
      storageCapacity: "10 Litres Washable Matka Tank",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade Earthen Polymer",
      mountingType: "Wall Mount / Tabletop",
      powerConsumption: "55 Watts"
    },
    warranty: "1 Year Standard Warranty",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Families that love natural Matka taste with complete washable tank hygiene"
  },

  // ==========================================
  // Urban Company Native (6 Models)
  // ==========================================
  {
    id: "urban-company-native-m0",
    name: "Urban Company Native M0",
    brand: "Urban Company Native",
    model: "M0",
    category: "domestic",
    technology: "RO + UV",
    price: 12299,
    priceDisplay: "₹12,299",
    originalPrice: 15999,
    image: "/images/products/urban-company-native-m0.webp",
    alt: "Urban Company Native M0 RO Water Purifier",
    gallery: [
      "/images/products/urban-company-native-m0.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Needs no service for 2 years with Rapid Reverse Rinse technology and 8L tank.",
    description: "Urban Company Native M0 revolutionizes home water purification by requiring zero service visits for 2 full years. Engineered with proprietary Rapid Reverse Rinse technology that prevents membrane fouling.",
    features: [
      "Needs no service for 2 years with Rapid Reverse Rinse technology",
      "8-Stage RO + UV purification with mineralizer",
      "In-tank germicidal UV LED prevents secondary contamination",
      "Food-grade 8 Litre transparent water reservoir",
      "Unconditional 2-year warranty on filters, electricals, and parts"
    ],
    specifications: {
      purificationTechnology: "RO + UV + Mineralizer + Rapid Reverse Rinse",
      purificationStages: 8,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade Virgin Plastic",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "40 Watts"
    },
    warranty: "2 Years Unconditional Warranty on all filters & parts",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Busy households wanting zero maintenance visits for 2 whole years"
  },
  {
    id: "urban-company-native-m1",
    name: "Urban Company Native M1",
    brand: "Urban Company Native",
    model: "M1",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 13999,
    priceDisplay: "₹13,999",
    originalPrice: 18499,
    image: "/images/products/urban-company-native-m1.webp",
    alt: "Urban Company Native M1 Copper RO Water Purifier",
    gallery: [
      "/images/products/urban-company-native-m1.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "10-Stage RO+UV purifier with Copper, Alkaline balance, and 2-year filter life.",
    description: "Urban Company Native M1 delivers 10 stages of rigorous filtration coupled with copper enrichment and alkaline pH balance, backed by the signature 2-year no-service-needed engineering.",
    features: [
      "2-Year filter life with zero service hassles",
      "10-Stage RO + UV + Alkaline + Mineralizer purification",
      "Active copper infusion for immune support",
      "Pre-filter with quick-release housing included",
      "Compact modern geometric minimalist cabinet"
    ],
    specifications: {
      purificationTechnology: "RO + UV + Alkaline + Copper + Mineralizer",
      purificationStages: 10,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Food Grade Virgin Plastic",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "45 Watts"
    },
    warranty: "2 Years Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Homes wanting 10-stage copper-alkaline water with 2-year maintenance freedom"
  },
  {
    id: "urban-company-native-m1-pro",
    name: "Urban Company Native M1 Pro",
    brand: "Urban Company Native",
    model: "M1 Pro",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 15499,
    priceDisplay: "₹15,499",
    originalPrice: 19999,
    image: "/images/products/urban-company-native-m1-pro.webp",
    alt: "Urban Company Native M1 Pro RO Water Purifier",
    gallery: [
      "/images/products/urban-company-native-m1-pro.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Preset electronic dispensing (Glass, Bottle, Free Flow) with 2-year filter life.",
    description: "Urban Company Native M1 Pro introduces convenient one-touch electronic preset dispensing for a glass, a 1-litre bottle, or continuous flow, with 10-stage copper and alkaline purification.",
    features: [
      "2-Year filter life with Rapid Reverse Rinse technology",
      "Preset electronic dispense: 1 Glass (200ml), 1 Bottle (1L), Continuous",
      "10-Stage purification with Copper and Alkaline balance",
      "In-tank UV disinfection LED keeps reservoir sterile",
      "Real-time LED diagnostic indicators for tank and filter status"
    ],
    specifications: {
      purificationTechnology: "RO + UV + Alkaline + Copper + Preset Dispense",
      purificationStages: 10,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 16 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Premium Matte Engineered Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "45 Watts"
    },
    warranty: "2 Years Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Families that love precise one-touch bottle and glass dispensing"
  },
  {
    id: "urban-company-native-m2-pro",
    name: "Urban Company Native M2 Pro",
    brand: "Urban Company Native",
    model: "M2 Pro",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 17499,
    priceDisplay: "₹17,499",
    originalPrice: 22999,
    image: "/images/products/urban-company-native-m2-pro.webp",
    alt: "Urban Company Native M2 Pro Smart IoT Water Purifier",
    gallery: [
      "/images/products/urban-company-native-m2-pro.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Smart IoT purifier with phone app tracking, touch dispensing, and 2-year filter life.",
    description: "Urban Company Native M2 Pro connects to your smartphone to track live water TDS, filter life remaining, and daily consumption, complete with capacitive touch dispensing and 2-year zero maintenance.",
    features: [
      "Smart IoT app connectivity for real-time TDS and filter life tracking",
      "2-Year filter life with zero maintenance required",
      "Preset touch dispensing (Glass, Bottle, Free Flow)",
      "10-Stage multi-barrier RO+UV+Copper+Alkaline purification",
      "In-tank germicidal UV LED with automatic cyclic activation"
    ],
    specifications: {
      purificationTechnology: "Smart IoT RO + UV + Alkaline + Copper + Touch Dispense",
      purificationStages: 10,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 16 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "High-Grade Matte ABS",
      mountingType: "Wall Mount",
      powerConsumption: "45 Watts"
    },
    warranty: "2 Years Unconditional Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Smart homes wanting mobile app tracking and touch dispensing"
  },
  {
    id: "urban-company-native-m3",
    name: "Urban Company Native M3",
    brand: "Urban Company Native",
    model: "M3",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 20999,
    priceDisplay: "₹20,999",
    originalPrice: 26999,
    image: "/images/products/urban-company-native-m3.webp",
    alt: "Urban Company Native M3 Water Purifier",
    gallery: [
      "/images/products/urban-company-native-m3.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Flagship purifier with front digital TDS display, 3-year filter life, and smart app.",
    description: "Urban Company Native M3 elevates water purification with a front-facing digital screen showing live input/output TDS, an industry-leading 3-year filter life, and premium copper-alkaline enrichment.",
    features: [
      "Flagship design with real-time digital TDS screen on front panel",
      "3-Year filter life promise with high-flux membrane",
      "10-Stage purification including Copper, Alkaline and Mineralizer",
      "Smart app integration with filter health telemetry and reminders",
      "Child lock on electronic dispensing"
    ],
    specifications: {
      purificationTechnology: "Flagship RO + UV + Digital TDS Display + Copper Alkaline",
      purificationStages: 10,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Architectural Grade Polymer",
      mountingType: "Wall Mount",
      powerConsumption: "50 Watts"
    },
    warranty: "2 Years Comprehensive Warranty (3-Yr Filter Life)",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Premium homes demanding on-chassis real-time TDS display"
  },
  {
    id: "urban-company-native-m3-pro",
    name: "Urban Company Native M3 Pro",
    brand: "Urban Company Native",
    model: "M3 Pro",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 25499,
    priceDisplay: "₹25,499",
    originalPrice: 32000,
    image: "/images/products/urban-company-native-m3-pro.webp",
    alt: "Urban Company Native M3 Pro Premium Water Purifier",
    gallery: [
      "/images/products/urban-company-native-m3-pro.webp",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Ultimate flagship with instant hot and ambient water, digital screen, and 3-year filter life.",
    description: "Urban Company Native M3 Pro delivers instant hot water at the exact temperature for tea, coffee, and baby food alongside pure ambient drinking water. Features full smart app telemetry, front digital display, and 3-year filter life.",
    features: [
      "Top-tier flagship water purifier with instant hot and ambient water",
      "3-Year filter life with Rapid Reverse Rinse",
      "Smart IoT phone integration and front digital display",
      "Full copper and alkaline health mineral infusion",
      "Unconditional comprehensive multi-year warranty"
    ],
    specifications: {
      purificationTechnology: "Flagship Hot & Ambient IoT RO + UV + Alkaline Copper",
      purificationStages: 10,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2000 ppm",
      bodyMaterial: "Architectural Grade Polymer with Thermal Insulation",
      mountingType: "Wall Mount",
      powerConsumption: "550 Watts (Heating) / 50 Watts (RO)"
    },
    warranty: "2 Years Unconditional Comprehensive Warranty",
    availability: "In Stock",
    isDemo: false,
    isFeatured: true,
    bestFor: "Luxury homes desiring instant hot water and digital purity control"
  },

  // ==========================================
  // Client Modular System (Classic Option)
  // ==========================================
  {
    id: "aqua-grand",
    name: "AQUA Grand",
    brand: "AQUA Grand",
    model: "Grand Modular",
    category: "domestic",
    technology: "RO + UV + UF",
    price: 6500,
    priceDisplay: "₹6,500",
    originalPrice: 9500,
    image: "/images/products/aqua-prime.svg",
    alt: "AQUA Grand 12L Modular Water Purifier",
    gallery: [
      "/images/products/aqua-prime.svg",
      "/images/fallbacks/purifier-fallback.svg"
    ],
    shortDescription: "Affordable high-capacity 12-Litre modular domestic RO purifier with reliable booster pump.",
    description: "AQUA Grand is a classic modular cabinet RO purifier in Prayagraj offering easy maintenance, accessible replacement parts, and high 12-litre water storage at an accessible price point.",
    features: [
      "12-Litre high-capacity transparent storage cabinet",
      "Standard modular spare parts accessible anywhere in Prayagraj",
      "High-pressure booster pump for low overhead tank pressure",
      "Multi-stage RO + UV + UF filtration",
      "Low running cost with affordable annual cartridge replacement"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Mineral Cartridge",
      purificationStages: 6,
      storageCapacity: "12 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 1500 ppm",
      bodyMaterial: "Food Grade ABS Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "45 Watts"
    },
    warranty: "1 Year Service Support",
    availability: "In Stock",
    isDemo: false,
    bestFor: "Budget-conscious homes looking for high storage and low maintenance cost"
  }
];
