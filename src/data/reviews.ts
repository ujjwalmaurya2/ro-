/**
 * Customer Reviews Data Layer — Ajit Aqua Appliances
 * 
 * IMPORTANT: The items below represent UI layout placeholders.
 * They are explicitly marked as demo review slots and will be replaced
 * with verified customer feedback from Ajit Aqua Appliances records,
 * Google reviews, or direct client feedback.
 */

export interface CustomerReview {
  id: string;
  slotTitle: string;
  category: string;
  description: string;
  isDemoReview: boolean;
  demoNote: string;
}

export const reviewsData: CustomerReview[] = [
  {
    id: "rev-slot-1",
    slotTitle: "Customer Feedback Slot 1",
    category: "Doorstep RO Repair & Filter Service",
    description: "Reserved for verified customer feedback regarding doorstep RO troubleshooting, filter cleaning, and water flow restoration.",
    isDemoReview: true,
    demoNote: "Will be updated with verified customer review"
  },
  {
    id: "rev-slot-2",
    slotTitle: "Customer Feedback Slot 2",
    category: "New RO Purifier Installation",
    description: "Reserved for verified customer feedback regarding new domestic / commercial purifier selection, delivery, and wall installation.",
    isDemoReview: true,
    demoNote: "Will be updated with verified customer review"
  },
  {
    id: "rev-slot-3",
    slotTitle: "Customer Feedback Slot 3",
    category: "Annual Maintenance Contract (AMC)",
    description: "Reserved for verified customer feedback regarding periodic maintenance visits, TDS monitoring, and scheduled filter care.",
    isDemoReview: true,
    demoNote: "Will be updated with verified customer review"
  },
  {
    id: "rev-slot-4",
    slotTitle: "Customer Feedback Slot 4",
    category: "RO Membrane & Spares Replacement",
    description: "Reserved for verified customer feedback regarding compatible spare parts, pump replacement, and water taste improvement.",
    isDemoReview: true,
    demoNote: "Will be updated with verified customer review"
  }
];
