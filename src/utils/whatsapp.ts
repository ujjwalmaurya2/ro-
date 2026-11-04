import { businessConfig } from '../config/business';
import { amcPlan } from '../data/amcPlans';
import { SERVICE_VISIT_CHARGE } from '../data/services';
import { formatINR } from './formatters';

const visitChargeLine = `Service & Visit Charge — ${formatINR(SERVICE_VISIT_CHARGE)} (parts/repairs extra, if needed)`;

/**
 * Encodes text safely for WhatsApp click-to-chat links
 */
export function buildWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = customPhone || businessConfig.whatsappNumber;
  // wa.me needs country code 91 + a 10-digit Indian mobile, digits only.
  if (!/^91[6-9]\d{9}$/.test(phone)) {
    console.error(`WhatsApp number is not configured correctly ("${phone}"). Set whatsappNumber in src/config/business.ts.`);
    return '/contact';
  }
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Open WhatsApp directly in new tab or native app
 */
export function openWhatsApp(message: string, customPhone?: string): void {
  const url = buildWhatsAppUrl(message, customPhone);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Pre-defined contextual WhatsApp messages
 */
export const whatsappMessages = {
  general: (): string =>
    `Hello ${businessConfig.name}, I would like to make an enquiry regarding RO water purifiers and services in Prayagraj.`,

  product: (productName: string, price: number): string =>
    `Hello ${businessConfig.name}, I am interested in ${productName} — ${formatINR(price)}. Please confirm availability and details.`,

  sparePart: (partName: string, price: number): string =>
    `Hello ${businessConfig.name}, I am looking for the spare part: ${partName} — ${formatINR(price)}. Please confirm availability and that it fits my purifier.`,

  sparePartPhotoMatch: (): string =>
    `Hello ${businessConfig.name}, I need help identifying/replacing an RO spare part. I can share a photo.`,

  service: (details?: {
    name?: string;
    serviceType?: string;
    brand?: string;
    locality?: string;
    problem?: string;
  }): string => {
    if (!details || !details.serviceType) {
      return `Hello ${businessConfig.name}, I want to book an RO service.\n• ${visitChargeLine}`;
    }
    return `Hello ${businessConfig.name}, I would like to book an RO service.\n` +
      `• Name: ${details.name || 'Customer'}\n` +
      `• Service Type: ${details.serviceType}\n` +
      `• Brand / Model: ${details.brand || 'Not specified'}\n` +
      `• Locality in Prayagraj: ${details.locality || 'Not specified'}\n` +
      `• Issue: ${details.problem || 'Standard inspection'}\n` +
      `• ${visitChargeLine}\n` +
      `Please confirm availability.`;
  },

  amc: (): string =>
    `Hello ${businessConfig.name}, I am interested in the ${amcPlan.name} — ${formatINR(amcPlan.price)}. Please confirm what the plan covers.`,

  recommendation: (answers: { waterSource: string; familySize: string; tdsKnown: string }): string =>
    `Hello ${businessConfig.name}, I need help choosing an RO purifier for my home. Here are my requirements:\n` +
    `• Water Source: ${answers.waterSource}\n` +
    `• Household Size: ${answers.familySize}\n` +
    `• Water TDS Known: ${answers.tdsKnown}\n` +
    `Please recommend the most suitable RO purifier model for Prayagraj water conditions.`,

  cartOrder: (items: { name: string; quantity: number; price: number }[], customer?: { name: string; phone: string; address: string }): string => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemsList = items.map((i, idx) => `${idx + 1}. ${i.name} (Qty: ${i.quantity} × ${formatINR(i.price)}) - ${formatINR(i.price * i.quantity)}`).join('\n');

    let msg = `Hello ${businessConfig.name}, I would like to order the following products:\n\n${itemsList}\n\n• Estimated Total: ${formatINR(total)}\n`;
    if (customer && customer.name) {
      msg += `\nDelivery Details:\n• Name: ${customer.name}\n• Phone: ${customer.phone}\n• Address: ${customer.address}`;
    }
    msg += `\nPlease confirm order and delivery in Prayagraj.`;
    return msg;
  }
};
