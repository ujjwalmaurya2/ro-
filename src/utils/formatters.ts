/**
 * Utility formatters for Ajit Aqua Appliances
 */

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function isValidIndianPhone(phone: string): boolean {
  // Strip spaces, dashes, +91
  const cleaned = phone.replace(/[\s\-+]/g, '').replace(/^91/, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

export function sanitizePhone(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}
