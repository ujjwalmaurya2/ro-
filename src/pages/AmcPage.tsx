import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  MessageCircle, 
  CalendarCheck, 
  Info
} from 'lucide-react';
import { amcPlansData } from '../data/amcPlans';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const AmcPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
          <CalendarCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>Annual Maintenance Contracts</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
          RO AMC Plans in Prayagraj
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
          Protect your water purifier with regular preventive servicing, filter replacements, and prioritized technician response throughout the year.
        </p>

        {/* Demo Pricing Notice */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-800">
          <Info className="w-4 h-4 text-sky-600 shrink-0" />
          <span>Demo plan packages shown for layout illustration. Exact plan costs and coverage depend on purifier model and condition.</span>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {amcPlansData.map((plan) => {
          const amcWhatsAppUrl = buildWhatsAppUrl(
            whatsappMessages.amc(plan.name)
          );

          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-sky-500 shadow-xl shadow-sky-600/10'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-600 to-sky-700 text-white text-[11px] font-bold py-1 px-3.5 rounded-full shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-900 font-['Sora']">
                      {plan.name}
                    </h3>
                    <span className="px-2 py-0.5 text-[10px] font-semibold text-slate-700 bg-slate-100 rounded border border-slate-200 shrink-0">
                      Demo Plan
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    {plan.tagline}
                  </p>
                </div>

                {/* Pricing Display */}
                <div className="py-4 border-y border-slate-100 space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Sora']">
                    {plan.demoPriceText}
                  </div>
                  <span className="text-xs text-slate-700 block">
                    {plan.period} (Demo starting rate)
                  </span>
                </div>

                {/* Recommended For */}
                <div className="p-3 bg-sky-50/60 rounded-xl text-xs text-slate-700">
                  <strong className="text-sky-900 block mb-0.5">Best Suited For:</strong>
                  <span>{plan.recommendedFor}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider">
                    Plan Inclusions:
                  </span>
                  <ul className="text-xs text-slate-700 space-y-2">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.excludedFeatures && (
                    <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                      {plan.excludedFeatures.map((ex, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                          <span className="text-slate-700 font-bold shrink-0">•</span>
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Action CTAs */}
              <div className="pt-8 mt-6 border-t border-slate-100 space-y-2.5">
                <a
                  href={amcWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                    plan.isPopular
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Ask on WhatsApp</span>
                </a>

                <Link
                  to={`/book-service?service=${encodeURIComponent(plan.name)}`}
                  className="block text-center text-xs font-semibold text-sky-700 hover:text-sky-800 py-1"
                >
                  Request On-Site Inspection →
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      {/* Plan Comparison Matrix */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 font-['Sora']">
            AMC Plan Comparison Matrix
          </h2>
          <p className="text-xs text-slate-700">
            Compare service visit frequencies and component coverage across plans.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-800">
                <th className="py-3 px-4 font-bold">Coverage Feature</th>
                <th className="py-3 px-4 font-bold text-center">Basic Care</th>
                <th className="py-3 px-4 font-bold text-center bg-sky-50 text-sky-900 rounded-t-lg">Standard Protect</th>
                <th className="py-3 px-4 font-bold text-center">Comprehensive</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Periodic Preventive Visits</td>
                <td className="py-3 px-4 text-center">2 Visits / Year</td>
                <td className="py-3 px-4 text-center bg-sky-50/50 font-semibold text-sky-900">3 Visits / Year</td>
                <td className="py-3 px-4 text-center">4 Visits / Year</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Digital Water TDS Testing</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center bg-sky-50/50 text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Tank & System Sanitization</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center bg-sky-50/50 text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Spun Pre-Filter Replacements</td>
                <td className="py-3 px-4 text-center text-slate-700">Charged as per usage</td>
                <td className="py-3 px-4 text-center bg-sky-50/50 font-semibold text-sky-900">2 Included</td>
                <td className="py-3 px-4 text-center font-semibold text-slate-900">All Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Sediment & Carbon Filter Set</td>
                <td className="py-3 px-4 text-center text-slate-700">Charged separately</td>
                <td className="py-3 px-4 text-center bg-sky-50/50 font-semibold text-sky-900">1 Full Set Included</td>
                <td className="py-3 px-4 text-center font-semibold text-slate-900">Full Replacement Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">RO Membrane Replacement</td>
                <td className="py-3 px-4 text-center text-slate-700">Separate</td>
                <td className="py-3 px-4 text-center bg-sky-50/50 text-slate-700">Discounted Member Rate</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included (1 Membrane)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Electrical Parts (SMPS / SV)</td>
                <td className="py-3 px-4 text-center text-slate-700">Separate</td>
                <td className="py-3 px-4 text-center bg-sky-50/50 text-slate-700">Discounted Member Rate</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Covered under plan</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Priority Service Calls</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Standard</td>
                <td className="py-3 px-4 text-center bg-sky-50/50 text-emerald-600 font-bold">✓ High Priority</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Top Priority Dispatch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
