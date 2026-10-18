import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Wrench } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call CTA */}
        <a
          href={`tel:${businessConfig.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors active:scale-95"
          aria-label="Call Ajit Aqua Appliances"
        >
          <Phone className="w-4 h-4 text-sky-700 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={buildWhatsAppUrl(whatsappMessages.general())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-colors active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Service CTA */}
        <Link
          to="/book-service"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-sm shadow-sky-600/30 transition-colors active:scale-95"
          aria-label="Book RO Service"
        >
          <Wrench className="w-4 h-4 text-sky-200 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Book Service</span>
        </Link>
      </div>
    </div>
  );
};
