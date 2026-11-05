/**
 * AMC Plan Data Layer — Ajeet Aqua Appliances
 *
 * Price confirmed by the business. Duration, visits and parts coverage are
 * intentionally not listed until the business confirms them.
 */

export interface AMCPlan {
  id: string;
  name: string;
  price: number;
  note: string;
}

export const amcPlan: AMCPlan = {
  id: "amc-plan",
  name: "AMC Plan",
  price: 4000,
  note: "Please contact us to confirm what the AMC Plan covers before you sign up.",
};
