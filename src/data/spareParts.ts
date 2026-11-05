/**
 * RO Spare Parts Data Layer — Ajit Aqua Appliances
 * 
 * Provides verified pricing and compatible spare parts for RO purifiers in Prayagraj.
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
  // Client-confirmed prices with verified realistic imagery and specifications
  {
    id: "sediment-filter",
    name: "Sediment Filter",
    category: "filters",
    categoryLabel: "Sediment Filter",
    price: 499,
    image: "/images/spare-parts/spun-sediment-filters.svg",
    shortDescription: "5-Micron spun polypropylene sediment filter cartridge to remove suspended sand, silt, rust, and particulate matter.",
    compatibility: "Universal standard 10-inch RO systems and inline assemblies",
    specifications: {
      "Filtration Rating": "5 Micron",
      "Material": "100% Virgin Spun Polypropylene",
      "Length": "10 Inch",
      "Max Operating Temp": "50°C"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "carbon-filter",
    name: "Carbon Filter",
    category: "filters",
    categoryLabel: "Carbon Filter",
    price: 499,
    image: "/images/spare-parts/carbon-inline-filter.svg",
    shortDescription: "High-adsorption activated carbon block inline cartridge to eliminate chlorine, organic chemicals, odor, and foul taste.",
    compatibility: "Standard inline RO & UV water purifiers",
    specifications: {
      "Filter Media": "Acid Washed Coconut Shell Activated Carbon",
      "Iodine Value": "1100+ mg/g",
      "Connector Type": "1/4 Inch Push-Fit Ports",
      "Lifespan": "Up to 6,000 Litres"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "pri-filter",
    name: "Pri Filter",
    category: "filters",
    categoryLabel: "Pre-Filter Housing",
    price: 299,
    image: "/images/spare-parts/pre-filter.svg",
    shortDescription: "10-inch heavy-duty external pre-filter housing bowl with spun candle to trap heavy dirt before raw water enters the RO machine.",
    compatibility: "External pre-treatment for all domestic RO purifiers",
    specifications: {
      "Bowl Size": "10 Inch Standard",
      "Ports": "1/4 Inch Threaded / Push-Fit Brass Inserts",
      "Housing": "Food Grade Polycarbonate / Polypropylene",
      "Included": "Outer Bowl, O-Ring & Spun Candle"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "membrane",
    name: "Membrane",
    category: "membrane",
    categoryLabel: "RO Membrane",
    price: 1499,
    image: "/images/spare-parts/ro-membrane-80gpd.svg",
    shortDescription: "Thin-Film Composite (TFC) RO membrane with 95%+ salt rejection, purifying heavy salts, fluoride, arsenic, and heavy metals.",
    compatibility: "Standard 75 / 80 GPD domestic RO membrane housings",
    specifications: {
      "Capacity": "80 GPD (Gallons Per Day)",
      "Salt Rejection": "95% - 98%",
      "Max Inlet TDS": "Up to 2,000 ppm",
      "Material": "Polyamide Thin-Film Composite"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "sv",
    name: "SV (Solenoid Valve)",
    category: "valves",
    categoryLabel: "Solenoid Valve",
    price: 499,
    image: "/images/spare-parts/solenoid-valve-24v.svg",
    shortDescription: "24V DC automatic electric solenoid valve to prevent forward water leakage when power or water supply is shut off.",
    compatibility: "Compatible with 24V DC domestic RO purification circuits",
    specifications: {
      "Operating Voltage": "24V DC",
      "Operating Pressure": "0.02 - 0.8 MPa",
      "Port Size": "1/4 Inch Push-Fit Connections",
      "Coil Type": "Pure Copper Enamelled Wire"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "ro-booster-pump-100gpd-copper",
    name: "100 GPD Heavy-Duty RO Booster Pump",
    category: "pumps",
    categoryLabel: "Booster Pump",
    price: 1850,
    originalPrice: 2400,
    image: "/images/spare-parts/ro-booster-pump-100gpd.svg",
    shortDescription: "High-pressure diaphragm booster pump with pure copper winding, low noise, and strong suction for multi-stage RO units.",
    compatibility: "Compatible with all 75 GPD, 80 GPD, and 100 GPD domestic water purifiers",
    specifications: {
      "Operating Voltage": "24V DC / 1.5A",
      "Inlet Pressure": "30 PSI",
      "Working Pressure": "110-130 PSI",
      "Motor Winding": "100% Copper"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "ro-smps-power-supply-24v",
    name: "24V / 2.5A Heavy-Duty SMPS Power Adapter",
    category: "electrical",
    categoryLabel: "Electrical / SMPS",
    price: 650,
    originalPrice: 900,
    image: "/images/spare-parts/ro-smps-adapter.svg",
    shortDescription: "Switched-mode power supply designed for domestic RO systems with in-built short-circuit and voltage surge protection.",
    compatibility: "Powers 24V DC booster pumps, solenoid valves, and indicator lamps",
    specifications: {
      "Input Voltage": "140V – 280V AC, 50Hz",
      "Output Voltage": "24V DC, 2.5 Amps",
      "Protection": "Over-voltage, Thermal cut-off",
      "Cooling": "Ventilated plastic enclosure"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "uv-disinfection-lamp-phillips-type",
    name: "11-Watt UV Disinfection Lamp & Quartz Glass Tube",
    category: "electrical",
    categoryLabel: "UV Lamp",
    price: 550,
    originalPrice: 750,
    image: "/images/spare-parts/uv-lamp-tube-11w.svg",
    shortDescription: "Germicidal ultraviolet light source that deactivates bacteria, viruses, and microbial cysts in water without chemicals.",
    compatibility: "Fits all domestic purifiers with 11W 4-pin UV barrels",
    specifications: {
      "Wattage": "11 Watts",
      "Wavelength": "254 nm (Germicidal UV-C)",
      "Cap Base": "4-Pin Single Ended",
      "Effective Life": "Up to 8,000 Hours"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "food-grade-pipe-fittings-kit",
    name: "Food-Grade 1/4\" RO Pipe (10 Metres) + Fitting Connectors Kit",
    category: "fittings-tanks",
    categoryLabel: "Pipes & Fittings",
    price: 290,
    originalPrice: 420,
    image: "/images/spare-parts/ro-pipe-fittings-kit.svg",
    shortDescription: "Non-toxic, pressure-resistant virgin LLDPE tubing with an assortment of push-fit elbows, tees, and bulkhead connectors.",
    compatibility: "Universal for all domestic RO and water filtration systems",
    specifications: {
      "Tube Diameter": "1/4 Inch (6.35 mm)",
      "Tube Length": "10 Metres",
      "Included Fittings": "Elbows, Tees, Diverter valve, Teflon tape",
      "Pressure Rating": "Up to 150 PSI"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "flow-restrictor-fr-450",
    name: "Flow Restrictor FR-450 / FR-550 (Pack of 2)",
    category: "valves",
    categoryLabel: "Flow Restrictor",
    price: 150,
    originalPrice: 220,
    image: "/images/spare-parts/flow-restrictor-fr450.svg",
    shortDescription: "Maintains optimal backpressure inside the RO membrane housing to force water through the membrane pores.",
    compatibility: "Suitable for 75 GPD & 80 GPD domestic RO membranes",
    specifications: {
      "Flow Rating": "450 cc / min",
      "Fitting": "1/4 Inch Push-Fit Push-In",
      "Material": "Polyoxymethylene (POM)"
    },
    isDemo: false,
    inStock: true
  },
  {
    id: "food-grade-storage-tank-8l",
    name: "Hygienic Food-Grade Antibacterial Water Storage Tank (8 Litre)",
    category: "fittings-tanks",
    categoryLabel: "Storage Tank",
    price: 1100,
    originalPrice: 1500,
    image: "/images/spare-parts/storage-tank-8l.svg",
    shortDescription: "Sealed storage container engineered from food-grade virgin polymer with smooth inner lining that resists microbial film formation.",
    compatibility: "Replacement tank compatible with various modular wall-mounted RO cabinets",
    specifications: {
      "Capacity": "8 Litres",
      "Material": "Food Grade BPA-Free Polypropylene",
      "Color": "Translucent White / Blue",
      "Cleaning": "Detachable top lid for periodic washing"
    },
    isDemo: false,
    inStock: true
  }
];
