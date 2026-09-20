import { businessConfig } from '../config/business';

/**
 * Encodes text safely for WhatsApp click-to-chat links
 */
export function buildWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = customPhone || businessConfig.whatsappNumber;
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

  product: (productName: string, modelOrId?: string): string => 
    `Hello ${businessConfig.name}, I am interested in ${productName}${modelOrId ? ` (${modelOrId})` : ''}. Please share the price and availability.`,

  sparePart: (partName: string): string => 
    `Hello ${businessConfig.name}, I am looking for genuine spare part: ${partName}. Please let me know price and availability.`,

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
      return `Hello ${businessConfig.name}, I want to book an RO service.`;
    }
    return `Hello ${businessConfig.name}, I would like to book an RO service.\n` +
      `• Name: ${details.name || 'Customer'}\n` +
      `• Service Type: ${details.serviceType}\n` +
      `• Brand / Model: ${details.brand || 'Not specified'}\n` +
      `• Locality in Prayagraj: ${details.locality || 'Not specified'}\n` +
      `• Issue: ${details.problem || 'Standard inspection'}\n` +
      `Please confirm availability.`;
  },

  amc: (planName: string): string => 
    `Hello ${businessConfig.name}, I am interested in the ${planName} AMC plan. Please share the details and coverage.`,

  recommendation: (answers: { waterSource: string; familySize: string; tdsKnown: string }): string => 
    `Hello ${businessConfig.name}, I need help choosing an RO purifier for my home. Here are my requirements:\n` +
    `• Water Source: ${answers.waterSource}\n` +
    `• Household Size: ${answers.familySize}\n` +
    `• Water TDS Known: ${answers.tdsKnown}\n` +
    `Please recommend the most suitable RO purifier model for Prayagraj water conditions.`,

  cartOrder: (items: { name: string; quantity: number; price: number }[], customer?: { name: string; phone: string; address: string }): string => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemsList = items.map((i, idx) => `${idx + 1}. ${i.name} (Qty: ${i.quantity}) - ₹${(i.price * i.quantity).toLocaleString('en-IN')}`).join('\n');
    
    let msg = `Hello ${businessConfig.name}, I would like to order the following products:\n\n${itemsList}\n\n• Estimated Total: ₹${total.toLocaleString('en-IN')}\n`;
    if (customer && customer.name) {
      msg += `\nDelivery Details:\n• Name: ${customer.name}\n• Phone: ${customer.phone}\n• Address: ${customer.address}`;
    }
    msg += `\nPlease confirm order and delivery in Prayagraj.`;
    return msg;
  }
};
