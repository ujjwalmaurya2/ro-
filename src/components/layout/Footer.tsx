import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { businessConfig } from '../../config/business';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

const GROUPS = [
  {
    title: 'Products',
    links: [
      { label: 'All RO Purifiers', to: '/products' },
      { label: 'Alkaline & Mineral RO', to: '/products?category=alkaline' },
      { label: 'Spare Parts & Filters', to: '/parts' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'RO Repair & Servicing', to: '/services' },
      { label: 'Book a Service', to: '/book-service' },
      { label: 'AMC Plan', to: '/amc' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'About Us', to: '/about' },
      { label: 'Your Cart', to: '/cart' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 sm:mt-16 bg-brand-neutral border-t border-brand-border text-sm">
      <div className="container-page py-8 sm:py-12 grid gap-8 lg:grid-cols-12">
        {/* Business contact */}
        <div className="lg:col-span-5 space-y-4">
          <BrandLogo />
          <p className="text-ink-muted max-w-sm">{businessConfig.shortDescription}</p>
          <ul className="space-y-2.5">
            <li>
              <a href={`tel:${businessConfig.phone}`} className="inline-flex items-center gap-2.5 min-h-11 sm:min-h-0 text-ink hover:text-brand-primary">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="font-semibold">{businessConfig.displayPhone}</span>
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl(whatsappMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-11 sm:min-h-0 text-ink hover:text-whatsapp"
              >
                <MessageCircle className="w-4 h-4 text-whatsapp shrink-0" />
                <span>WhatsApp {businessConfig.displayWhatsapp}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-ink-muted">
              <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>{businessConfig.fullAddress}</span>
            </li>
            <li className="flex items-start gap-2.5 text-ink-muted">
              <Clock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>
                {businessConfig.businessHours.days}: {businessConfig.businessHours.timing}
              </span>
            </li>
          </ul>
        </div>

        {/* Link groups */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-ink mb-2 sm:mb-3">{group.title}</h2>
              <ul className="space-y-0.5 sm:space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="inline-flex items-center min-h-11 sm:min-h-0 text-ink-muted hover:text-brand-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="container-page py-4 text-xs text-ink-muted flex flex-col sm:flex-row gap-1 sm:justify-between">
          <p>
            © {new Date().getFullYear()} {businessConfig.name}, {businessConfig.city}
          </p>
          <p>Prices shown in INR. Final availability confirmed on enquiry.</p>
        </div>
      </div>
    </footer>
  );
};
