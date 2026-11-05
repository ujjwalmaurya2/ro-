/**
 * Brands & Systems Reference Data — Ajeet Aqua Appliances
 * 
 * DISCLAIMER: Brand names mentioned below represent popular purifier systems
 * and models available for purchase, service, and spare parts support in Prayagraj.
 * Ajeet Aqua Appliances provides multi-brand sales and genuine parts support.
 */

export interface BrandItem {
  id: string;
  name: string;
  categoryNote: string;
  isDemoPlaceholder: boolean;
}

export const brandsData: BrandItem[] = [
  { id: "kent", name: "KENT", categoryNote: "Mineral RO & IoT Purifiers", isDemoPlaceholder: false },
  { id: "aquaguard", name: "Aquaguard", categoryNote: "Active Copper & Zinc Series", isDemoPlaceholder: false },
  { id: "livpure", name: "Livpure", categoryNote: "Stainless Steel & Alkaline RO", isDemoPlaceholder: false },
  { id: "havells", name: "Havells", categoryNote: "Under-Sink & Hot/Cold Units", isDemoPlaceholder: false },
  { id: "blue-mount", name: "Blue Mount", categoryNote: "12L & Earthen Matka Purifiers", isDemoPlaceholder: false },
  { id: "urban-company-native", name: "Urban Company Native", categoryNote: "2-Year Filter Life ROs", isDemoPlaceholder: false },
];

export const brandsDisclaimer = "Brand availability and service support may vary. Contact Ajeet Aqua Appliances for live stock and installation.";
