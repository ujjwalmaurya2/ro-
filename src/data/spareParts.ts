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
    | 'fittings-tanks';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  image: string;
  shortDescription: string;
  compatibility: string;
  specifications: Record<string, string>;
  isDemo: boolean;
  inStock: boolean;
}

export const sparePartsData: SparePart[] = [
  {
    id: "ro-membrane-80gpd-high-tds",
    name: "80 GPD High-TDS RO Membrane",
    category: "membrane",
    categoryLabel: "RO Membrane",
    price: 1450,
    originalPrice: 1950,
    image: "/images/parts/ro-membrane-80gpd.svg",
    shortDescription: "High-salt rejection thin-film composite (TFC) membrane element suitable for high TDS water supplies up to 2500 ppm.",
    compatibility: "Fits all standard 1812 domestic RO housings (Kent, Aquaguard, Pureit, Aqua Grand, Livpure, etc.)",
    specifications: {
      "Flow Capacity": "80 Gallons / Day (~12-15 L/hr)",
      "Salt Rejection Rate": "Up to 96%",
      "Max Operating TDS": "2500 ppm",
      "Material": "Polyamide Thin-Film Composite"
    },
    isDemo: true,
    inStock: true
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
    id: "spun-sediment-pre-filter-set",
    name: "Spun Polypropylene 5-Micron Pre-Filter Set (Pack of 3)",
    category: "filters",
    categoryLabel: "Sediment Filter",
    price: 380,
    originalPrice: 550,
    image: "/images/parts/spun-sediment-filters.svg",
    shortDescription: "High-density 10-inch spun candle filters that capture sand, mud, silt, and suspended particles to protect internal RO filters.",
    compatibility: "Standard 10-inch outer bowl pre-filter housings used in domestic water purifiers",
    specifications: {
      "Filter Micron Rating": "5 Micron",
      "Length": "10 Inch standard",
      "Material": "100% Food Grade Polypropylene",
      "Recommended Lifespan": "3 to 4 Months (depends on water quality)"
    },
    isDemo: true,
    inStock: true
  },
  {
    id: "activated-carbon-block-inline",
    name: "Premium Coconut Shell Activated Carbon Inline Filter",
    category: "filters",
    categoryLabel: "Carbon Filter",
    price: 450,
    originalPrice: 650,
    image: "/images/parts/carbon-inline-filter.svg",
    shortDescription: "Adsorbs chlorine, organic chemicals, unpleasant odours, and bad taste before water reaches the sensitive RO membrane.",
    compatibility: "Universal push-fit 1/4 inch connector compatible with all standard domestic RO brands",
    specifications: {
      "Media": "Acid-washed Coconut Shell Carbon",
      "Iodine Value": "1100 IV min",
      "Port Size": "1/4 Inch Push-Fit",
      "Flow Rate": "Up to 2 L/min"
    },
    isDemo: true,
    inStock: true
  },
  {
    id: "solenoid-valve-sv-24v",
    name: "High-Durability 24V Solenoid Valve (SV)",
    category: "valves",
    categoryLabel: "Solenoid Valve",
    price: 320,
    originalPrice: 480,
    image: "/images/parts/solenoid-valve-24v.svg",
    shortDescription: "Electrically controlled shut-off valve that halts incoming water feed when the purifier storage tank is full, preventing overflows.",
    compatibility: "All domestic RO purifiers operating on 24V DC",
    specifications: {
      "Operating Voltage": "24V DC",
      "Connection Size": "1/4 Inch Quick Connect",
      "Working Pressure": "0.02 – 0.8 MPa",
      "Coil Material": "Insulated Copper"
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
