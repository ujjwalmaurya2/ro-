import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Phone, MessageCircle, Wrench } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export const MobileBottomBar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBooking = location.pathname === '/book-service';

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 pt-1.5 pb-[calc(0.4rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1 sm:gap-1.5">
        {/* 1. Home CTA */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className={`flex flex-col items-center justify-center min-h-[44px] py-1.5 px-0.5 rounded-xl transition-all active:scale-95 border ${
            isHome
              ? 'bg-sky-50 text-sky-700 border-sky-200 shadow-2xs font-extrabold'
              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/60'
          }`}
          aria-label="Go to Homepage"
          aria-current={isHome ? 'page' : undefined}
        >
          <Home className={`w-4 h-4 mb-0.5 ${isHome ? 'text-sky-600' : 'text-slate-600'}`} />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-center leading-tight truncate w-full">
            Home
          </span>
        </Link>

        {/* 2. Call Now CTA */}
        <a
          href={`tel:${businessConfig.phone}`}
          className="flex flex-col items-center justify-center min-h-[44px] py-1.5 px-0.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-800 transition-all active:scale-95"
          aria-label="Call Ajit Aqua Appliances"
        >
          <Phone className="w-4 h-4 text-sky-700 mb-0.5" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-center leading-tight truncate w-full">
            Call Now
          </span>
        </a>

        {/* 3. WhatsApp CTA */}
        <a
          href={buildWhatsAppUrl(whatsappMessages.general())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[44px] py-1.5 px-0.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-all active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-center leading-tight truncate w-full">
            WhatsApp
          </span>
        </a>

        {/* 4. Book Services CTA */}
        <Link
          to="/book-service"
          className={`flex flex-col items-center justify-center min-h-[44px] py-1.5 px-0.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-sm shadow-sky-600/30 transition-all active:scale-95 ${
            isBooking ? 'ring-2 ring-sky-400 font-extrabold' : ''
          }`}
          aria-label="Book RO Service"
          aria-current={isBooking ? 'page' : undefined}
        >
          <Wrench className="w-4 h-4 text-sky-200 mb-0.5" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-center leading-tight truncate w-full">
            Book Service
          </span>
        </Link>
      </div>
    </nav>
  );
};
