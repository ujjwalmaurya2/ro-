/**
 * Products Data Layer — Ajit Aqua Appliances
 * 
 * NOTE: All products below are marked with `isDemo: true` to clearly indicate
 * demo showroom inventory that can be seamlessly replaced with verified
 * client products via CMS or database integration.
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
  category: 'domestic' | 'alkaline' | 'commercial';
  technology: 'RO' | 'RO + UV' | 'RO + UV + UF' | 'RO + UV + UF + Alkaline' | 'Commercial RO';
  price: number;
  originalPrice: number;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specifications: ProductSpecification;
  warranty: string;
  availability: 'Enquire for Stock' | 'Available on Order';
  isDemo: boolean;
  bestFor: string;
  ratingDemo?: number;
}

export const productsData: Product[] = [
  {
    id: "aqua-prime-ro-uv-uf",
    name: "Aqua Prime Copper + Alkaline RO",
    brand: "Ajit Aqua Pro Series",
    category: "domestic",
    technology: "RO + UV + UF + Alkaline",
    price: 13499,
    originalPrice: 17999,
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Advanced multi-stage domestic RO with copper infusion and active alkaline balance for sweet, mineral-rich water.",
    description: "Designed for high-performance home water purification in Prayagraj. Combines high-rejection RO membrane with UV disinfection, ultra-filtration, and an active copper-alkaline post-filter to restore essential minerals and natural taste.",
    features: [
      "Multi-stage RO + UV + UF purification",
      "Copper and Active Alkaline mineralizer cartridge",
      "High-pressure booster pump for low incoming water pressure",
      "Food-grade ABS water storage tank (9 Litres)",
      "Auto-flushing feature for extended membrane life",
      "Transparent water level indicator"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Alkaline + TDS Adjuster",
      purificationStages: 7,
      storageCapacity: "9 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 2000 ppm (Borewell / Municipal)",
      bodyMaterial: "Food Grade Non-Toxic ABS Plastic",
      mountingType: "Wall Mount / Countertop",
      powerConsumption: "60 Watts"
    },
    warranty: "1 Year Standard Warranty (Demo Specification)",
    availability: "Enquire for Stock",
    isDemo: true,
    bestFor: "Homes with borewell, tanker, or hard water supply",
    ratingDemo: 4.8
  },
  {
    id: "aqua-pure-shield-ro-uv",
    name: "Aqua Pure Shield RO + UV",
    brand: "Ajit Aqua Essential",
    category: "domestic",
    technology: "RO + UV",
    price: 10999,
    originalPrice: 14500,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Compact and reliable domestic RO purifier with dual UV sterilization for daily family drinking water.",
    description: "The ideal purification solution for urban Prayagraj households seeking pure, safe, and pathogen-free drinking water. Incorporates high-efficiency sediment filter, carbon block, and genuine-grade 75 GPD RO membrane.",
    features: [
      "Dual RO + UV disinfection against bacteria and viruses",
      "8 Litre storage capacity with hygienic sealed cover",
      "Energy efficient SMPS power supply",
      "In-built voltage fluctuation protector",
      "Sleek wall-mounting design suitable for all kitchens"
    ],
    specifications: {
      purificationTechnology: "RO + UV Filtration",
      purificationStages: 6,
      storageCapacity: "8 Litres",
      purificationSpeed: "Up to 12 L/hr",
      suitableWaterTDS: "Up to 1500 ppm",
      bodyMaterial: "Hygienic Engineered Plastic",
      mountingType: "Wall Mountable",
      powerConsumption: "45 Watts"
    },
    warranty: "1 Year Standard Warranty (Demo Specification)",
    availability: "Enquire for Stock",
    isDemo: true,
    bestFor: "Small to medium families using municipal or mixed water",
    ratingDemo: 4.7
  },
  {
    id: "aqua-grand-plus-mineral",
    name: "Aqua Grand Plus RO + Mineral Booster",
    brand: "Grand Series",
    category: "domestic",
    technology: "RO + UV + UF",
    price: 8999,
    originalPrice: 12999,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Budget-friendly, high-capacity RO purifier equipped with natural taste enricher and durable internal components.",
    description: "A proven, cost-effective workhorse purifier popular across Uttar Pradesh. Engineered with easily serviceable standard-size filter cartridges and high-longevity booster pump.",
    features: [
      "High recovery rate RO membrane technology",
      "10 Litre large internal storage tank",
      "Mineral booster cartridge retains essential calcium and magnesium",
      "Heavy-duty solenoid valve prevents dry run",
      "Transparent blue cabinet for quick water level monitoring"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Mineral Cartridge",
      purificationStages: 6,
      storageCapacity: "10 Litres",
      purificationSpeed: "Up to 15 L/hr",
      suitableWaterTDS: "Up to 1800 ppm",
      bodyMaterial: "ABS Virgin Plastic",
      mountingType: "Wall Mount",
      powerConsumption: "48 Watts"
    },
    warranty: "1 Year Standard Warranty (Demo Specification)",
    availability: "Enquire for Stock",
    isDemo: true,
    bestFor: "Families seeking an economical, easy-to-service RO purifier",
    ratingDemo: 4.6
  },
  {
    id: "aqua-alkaline-supreme-zen",
    name: "Zenith Alkaline RO with Active Carbon",
    brand: "Ajit Aqua Premium",
    category: "alkaline",
    technology: "RO + UV + UF + Alkaline",
    price: 16999,
    originalPrice: 21999,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Premium kitchen water purifier with pH balancing filter, negative ORP antioxidant water, and LED filter life alert.",
    description: "For wellness-oriented households seeking pure antioxidant alkaline drinking water with an optimal pH of 8.0 to 9.5. Neutralizes excess acidity and provides smooth, refreshing hydration.",
    features: [
      "Advanced pH regulation (alkaline enrichment)",
      "Bio-ceramic antibacterial filtration stage",
      "Micro-computer controlled operation with digital alerts",
      "Detachable tank for hassle-free deep cleaning",
      "Stainless steel internal UV disinfection chamber"
    ],
    specifications: {
      purificationTechnology: "RO + UV + UF + Bio-Alkaline + Mineral Controller",
      purificationStages: 8,
      storageCapacity: "10 Litres",
      purificationSpeed: "Up to 18 L/hr",
      suitableWaterTDS: "Up to 2500 ppm",
      bodyMaterial: "High-Gloss Reinforced ABS",
      mountingType: "Wall Mount / Tabletop",
      powerConsumption: "55 Watts"
    },
    warranty: "1 Year Standard Warranty (Demo Specification)",
    availability: "Enquire for Stock",
    isDemo: true,
    bestFor: "Health-conscious families seeking alkaline drinking water",
    ratingDemo: 4.9
  },
  {
    id: "commercial-ro-plant-25lph",
    name: "Commercial RO Water Plant 25 LPH",
    brand: "Ajit Commercial Systems",
    category: "commercial",
    technology: "Commercial RO",
    price: 24999,
    originalPrice: 32000,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "Heavy-duty 25 Litres Per Hour commercial RO unit designed for clinics, offices, cafes, and coaching institutes.",
    description: "Built on a robust stainless-steel skid frame with dual heavy-duty booster pumps and twin high-flow commercial membranes. Supplies pure water continuously for 30–60 staff members or customers.",
    features: [
      "Heavy-gauge Stainless Steel (SS) skid structure",
      "Dual commercial booster pumps for continuous operation",
      "Twin 100 GPD high-flow reverse osmosis membranes",
      "Integrated dual pressure gauges (feed and permeate)",
      "Automatic low-pressure and high-pressure shutoff switches"
    ],
    specifications: {
      purificationTechnology: "Commercial Multi-Membrane RO",
      purificationStages: 5,
      storageCapacity: "Direct Flow / External Cooler Compatible",
      purificationSpeed: "25 Litres/Hour",
      suitableWaterTDS: "Up to 2500 ppm",
      bodyMaterial: "SS 304 Grade Frame",
      mountingType: "Floor / Wall Mounted Skid",
      powerConsumption: "120 Watts"
    },
    warranty: "1 Year Service Support (Demo Specification)",
    availability: "Enquire for Stock",
    isDemo: true,
    bestFor: "Offices, hospitals, clinics, schools, and coaching centres in Prayagraj",
    ratingDemo: 4.8
  },
  {
    id: "commercial-ro-plant-50lph",
    name: "Commercial RO Water Plant 50 LPH",
    brand: "Ajit Commercial Systems",
    category: "commercial",
    technology: "Commercial RO",
    price: 36999,
    originalPrice: 46000,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "High-volume 50 LPH commercial purification system for restaurants, banquet halls, and medium commercial establishments.",
    description: "Engineered for high daily throughput with continuous water monitoring, high-efficiency raw water filtration, and industrial-grade electrical components.",
    features: [
      "50 Litres/Hour continuous purification capacity",
      "Industrial high-pressure commercial pump",
      "Pre-filter 20-inch jumbo sediment and activated carbon housing",
      "Compatible with external storage tanks and water dispensers",
      "Automatic panel control with dry-run protection"
    ],
    specifications: {
      purificationTechnology: "High-Volume Commercial RO",
      purificationStages: 5,
      storageCapacity: "External Tank Connection",
      purificationSpeed: "50 Litres/Hour",
      suitableWaterTDS: "Up to 3000 ppm",
      bodyMaterial: "Reinforced Powder-Coated Mild Steel / SS",
      mountingType: "Floor Mounted Rigid Skid",
      powerConsumption: "220 Watts"
    },
    warranty: "1 Year Service Support (Demo Specification)",
    availability: "Available on Order",
    isDemo: true,
    bestFor: "Commercial facilities, hotels, restaurants, and educational campuses",
    ratingDemo: 4.9
  }
];
