import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Users, 
  Wrench, 
  CheckCircle2, 
  MessageCircle,
  Phone,
  Info
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-slate-700">About Us</span>
      </div>

      {/* Main Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Droplets className="w-3.5 h-3.5 text-sky-600" />
            <span>Local Water Purification Business</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
            About {businessConfig.name}
          </h1>

          <p className="text-base text-slate-700 leading-relaxed">
            {businessConfig.name} is a dedicated RO water purifier sales, spare parts, and service provider based in <strong>Prayagraj (Allahabad), Uttar Pradesh</strong>.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed">
            We focus on providing dependable drinking water purification solutions for households, apartments, offices, and commercial establishments. Whether you need a new domestic RO system with mineral balance, an annual maintenance contract, genuine replacement filters, or urgent breakdown repair, our team is committed to prompt local service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-800">
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Prayagraj Doorstep Service</span>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Domestic & Commercial Units</span>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Quality Compatible Spare Parts</span>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Transparent Pricing & Estimates</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 sm:aspect-square bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80"
              alt="Ajit Aqua Appliances water purification solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Principles (No fake claims) */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Sora']">
            Our Business Approach
          </h2>
          <p className="text-xs sm:text-sm text-slate-700">
            Guided by practical service standards, honesty in technical assessment, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Sora']">
              Right Technology for Local Water
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Groundwater across Prayagraj varies in salinity and hardness. We recommend purifier models and membrane capacities that match your actual water source rather than pushing unnecessary features.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Sora']">
              Clear Diagnosis & Honest Service
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Before replacing any component, our technicians test pump pressure, water TDS, and electrical current, providing an upfront cost estimate so you stay in control.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Sora']">
              Long-Term Customer Care
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Clean water requires ongoing attention. We support customers after purchase with routine filter replacements, preventive reminders, and annual maintenance plans.
            </p>
          </div>
        </div>
      </div>

      {/* Editable Business Profile Placeholder Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
          <Info className="w-4 h-4 text-sky-600" />
          <span>Client Profile Placeholder</span>
        </div>
        <h3 className="text-base font-bold text-slate-900 font-['Sora']">
          Business Story & Milestone Details
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Ajit Aqua Appliances can incorporate specific founder background, business establishment milestones, and store photographs here when confirmed by the business owner.
        </p>
      </div>

      {/* Direct Contact CTA */}
      <div className="bg-sky-600 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-sky-600/20">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-2xl font-bold font-['Sora']">
            Have questions or need water advice?
          </h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md">
            Speak directly with our technician team in Prayagraj for honest guidance on purifiers and spare parts.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={buildWhatsAppUrl(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white text-sky-950 font-bold text-xs hover:bg-sky-50 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${businessConfig.phone}`}
            className="px-5 py-3 rounded-xl bg-sky-700 text-white font-bold text-xs hover:bg-sky-800 transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
