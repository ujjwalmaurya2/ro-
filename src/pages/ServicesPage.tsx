import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  PlusCircle, 
  ArrowRightLeft, 
  Gauge, 
  CalendarCheck, 
  MessageCircle, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { servicesData } from '../data/services';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const ServicesPage: React.FC = () => {
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedServices(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'PlusCircle': return <PlusCircle className="w-5 h-5" />;
      case 'ArrowRightLeft': return <ArrowRightLeft className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      default: return <CalendarCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-700 uppercase tracking-wider">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500">Services</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
              RO Repair & Maintenance
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-0.5">
              Doorstep RO servicing, filter replacement, breakdown troubleshooting, and installation in Prayagraj.
            </p>
          </div>
          {/* Demo Notice */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-[11px] text-sky-800 self-start sm:self-auto shrink-0">
            <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>Sample estimate • Final cost confirmed on-site</span>
          </div>
        </div>
      </div>

      {/* Services Grid: Compact Mobile-First Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {servicesData.map((service) => {
          const serviceWhatsAppUrl = buildWhatsAppUrl(
            whatsappMessages.service({ serviceType: service.name })
          );
          const isExpanded = !!expandedServices[service.id];

          return (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200/90 hover:border-sky-300 p-3 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header row: Icon, Name & Badge */}
                <div className="flex items-start justify-between gap-2.5 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-['Sora']">
                        {service.name}
                      </h3>
                      <span className="text-[10px] text-slate-500 font-medium">Doorstep Service in Prayagraj</span>
                    </div>
                  </div>
                  {service.badge && (
                    <span className="px-2 py-0.5 bg-sky-100 text-sky-800 text-[9px] sm:text-[10px] font-bold rounded-full shrink-0">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Short Summary */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2">
                  {service.longDescription}
                </p>

                {/* Collapsible Details Toggle */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 hover:text-sky-800 hover:underline mb-2"
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? 'Hide Details' : 'View Inclusions & Symptoms'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="space-y-2.5 pt-2 pb-1 border-t border-slate-100 text-xs animate-fade-in">
                    {/* Common Problems */}
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-500" />
                        Common Symptoms:
                      </span>
                      <ul className="text-[11px] text-slate-600 space-y-1">
                        {service.commonProblems.map((prob, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                            <span>{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inclusions */}
                    <div className="space-y-1 text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-800 block">Service Includes:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {service.whatsIncluded.map((inc, idx) => (
                          <div key={idx} className="flex items-start gap-1">
                            <CheckCircle2 className="w-3 h-3 text-sky-600 mt-0.5 shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Estimate and CTAs */}
              <div className="pt-2.5 mt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-[11px] text-slate-500">Estimated Rate:</span>
                  <span className="font-black text-slate-900 font-['Sora'] text-xs sm:text-sm bg-sky-50 px-2 py-0.5 rounded text-sky-800">
                    {service.startingEstimate}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to={`/book-service?service=${encodeURIComponent(service.name)}`}
                    className="flex items-center justify-center gap-1 h-9 px-2.5 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 active:scale-95 transition-all text-center shadow-2xs"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </Link>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 h-9 px-2.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-center active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support / General Consultation Banner */}
      <div className="bg-gradient-to-r from-sky-700 to-sky-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold font-['Sora']">
            Experiencing water leakage or purifier breakdown?
          </h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-lg">
            Connect directly with Ajit Aqua Appliances on WhatsApp or call our team for local service support in Prayagraj.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            to="/book-service"
            className="px-5 py-3 rounded-xl bg-white text-sky-950 font-bold text-xs hover:bg-sky-50 transition-colors"
          >
            Fill Booking Form
          </Link>
          <a
            href={buildWhatsAppUrl(whatsappMessages.service())}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
