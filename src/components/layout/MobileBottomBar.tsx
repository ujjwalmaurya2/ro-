import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Droplets, Wrench, Filter, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

type Icon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const TABS: { label: string; to: string; icon: Icon; isActive: (p: string) => boolean; emphasis?: boolean }[] = [
  { label: 'Home', to: '/', icon: Home, isActive: (p) => p === '/' },
  { label: 'Shop RO', to: '/products', icon: Droplets, isActive: (p) => p.startsWith('/products') },
  { label: 'Book Service', to: '/book-service', icon: Wrench, isActive: (p) => p === '/book-service' || p === '/services', emphasis: true },
  { label: 'Spares', to: '/parts', icon: Filter, isActive: (p) => p.startsWith('/parts') },
];

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const MobileBottomBar: React.FC = () => {
  const { pathname } = useLocation();

  const itemBase =
    'flex flex-col items-center justify-center gap-0.5 min-h-11 h-full rounded-xl text-[11px] font-medium leading-none transition-colors active:scale-95 select-none';

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-brand-border shadow-[0_-6px_20px_-12px_rgba(15,61,86,0.18)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <ul className="grid grid-cols-5 h-[var(--tabbar-h)] px-1.5 py-1 max-w-lg mx-auto">
        {TABS.map(({ label, to, icon: Icon, isActive, emphasis }) => {
          const active = isActive(pathname);
          return (
            <li key={to}>
              <Link
                to={to}
                aria-current={active ? 'page' : undefined}
                onClick={(e) => {
                  if (to === '/' && pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
                  }
                }}
                className={`${itemBase} ${active ? 'text-brand-primary font-semibold' : 'text-slate-500'}`}
              >
                <span
                  className={`flex items-center justify-center rounded-full transition-colors ${
                    emphasis
                      ? `w-9 h-7 ${active ? 'bg-brand-primary text-white' : 'bg-brand-light text-brand-deep'}`
                      : `w-12 h-7 ${active ? 'bg-brand-light' : ''}`
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={active ? 2.25 : 1.9} />
                </span>
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href={buildWhatsAppUrl(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className={`${itemBase} text-slate-500`}
            aria-label="Chat on WhatsApp (opens WhatsApp)"
          >
            <span className="flex items-center justify-center w-12 h-7 rounded-full">
              <MessageCircle className="w-5 h-5 text-whatsapp" strokeWidth={1.9} />
            </span>
            <span>WhatsApp</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
