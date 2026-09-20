import React from 'react';
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
  Info
} from 'lucide-react';
import { servicesData } from '../data/services';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const ServicesPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'PlusCircle': return <PlusCircle className="w-6 h-6" />;
      case 'ArrowRightLeft': return <ArrowRightLeft className="w-6 h-6" />;
      case 'Gauge': return <Gauge className="w-6 h-6" />;
      default: return <CalendarCheck className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-700">Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
          RO Repair & Maintenance Services in Prayagraj
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
          From diagnosing low water flow and changing choked filter candles to complete annual maintenance and home shifting, we provide comprehensive doorstep RO services across Prayagraj.
        </p>

        {/* Demo Notice */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-800">
          <Info className="w-4 h-4 text-sky-600 shrink-0" />
          <span>Starting prices are sample demo estimates. Final cost is estimated on inspection according to machine parts and requirements.</span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service) => {
          const serviceWhatsAppUrl = buildWhatsAppUrl(
            whatsappMessages.service({ serviceType: service.name })
          );

          return (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-sky-300 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-sky-500/5 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-900 font-['Sora']">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>

                {/* Common Problems Checklist */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    Common Symptoms:
                  </span>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    {service.commonProblems.map((prob, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inclusions */}
                <div className="space-y-2 text-xs text-slate-700">
                  <span className="font-semibold text-slate-800 block">Service Includes:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.whatsIncluded.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate and CTAs */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-700">
                  <span className="font-medium">Estimated Charge:</span>
                  <span className="font-bold text-slate-900 bg-sky-50 px-2.5 py-1 rounded-md text-sky-800">
                    {service.startingEstimate}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <Link
                    to={`/book-service?service=${encodeURIComponent(service.name)}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm shadow-sky-600/20 transition-all text-center"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Book Service Online</span>
                  </Link>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Booking</span>
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
