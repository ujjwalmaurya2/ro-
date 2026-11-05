import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, ShoppingCart, Wrench, Clock, MapPin } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { SiteSearch } from '../common/SiteSearch';
import { businessConfig } from '../../config/business';
import { useCart } from '../../context/CartContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Water Purifiers', path: '/products' },
  { name: 'Spare Parts', path: '/parts' },
  { name: 'Services', path: '/services' },
  { name: 'AMC Plan', path: '/amc' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconBtn =
    'relative w-11 h-11 flex items-center justify-center rounded-xl text-slate-700 hover:text-brand-primary hover:bg-brand-subtle active:scale-95 transition';

  return (
    <>
      {/* Desktop-only info strip (location already lives in the brand subtitle on mobile) */}
      <div className="hidden md:block bg-brand-navy text-sky-100 text-xs">
        <div className="container-page h-8 flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" aria-hidden />
            RO sales, genuine spares &amp; doorstep service across Prayagraj
          </span>
          <span className="flex items-center gap-1.5 shrink-0">
            <Clock className="w-3.5 h-3.5 text-sky-300" aria-hidden />
            {businessConfig.businessHours.days}: {businessConfig.businessHours.timing}
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b transition-shadow duration-200 ${
          scrolled ? 'border-brand-border shadow-[0_4px_16px_-8px_rgba(15,61,86,0.15)]' : 'border-transparent md:border-brand-border'
        }`}
      >
        {/* Row 1: brand, search (md+), actions */}
        <div className="container-page h-14 md:h-16 flex items-center gap-3 lg:gap-6">
          <BrandLogo className="shrink-0" />

          <SiteSearch className="hidden md:block flex-1 max-w-xl" />

          <div className="ml-auto flex items-center gap-0.5 sm:gap-1.5">
            <a href={`tel:${businessConfig.phone}`} className={`${iconBtn} lg:w-auto lg:px-3 lg:gap-2`} aria-label={`Call ${businessConfig.displayPhone}`}>
              <Phone className="w-5 h-5 lg:w-4 lg:h-4 text-brand-primary" />
              <span className="hidden lg:inline text-sm font-semibold text-ink">{businessConfig.displayPhone}</span>
            </a>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={iconBtn}
              aria-label={`Open cart${totalCount ? `, ${totalCount} item${totalCount === 1 ? '' : 's'}` : ''}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCount > 0 && (
                <span
                  key={totalCount}
                  className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-bold text-white bg-brand-primary rounded-full ring-2 ring-white animate-scale-in"
                >
                  {totalCount}
                </span>
              )}
            </button>

            <Link to="/book-service" className="hidden md:inline-flex btn btn-primary ml-1">
              <Wrench className="w-4 h-4" />
              Book Service
            </Link>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="md:hidden px-4 pb-2.5">
          <SiteSearch />
        </div>

        {/* Row 2: primary navigation (tablet & desktop) */}
        <nav className="hidden md:block border-t border-slate-100" aria-label="Main navigation">
          <ul className="container-page flex items-center gap-1 h-11 overflow-x-auto no-scrollbar">
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="shrink-0">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative inline-flex items-center h-11 px-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-primary after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand-primary'
                        : 'text-slate-600 hover:text-ink'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
