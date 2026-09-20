/**
 * FAQ Data Layer — Ajit Aqua Appliances
 * 
 * Informative, neutral questions addressing common RO purification,
 * servicing, and maintenance requirements.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'service' | 'products' | 'amc';
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-water-ro-need",
    question: "How do I know whether my water needs RO purification?",
    answer: "Water with a high concentration of dissolved solids (such as hard borewell or tanker water, typically above 300-500 ppm TDS) generally benefits from Reverse Osmosis (RO) filtration. If your water has a salty or metallic taste, leaves white scale deposits on cookware, or comes from an untreated groundwater source, an RO purifier combined with sediment and carbon filters is typically recommended.",
    category: "general"
  },
  {
    id: "faq-tds-check",
    question: "Can Ajit Aqua Appliances check my water TDS?",
    answer: "Yes, our technicians carry calibrated digital TDS meters. During a service visit or inspection, we can test your raw tap/borewell water as well as your existing purifier's output to evaluate filtration efficiency and help you understand your water quality.",
    category: "service"
  },
  {
    id: "faq-service-frequency",
    question: "How often should an RO water purifier be serviced?",
    answer: "Typically, general servicing and external pre-filter (spun candle) cleaning or replacement is advised every 3 to 4 months. Inline sediment and carbon filters are usually replaced every 6 to 12 months depending on daily water usage and incoming silt levels.",
    category: "service"
  },
  {
    id: "faq-membrane-replacement",
    question: "When does an RO membrane need replacement?",
    answer: "A domestic RO membrane typically lasts between 1 to 2 years, depending on incoming water hardness, pre-filtration quality, and daily consumption. Key warning signs that a membrane needs changing include significantly reduced water flow, water taking unusually long to fill the tank, or a sharp increase in output TDS.",
    category: "products"
  },
  {
    id: "faq-repair-brands",
    question: "Do you repair different RO brands?",
    answer: "Yes, we provide service support and spare parts compatible with most major domestic and commercial water purifier designs and brands commonly found in Prayagraj, including Kent, Aquaguard, Pureit, Livpure, Aqua Grand, and custom-assembled systems.",
    category: "service"
  },
  {
    id: "faq-installation",
    question: "Do you provide RO installation and shifting services?",
    answer: "Yes, we handle professional uninstallation, relocation, and new machine wall-mounting across Prayagraj. This includes bracket installation, inlet plumbing connections, food-grade pipe routing, and thorough leak testing.",
    category: "service"
  },
  {
    id: "faq-buy-spare-parts",
    question: "Can I buy genuine RO spare parts from Ajit Aqua Appliances?",
    answer: "Yes, we stock a wide range of water purifier components including RO membranes, booster pumps, SMPS adapters, spun cartridges, inline filters, solenoid valves, flow restrictors, food-grade piping, and faucets. You can browse our catalogue and enquire directly via WhatsApp.",
    category: "products"
  },
  {
    id: "faq-book-service",
    question: "How can I book an RO service in Prayagraj?",
    answer: "Booking is simple: you can use the online 'Book RO Service' form on our website by selecting your locality and service requirement, or click the WhatsApp button to message us directly with your address and convenient time slot.",
    category: "service"
  },
  {
    id: "faq-amc-included",
    question: "What does an Annual Maintenance Contract (AMC) include?",
    answer: "An AMC provides scheduled periodic preventive maintenance visits, routine sanitization, TDS checks, priority service response, and depending on whether you choose a Basic, Standard, or Comprehensive plan, consumable filter replacements or component coverage.",
    category: "amc"
  },
  {
    id: "faq-contact",
    question: "How can I contact Ajit Aqua Appliances?",
    answer: "You can reach us directly via WhatsApp or phone call using the buttons on this website, or fill out the contact form on our Contact page. Our team is available 7 days a week from 9:00 AM to 8:30 PM.",
    category: "general"
  }
];
