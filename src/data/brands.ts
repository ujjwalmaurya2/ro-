/**
 * Brands & Systems Reference Data — Ajit Aqua Appliances
 * 
 * DISCLAIMER: Brand names mentioned below represent popular purifier systems
 * and models for which compatible service, maintenance, and spare parts support
 * may be requested in Prayagraj. Ajit Aqua Appliances does not imply authorized
 * dealership or official brand partnership unless confirmed by the client.
 */

export interface BrandItem {
  id: string;
  name: string;
  categoryNote: string;
  isDemoPlaceholder: boolean;
}

export const brandsData: BrandItem[] = [
  { id: "kent", name: "Kent", categoryNote: "RO / UV / UF Systems", isDemoPlaceholder: true },
  { id: "aquaguard", name: "Aquaguard", categoryNote: "Domestic Purifiers", isDemoPlaceholder: true },
  { id: "pureit", name: "Pureit", categoryNote: "RO & Mineral Series", isDemoPlaceholder: true },
  { id: "livpure", name: "Livpure", categoryNote: "Smart & Domestic RO", isDemoPlaceholder: true },
  { id: "aquagrand", name: "Aqua Grand", categoryNote: "Modular Cabinet Systems", isDemoPlaceholder: true },
  { id: "havells", name: "Havells", categoryNote: "Alkaline & Mineral Units", isDemoPlaceholder: true },
  { id: "commercial-custom", name: "Commercial Systems", categoryNote: "25 to 250 LPH Plants", isDemoPlaceholder: true },
];

export const brandsDisclaimer = "Brand availability and service support may vary. Contact us for current availability and compatible parts.";
