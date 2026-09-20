import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { businessConfig } from '../../config/business';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white p-2 rounded-xl">
              <BrandLogo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your trusted local destination for domestic and commercial RO water purifiers, genuine spare parts, periodic filter maintenance, and expert RO repair services in Prayagraj.
            </p>

            {/* Quick Contact Badges */}
            <div className="pt-2 flex flex-col gap-2.5 text-sm">
              <a
                href={`tel:${businessConfig.phone}`}
                className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{businessConfig.displayPhone}</span>
              </a>

              <a
                href={buildWhatsAppUrl(whatsappMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: {businessConfig.displayWhatsapp}</span>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs leading-relaxed">{businessConfig.fullAddress}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Purifiers & Spares */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-['Sora'] mb-4">
              Products & Spares
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products" className="hover:text-sky-400 transition-colors">
                  Domestic RO Purifiers
                </Link>
              </li>
              <li>
                <Link to="/products?category=alkaline" className="hover:text-sky-400 transition-colors">
                  Alkaline & Mineral RO
                </Link>
              </li>
              <li>
                <Link to="/products?category=commercial" className="hover:text-sky-400 transition-colors">
                  Commercial RO Plants
                </Link>
              </li>
              <li>
                <Link to="/parts" className="hover:text-sky-400 transition-colors">
                  RO Membranes (75/80 GPD)
                </Link>
              </li>
              <li>
                <Link to="/parts" className="hover:text-sky-400 transition-colors">
                  Booster Pumps & SMPS
                </Link>
              </li>
              <li>
                <Link to="/parts" className="hover:text-sky-400 transition-colors">
                  Sediment & Carbon Filters
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & AMC */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-['Sora'] mb-4">
              Services & Plans
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  RO Repair & Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  Routine RO Servicing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  Filter & Membrane Change
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  RO Installation & Shifting
                </Link>
              </li>
              <li>
                <Link to="/amc" className="hover:text-sky-400 transition-colors">
                  Annual Maintenance (AMC)
                </Link>
              </li>
              <li>
                <Link to="/book-service" className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors">
                  <span>Book a Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Local Service Areas in Prayagraj */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-['Sora'] mb-4">
              Prayagraj Service Areas
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Doorstep support available across major Prayagraj localities:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {businessConfig.serviceAreas.slice(0, 10).map((area) => (
                <span
                  key={area.id}
                  className="px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700/60"
                >
                  {area.name}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-2 italic">
              *Locality list is centrally configurable
            </p>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <span>Website Demo for Ajit Aqua Appliances</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300">Contact</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-slate-300">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
