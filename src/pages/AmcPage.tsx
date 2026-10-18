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
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold uppercase tracking-wider">
          <CalendarCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>Annual Maintenance Contracts</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
          RO AMC Plans in Prayagraj
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Preventive servicing, filter replacements, and prioritized technician response throughout the year.
        </p>

        {/* Demo Pricing Notice */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-[11px] text-sky-800">
          <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
          <span>Sample package rates • Exact coverage depends on purifier model</span>
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
        <span>Compare Plans (Swipe horizontally)</span>
        <span className="text-sky-600 font-semibold">3 Packages Available →</span>
      </div>

      {/* Plans: Mobile-Friendly Snap Carousel / Desktop Grid */}
      <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-3 px-3 md:mx-0 md:px-0">
        {amcPlansData.map((plan) => {
          const amcWhatsAppUrl = buildWhatsAppUrl(
            whatsappMessages.amc(plan.name)
          );

          return (
            <div
              key={plan.id}
              className={`w-[85vw] max-w-xs md:w-auto shrink-0 snap-start rounded-2xl p-4 sm:p-6 flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-sky-500 shadow-md shadow-sky-600/10'
                  : 'bg-white border border-slate-200/90 shadow-2xs hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-600 to-sky-700 text-white text-[10px] font-bold py-0.5 px-3 rounded-full shadow-xs">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Sora']">
                      {plan.name}
                    </h3>
                    <span className="px-1.5 py-0.5 text-[9px] font-semibold text-slate-600 bg-slate-100 rounded border border-slate-200 shrink-0">
                      Demo
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {plan.tagline}
                  </p>
                </div>

                {/* Pricing Display */}
                <div className="py-2.5 border-y border-slate-100 space-y-0.5">
                  <div className="text-2xl font-black text-slate-900 font-['Sora']">
                    {plan.demoPriceText}
                  </div>
                  <span className="text-[11px] text-slate-500 block">
                    {plan.period} (Sample starting rate)
                  </span>
                </div>

                {/* Recommended For */}
                <div className="p-2.5 bg-sky-50/70 rounded-lg text-xs text-slate-700">
                  <strong className="text-sky-900 block text-[11px] mb-0.5">Best Suited For:</strong>
                  <span className="text-slate-600">{plan.recommendedFor}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-800 block uppercase tracking-wider">
                    Plan Inclusions:
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.excludedFeatures && (
                    <ul className="text-[11px] text-slate-500 space-y-1 pt-1.5 border-t border-slate-100">
                      {plan.excludedFeatures.map((ex, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-slate-400 font-bold shrink-0">•</span>
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Action CTAs */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <a
                  href={amcWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl text-xs font-bold transition-all ${
                    plan.isPopular
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <Link
                  to={`/book-service?service=${encodeURIComponent(plan.name)}`}
                  className="block text-center text-xs font-semibold text-sky-700 hover:text-sky-800 py-0.5"
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
