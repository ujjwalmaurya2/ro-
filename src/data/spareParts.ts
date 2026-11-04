/**
 * RO Spare Parts Data Layer — Ajit Aqua Appliances
 * 
 * NOTE: All spare parts below are marked with `isDemo: true` to clearly indicate
 * demo showroom inventory that can be seamlessly replaced with verified
 * client products via CMS or database integration.
 */

export interface SparePart {
  id: string;
  name: string;
  category: 
    | 'membrane'
    | 'filters'
    | 'pumps'
    | 'electrical'
    | 'valves'
    | 'fittings-tanks'
    | 'other';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  image: string;
  shortDescription: string;
  compatibility?: string;
  specifications?: Record<string, string>;
  isDemo: boolean;
  inStock?: boolean;
}

export const sparePartsData: SparePart[] = [
  // Client-confirmed prices. Names kept exactly as supplied; specs/compatibility/photos pending from the business.
  {
    id: "sediment-filter",
    name: "Sediment Filter",
    category: "filters",
    categoryLabel: "Sediment Filter",
    price: 499,
    image: "/images/placeholders/photo-coming-soon.svg",
    shortDescription: "Contact us to confirm the right part for your purifier model.",
    isDemo: false
  },
  {
    id: "carbon-filter",
    name: "Carbon Filter",
    category: "filters",
    categoryLabel: "Carbon Filter",
    price: 499,
    image: "/images/placeholders/photo-coming-soon.svg",
    shortDescription: "Contact us to confirm the right part for your purifier model.",
    isDemo: false
  },
  {
    id: "pri-filter",
    name: "Pri Filter",
    category: "filters",
    categoryLabel: "Filter",
    price: 299,
    image: "/images/placeholders/photo-coming-soon.svg",
    shortDescription: "Contact us to confirm the right part for your purifier model.",
    isDemo: false
  },
  {
    id: "membrane",
    name: "Membrane",
    category: "membrane",
    categoryLabel: "RO Membrane",
    price: 1499,
    image: "/images/placeholders/photo-coming-soon.svg",
    shortDescription: "Contact us to confirm the right part for your purifier model.",
    isDemo: false
  },
  {
    id: "sv",
    name: "SV",
    category: "other",
    categoryLabel: "Spare Part",
    price: 499,
    image: "/images/placeholders/photo-coming-soon.svg",
    shortDescription: "Contact us to confirm the right part for your purifier model.",
    isDemo: false
  },
  {
    id: "ro-booster-pump-100gpd-copper",
    name: "100 GPD Heavy-Duty RO Booster Pump",
    category: "pumps",
    categoryLabel: "Booster Pump",
    price: 1850,
    originalPrice: 2400,
    image: "/images/parts/ro-booster-pump-100gpd.svg",
    shortDescription: "High-pressure diaphragm booster pump with pure copper winding, low noise, and strong suction for multi-stage RO units.",
    compatibility: "Compatible with all 75 GPD, 80 GPD, and 100 GPD domestic water purifiers",
    specifications: {
      "Operating Voltage": "24V DC / 1.5A",
      "Inlet Pressure": "30 PSI",
      "Working Pressure": "110-130 PSI",
      "Motor Winding": "100% Copper"
    },
    isDemo: true,
    inStock: true
  },
  {
    id: "ro-smps-power-supply-24v",
    name: "24V / 2.5A Heavy-Duty SMPS Power Adapter",
    category: "electrical",
    categoryLabel: "Electrical / SMPS",
    price: 650,
    originalPrice: 900,
    image: "/images/parts/ro-smps-adapter.svg",
    shortDescription: "Switched-mode power supply designed for domestic RO systems with in-built short-circuit and voltage surge protection.",
    compatibility: "Powers 24V DC booster pumps, solenoid valves, and indicator lamps",
    specifications: {
      "Input Voltage": "140V – 280V AC, 50Hz",
      "Output Voltage": "24V DC, 2.5 Amps",
      "Protection": "Over-voltage, Thermal cut-off",
      "Cooling": "Ventilated plastic enclosure"
    },
    isDemo: true,
    inStock: true
  },
  {
    id: "uv-disinfection-lamp-phillips-type",
    name: "11-Watt UV Disinfection Lamp & Quartz Glass Tube",
    category: "electrical",
    categoryLabel: "UV Lamp",
    price: 550,
    originalPrice: 750,
    image: "/images/parts/uv-lamp-tube-11w.svg",
    shortDescription: "Germicidal ultraviolet light source that deactivates bacteria, viruses, and microbial cysts in water without chemicals.",
    compatibility: "Fits all domestic purifiers with 11W 4-pin UV barrels",
    specifications: {
      "Wattage": "11 Watts",
      "Wavelength": "254 nm (Germicidal UV-C)",
      "Cap Base": "4-Pin Single Ended",
      "Effective Life": "Up to 8,000 Hours"
    },
    isDemo: true,
    inStock: true
  },
  {
    id: "food-grade-pipe-fittings-kit",
    name: "Food-Grade 1/4\" RO Pipe (10 Metres) + Fitting Connectors Kit",
    category: "fittings-tanks",
    categoryLabel: "Pipes & Fittings",
    price: 290,
    originalPrice: 420,
    image: "/images/parts/ro-pipe-fittings-kit.svg",
    shortDescription: "Non-toxic, pressure-resistant virgin LLDPE tubing with an assortment of push-fit elbows, tees, and bulkhead connectors.",
    compatibility: "Universal for all domestic RO and water filtration systems",
    specifications: {
      "Tube Diameter": "1/4 Inch (6.35 mm)",
      "Tube Length": "10 Metres",
      "Included Fittings": "Elbows, Tees, Diverter valve, Teflon tape",
      "Pressure Rating": "Up to 150 PSI"
    },
    isDemo: true,
    inStock: true
  },
  {
    id: "flow-restrictor-fr-450",
    name: "Flow Restrictor FR-450 / FR-550 (Pack of 2)",
    category: "valves",
    categoryLabel: "Flow Restrictor",
    price: 150,
    originalPrice: 220,
    image: "/images/parts/flow-restrictor-fr450.svg",
    shortDescription: "Maintains optimal backpressure inside the RO membrane housing to force water through the membrane pores.",
    compatibility: "Suitable for 75 GPD & 80 GPD domestic RO membranes",
    specifications: {
      "Flow Rating": "450 cc / min",
      "Fitting": "1/4 Inch Push-Fit Push-In",
      "Material": "Polyoxymethylene (POM)"
    },
    isDemo: true,
    inStock: true
  },
  {
    id: "food-grade-storage-tank-8l",
    name: "Hygienic Food-Grade Antibacterial Water Storage Tank (8 Litre)",
    category: "fittings-tanks",
    categoryLabel: "Storage Tank",
    price: 1100,
    originalPrice: 1500,
    image: "/images/parts/storage-tank-8l.svg",
    shortDescription: "Sealed storage container engineered from food-grade virgin polymer with smooth inner lining that resists microbial film formation.",
    compatibility: "Replacement tank compatible with various modular wall-mounted RO cabinets",
    specifications: {
      "Capacity": "8 Litres",
      "Material": "Food Grade BPA-Free Polypropylene",
      "Color": "Translucent White / Blue",
      "Cleaning": "Detachable top lid for periodic washing"
    },
    isDemo: true,
    inStock: true
  }
];
