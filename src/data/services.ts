/**
 * RO Services Data Layer — Ajit Aqua Appliances
 * 
 * NOTE: Service pricing indicators below are sample starting estimates
 * for demo demonstration. Actual charges depend on specific brand, parts,
 * and service inspection.
 */

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  commonProblems: string[];
  whatsIncluded: string[];
  startingEstimate: string;
  isDemoEstimate: boolean;
  iconName: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ro-repair",
    name: "RO Repair & Troubleshooting",
    shortDescription: "Diagnosis and repair of motor issues, electrical faults, water leakages, and non-working purifiers.",
    longDescription: "Complete diagnostic and corrective repair service for all domestic and commercial RO models. Our technicians identify component malfunctions, replace faulty parts, and restore optimal water purification efficiency.",
    commonProblems: [
      "Purifier is completely dead / No power light",
      "Continuous water drainage without purified water",
      "Vibration or excessive noise from internal booster pump",
      "Water leakage from base or internal fittings",
      "Foul taste, strange odour, or cloudy output water"
    ],
    whatsIncluded: [
      "Complete electrical and hydraulic diagnosis",
      "Pump pressure and solenoid valve testing",
      "Leak inspection and connector tightening",
      "Transparent breakdown estimate before repair",
      "Post-repair purification output verification"
    ],
    startingEstimate: "Starting from ₹199 (Demo Inspection Charge)",
    isDemoEstimate: true,
    iconName: "Wrench",
    badge: "Popular Service"
  },
  {
    id: "routine-servicing",
    name: "General RO Servicing & Sanitization",
    shortDescription: "Periodic maintenance, internal pipe flushing, tank sanitization, and performance calibration.",
    longDescription: "Comprehensive health check-up recommended every 3 to 4 months to prevent unexpected breakdowns, maintain membrane longevity, and preserve pure, refreshing taste.",
    commonProblems: [
      "Slow water filling rate",
      "Slight change in water taste over time",
      "Dust and sediment accumulation inside pre-filter bowl",
      "Routine preventive maintenance due"
    ],
    whatsIncluded: [
      "Pre-filter bowl cleaning and spun cartridge check",
      "Purifier storage tank deep sanitization",
      "Internal tube and connector flushing",
      "Raw water vs purified water TDS comparison test",
      "Flow rate and pump pressure verification"
    ],
    startingEstimate: "Starting from ₹249 (Demo Service Charge)",
    isDemoEstimate: true,
    iconName: "Sparkles",
    badge: "Recommended"
  },
  {
    id: "filter-replacement",
    name: "Sediment & Carbon Filter Replacement",
    shortDescription: "Timely replacement of external pre-filters, inline sediment, and active carbon blocks.",
    longDescription: "Filters accumulate heavy dirt, sand, and chemical chlorine over months of operation. Timely replacement is vital to protect the delicate RO membrane from premature clogging.",
    commonProblems: [
      "Pre-filter candle turned brown, muddy, or black",
      "Low water inflow reaching internal membrane",
      "Chlorine or chemical odour in purified water",
      "More than 6 months since last filter change"
    ],
    whatsIncluded: [
      "Removal of choked sediment and carbon filters",
      "Housing sanitization and seal ring lubrication",
      "Installation of fresh high-grade filter cartridges",
      "System flushing to clear initial carbon fine dust",
      "Leakage test under working tap pressure"
    ],
    startingEstimate: "Starting from ₹499 (Parts + Service Demo Estimate)",
    isDemoEstimate: true,
    iconName: "Layers"
  },
  {
    id: "membrane-replacement",
    name: "RO Membrane Replacement",
    shortDescription: "Restore high-purity mineral balance and TDS reduction with fresh thin-film membrane elements.",
    longDescription: "The reverse osmosis membrane is the core engine of your water purifier. When scaled with hard water salts, output drops and TDS levels spike. We install properly rated membranes matched to your incoming water TDS.",
    commonProblems: [
      "Drastic rise in output water TDS reading",
      "Purifier takes 2–3 hours to fill even 5 litres",
      "Water tastes salty, hard, or bitter",
      "High rejection wastewater volume with zero pure water"
    ],
    whatsIncluded: [
      "Detailed TDS measurement before and after change",
      "Membrane housing descaling and sanitization",
      "Installation of high-rejection RO membrane (75/80/100 GPD)",
      "Flow restrictor (FR) inspection and replacement if required",
      "Booster pump operating pressure verification"
    ],
    startingEstimate: "Starting from ₹1,450 (Membrane + Service Demo Estimate)",
    isDemoEstimate: true,
    iconName: "ShieldCheck",
    badge: "Core Purity"
  },
  {
    id: "installation",
    name: "RO Installation & Wall Mounting",
    shortDescription: "Safe, secure wall mounting, plumbing diverter installation, and initial machine calibration.",
    longDescription: "Professional installation ensuring safe electrical grounding, secure masonry wall drilling, optimal water inlet pressure, and proper wastewater drain routing without messy exposed tubes.",
    commonProblems: [
      "Purchased a new RO purifier and require setup",
      "Moving to a newly built kitchen or renovated home",
      "Incorrect plumbing fittings causing leaks",
      "Vibration due to loose wall brackets"
    ],
    whatsIncluded: [
      "Heavy-duty wall bracket drilling and leveling",
      "Brass inlet diverter valve fitting to tap connection",
      "Neat food-grade pipe routing and drain positioning",
      "Power adapter setup and initial tank priming",
      "Operational walkthrough and maintenance tips"
    ],
    startingEstimate: "Starting from ₹349 (Demo Installation Charge)",
    isDemoEstimate: true,
    iconName: "PlusCircle"
  },
  {
    id: "uninstallation-relocation",
    name: "Uninstallation & Shifting Service",
    shortDescription: "Careful dismantling, water drainage, and safe relocation within Prayagraj.",
    longDescription: "Relocating your residence or office? Our technicians safely depressurize, drain the storage tank, pack delicate electronic adapters, and reinstall the system at your new premises in Prayagraj.",
    commonProblems: [
      "Home shifting or office relocation in Prayagraj",
      "Temporary dismantling for kitchen painting/carpentry",
      "Transferring purifier to another floor or apartment"
    ],
    whatsIncluded: [
      "Depressurizing and water draining from filters and tank",
      "Safe unhooking of electrical adapter and solenoid valve",
      "Pipes labeling and valve isolation",
      "Optional re-installation at your new address"
    ],
    startingEstimate: "Starting from ₹299 (Demo Charge)",
    isDemoEstimate: true,
    iconName: "ArrowRightLeft"
  },
  {
    id: "tds-testing-inspection",
    name: "Water TDS Testing & Inspection",
    shortDescription: "On-site testing of incoming tap water and purified water using digital calibrated TDS meters.",
    longDescription: "Total Dissolved Solids (TDS) indicate the concentration of dissolved minerals, salts, and metals in your water. We test both raw feed water and RO output to verify whether your purifier is operating effectively.",
    commonProblems: [
      "Uncertain whether current drinking water is safe",
      "Checking whether existing RO is purifying properly",
      "Sudden change in municipal or borewell water taste"
    ],
    whatsIncluded: [
      "Calibrated digital TDS meter testing",
      "Raw water vs purified water comparison",
      "Recommendation on filter health and membrane state",
      "Guidance on suitable purifier technologies if needed"
    ],
    startingEstimate: "Available as part of service visit",
    isDemoEstimate: true,
    iconName: "Gauge"
  },
  {
    id: "amc-service",
    name: "Annual Maintenance Contract (AMC)",
    shortDescription: "Year-round preventive maintenance visits and repair support for worry-free pure water.",
    longDescription: "Structured annual maintenance programs designed to keep your domestic or commercial purifier operating reliably throughout the year with scheduled visits and service support.",
    commonProblems: [
      "Frequent unexpected RO breakdowns",
      "Forgetting periodic filter change dates",
      "Wanting fixed, predictable annual maintenance costs"
    ],
    whatsIncluded: [
      "Scheduled preventive maintenance visits",
      "Priority technician assignment for service requests",
      "Free routine service checkups during contract period",
      "Discounted or included replacement filters per plan"
    ],
    startingEstimate: "Starting from ₹1,499/year (Demo Plan Estimate)",
    isDemoEstimate: true,
    iconName: "CalendarCheck",
    badge: "Best Value"
  }
];
