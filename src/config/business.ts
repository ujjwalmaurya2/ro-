/**
 * Centralized Business Configuration for Ajit Aqua Appliances
 * 
 * IMPORTANT: Replace placeholder values with confirmed client information.
 * All phone numbers, addresses, WhatsApp links, and service areas across
 * the entire website read directly from this single file.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  displayWhatsapp: string;
  email: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  addressLine1: string;
  addressLine2: string;
  fullAddress: string;
  businessHours: {
    days: string;
    timing: string;
  };
  googleMapsEmbedUrl?: string;
  serviceAreas: {
    id: string;
    name: string;
    isDemoPlaceholder?: boolean;
  }[];
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export const businessConfig: BusinessConfig = {
  name: "Ajit Aqua Appliances",
  tagline: "Pure Water. Better Living.",
  shortDescription: "RO Water Purifiers, Spare Parts & Professional RO Services in Prayagraj.",
  
  phone: "+919616346090",
  displayPhone: "+91 96163 46090",
  whatsappNumber: "919616346090",
  displayWhatsapp: "+91 96163 46090",
  email: "contact@ajitaquaappliances.com", // Placeholder: replace with client email
  
  // Physical Location
  city: "Prayagraj",
  state: "Uttar Pradesh",
  country: "India",
  pincode: "211002",
  addressLine1: "Shop No. 12, Main Market Road", // Placeholder address
  addressLine2: "Near Civil Lines / Teliyarganj",
  fullAddress: "Shop No. 12, Main Market Road, Near Civil Lines, Prayagraj, Uttar Pradesh 211002",
  
  businessHours: {
    days: "Monday – Sunday",
    timing: "09:00 AM – 08:30 PM",
  },

  // Service Localities in Prayagraj (Configurable demo placeholders)
  serviceAreas: [
    { id: "civil-lines", name: "Civil Lines", isDemoPlaceholder: true },
    { id: "teliyarganj", name: "Teliyarganj", isDemoPlaceholder: true },
    { id: "katra", name: "Katra", isDemoPlaceholder: true },
    { id: "george-town", name: "George Town", isDemoPlaceholder: true },
    { id: "allahpur", name: "Allahpur", isDemoPlaceholder: true },
    { id: "naini", name: "Naini", isDemoPlaceholder: true },
    { id: "jhunsi", name: "Jhunsi", isDemoPlaceholder: true },
    { id: "phaphamau", name: "Phaphamau", isDemoPlaceholder: true },
    { id: "rajrooppur", name: "Rajrooppur", isDemoPlaceholder: true },
    { id: "dhoomanganj", name: "Dhoomanganj", isDemoPlaceholder: true },
    { id: "tagore-town", name: "Tagore Town", isDemoPlaceholder: true },
    { id: "mumfordganj", name: "Mumfordganj", isDemoPlaceholder: true },
  ],

  socialLinks: [
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "Instagram", url: "https://instagram.com" },
  ],
};
