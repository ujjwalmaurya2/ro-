import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShoppingCart, 
  Menu, 
  X, 
  Wrench, 
  MapPin, 
  Clock,
  ChevronRight
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { CategoryNavBar } from './CategoryNavBar';
import { businessConfig } from '../../config/business';
import { useCart } from '../../context/CartContext';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Water Purifiers', path: '/products' },
    { name: 'Spare Parts', path: '/parts' },
    { name: 'Services', path: '/services' },
    { name: 'EMC Plants', path: '/amc' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 text-white text-xs py-2 px-4 border-b border-sky-700/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2 text-sky-100">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Serving <strong>Prayagraj</strong> — RO Sales, Genuine Spare Parts & Repair Services</span>
          </div>
          <div className="flex items-center gap-4 text-sky-200">
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-300" />
              {businessConfig.businessHours.days}: {businessConfig.businessHours.timing}
            </span>
            <a 
              href={`tel:${businessConfig.phone}`} 
              className="flex items-center gap-1.5 text-white hover:text-sky-200 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-300" />
              <span>Call: {businessConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 ${
        scrolled ? 'shadow-md shadow-sky-900/5' : ''
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-200 ${
          scrolled ? 'py-2.5' : 'py-3.5'
        }`}>
          {/* Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-sky-700 bg-sky-50 font-semibold'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Chat */}
            <a
              href={buildWhatsAppUrl(whatsappMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold">WhatsApp</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 text-[11px] font-bold text-white bg-sky-600 rounded-full border-2 border-white animate-scale-in">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Primary Action Button: Book a Service */}
            <Link
              to="/book-service"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 shadow-md shadow-sky-600/20 hover:shadow-lg transition-all"
            >
              <Wrench className="w-4 h-4 text-sky-200" />
              <span>Book a Service</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Blinkit-Style Horizontal Category Navigation Bar */}
        <CategoryNavBar />
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <BrandLogo />
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-sky-50 text-sky-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
              <Link
                to="/book-service"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-white bg-sky-600 font-semibold shadow-md shadow-sky-600/20 text-center"
              >
                <Wrench className="w-5 h-5 text-sky-200" />
                <span>Book RO Service Now</span>
              </Link>

              <a
                href={buildWhatsAppUrl(whatsappMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-emerald-800 bg-emerald-50 border border-emerald-200 font-semibold text-center"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${businessConfig.phone}`}
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-slate-700 bg-slate-100 font-semibold text-center text-sm"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call {businessConfig.displayPhone}</span>
              </a>
            </div>

            {/* Quick Local Info */}
            <div className="pt-4 text-xs text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>{businessConfig.fullAddress}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>{businessConfig.businessHours.days}: {businessConfig.businessHours.timing}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
