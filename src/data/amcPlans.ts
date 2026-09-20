/**
 * AMC Plans Data Layer — Ajit Aqua Appliances
 * 
 * NOTE: The pricing and coverage below represent demo plan structures
 * for illustrative purposes. Actual plan terms, pricing, and parts coverage
 * are finalized upon machine inspection and client confirmation.
 */

export interface AMCPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  demoPriceText: string;
  priceAmount: number;
  period: string;
  isDemo: boolean;
  features: string[];
  excludedFeatures?: string[];
  recommendedFor: string;
}

export const amcPlansData: AMCPlan[] = [
  {
    id: "amc-basic",
    name: "Basic Care AMC",
    tagline: "Essential preventive maintenance for standard domestic water purifiers.",
    demoPriceText: "Starting from ₹1,499",
    priceAmount: 1499,
    period: "per year",
    isDemo: true,
    recommendedFor: "Relatively new purifiers with low to moderate daily usage.",
    features: [
      "2 Scheduled periodic preventive service check-ups",
      "Comprehensive internal sanitization & pipe cleaning",
      "Digital water TDS level inspection on each visit",
      "Pre-filter bowl cleaning on each visit",
      "Priority customer support for service calls",
      "Labor charges covered for routine maintenance visits"
    ],
    excludedFeatures: [
      "Replacement filter cartridges charged as per usage",
      "RO membrane replacement charged separately if needed",
      "Electrical component replacement charged as per parts"
    ]
  },
  {
    id: "amc-standard",
    name: "Standard Protect AMC",
    tagline: "Our most popular coverage: Includes periodic visits and routine consumable filter sets.",
    badge: "Most Popular",
    isPopular: true,
    demoPriceText: "Starting from ₹2,499",
    priceAmount: 2499,
    period: "per year",
    isDemo: true,
    recommendedFor: "Standard family households with moderate to high daily drinking water consumption.",
    features: [
      "3 Scheduled periodic preventive maintenance visits",
      "Includes replacement of 1 full set of standard sediment & carbon filters",
      "Includes 2 Spun pre-filter candle replacements",
      "Digital raw vs purified water TDS comparison on each visit",
      "Booster pump pressure & solenoid valve performance checks",
      "Free breakdown service call visits during the plan term",
      "Prompt technician service support in Prayagraj"
    ],
    excludedFeatures: [
      "RO Membrane replacement charged at discounted rates if required",
      "Major electrical components (booster pump/SMPS) charged at special member pricing"
    ]
  },
  {
    id: "amc-comprehensive",
    name: "Comprehensive Complete AMC",
    tagline: "Complete peace-of-mind coverage including routine filters and major component protection.",
    badge: "All-Inclusive Demo",
    demoPriceText: "Starting from ₹3,999",
    priceAmount: 3999,
    period: "per year",
    isDemo: true,
    recommendedFor: "Households with high TDS borewell water or commercial offices wanting zero maintenance hassles.",
    features: [
      "4 Scheduled preventive quarterly maintenance visits",
      "Full replacement of sediment, carbon, and inline filters during year",
      "Includes 1 high-grade RO membrane replacement (if worn during plan year)",
      "Coverage for SMPS electrical power supply repair / replacement",
      "Coverage for solenoid valve (SV) repair / replacement",
      "Breakdown service call visits within Prayagraj",
      "Deep ultrasonic tank sanitization and water quality test report"
    ],
    excludedFeatures: [
      "Physical cabinet damage or external plumbing breakage excluded"
    ]
  }
];
