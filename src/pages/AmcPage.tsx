import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  CalendarCheck,
  Info
} from 'lucide-react';
import { amcPlan } from '../data/amcPlans';
import { formatINR } from '../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const AmcPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold uppercase tracking-wider">
          <CalendarCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>AMC</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
          RO AMC Plan in Prayagraj
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Keep your water purifier maintained with an AMC Plan from Ajeet Aqua Appliances.
        </p>
      </div>

      {/* Single plan card */}
      <div className="max-w-md mx-auto bg-white border-2 border-sky-500 shadow-md shadow-sky-600/10 rounded-2xl p-4 sm:p-6 space-y-4">
        <div className="py-1 space-y-0.5 text-center">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 font-['Sora']">
            {amcPlan.name}
          </h2>
          <div className="text-3xl font-black text-slate-900 font-['Sora']">
            {formatINR(amcPlan.price)}
          </div>
        </div>

        <div className="p-2.5 bg-sky-50/70 border border-sky-100 rounded-lg text-xs text-slate-700 flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
          <span>{amcPlan.note}</span>
        </div>

        <div className="pt-1 space-y-2">
          <a
            href={buildWhatsAppUrl(whatsappMessages.amc())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </a>

          <Link
            to={`/book-service?service=${encodeURIComponent(amcPlan.name)}`}
            className="block text-center text-xs font-semibold text-sky-700 hover:text-sky-800 py-0.5"
          >
            Send AMC Enquiry via Booking Form →
          </Link>
        </div>
      </div>
    </div>
  );
};
