import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  ShoppingCart, 
  MessageCircle, 
  ShieldCheck, 
  Droplets, 
  Layers, 
  CalendarCheck, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Sparkles, 
  PlusCircle, 
  MapPin, 
  Cpu
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { productsData } from '../data/products';
import { servicesData } from '../data/services';
import { faqsData } from '../data/faqs';
import { reviewsData } from '../data/reviews';
import { brandsData, brandsDisclaimer } from '../data/brands';
import { ProductCard } from '../components/common/ProductCard';
import { FindTheRightRO } from '../components/home/FindTheRightRO';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  const [productCategory, setProductCategory] = useState<'all' | 'domestic' | 'alkaline' | 'commercial'>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>(faqsData[0].id);

  const filteredProducts = productCategory === 'all' 
    ? productsData.slice(0, 4) 
    : productsData.filter(p => p.category === productCategory);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-sky-50/40 to-white pt-8 pb-16 lg:py-20 border-b border-sky-100">
        {/* Subtle water-inspired background accents */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headings & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200">
                <Droplets className="w-3.5 h-3.5 text-sky-600" />
                <span>Prayagraj RO Purifiers & Service Centre</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-['Sora']">
                Pure Water. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-800">
                  Better Living.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
                Ajit Aqua Appliances provides premium <strong>RO Water Purifiers</strong>, genuine spare parts, and dependable doorstep <strong>RO repair, maintenance, and AMC services</strong> in Prayagraj.
              </p>

              {/* Value Pills */}
              <div className="flex flex-wrap gap-2.5 pt-1 text-xs text-slate-700 font-medium">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  Domestic & Commercial RO
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  Doorstep Repair & Servicing
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  Genuine Spare Parts
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-600/25 transition-all text-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Shop RO Purifiers</span>
                </Link>

                <Link
                  to="/book-service"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all text-sm"
                >
                  <Wrench className="w-4 h-4 text-sky-600" />
                  <span>Book a Service</span>
                </Link>

                <a
                  href={buildWhatsAppUrl(whatsappMessages.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Local Trust Note */}
              <div className="pt-2 text-xs text-slate-700 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Serving all localities across Prayagraj (Civil Lines, Teliyarganj, Katra & nearby)</span>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Visual Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/10 border-4 border-white bg-gradient-to-b from-sky-100/50 to-white aspect-4/3 sm:aspect-square flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80"
                    alt="Premium RO Water Purifier by Ajit Aqua Appliances"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                  {/* Floating Highlight Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-sky-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block">
                        Featured Technology
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 font-['Sora']">
                        Copper + Alkaline RO System
                      </h4>
                      <p className="text-xs text-slate-700">Multi-stage filtration with mineral balance</p>
                    </div>
                    <Link
                      to="/products"
                      className="p-2 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors shrink-0 ml-2"
                      aria-label="Explore purifier"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Floating Service Badge */}
                <div className="absolute -top-4 -left-4 bg-white px-3.5 py-2 rounded-2xl shadow-md border border-sky-100 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs">
                    RO
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-900 block">Sales & Service</span>
                    <span className="text-[10px] text-slate-700">Prayagraj Support</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / QUICK SERVICE STRIP (Safe, un-fabricated positioning) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            <div className="flex items-center gap-3 pt-3 md:pt-0 first:pt-0">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <Droplets className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">RO Purifiers</h4>
                <p className="text-[11px] text-slate-700">Home & commercial</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">RO Repair</h4>
                <p className="text-[11px] text-slate-700">All popular brands</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <PlusCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Installation</h4>
                <p className="text-[11px] text-slate-700">Wall mount & shifting</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Spare Parts</h4>
                <p className="text-[11px] text-slate-700">Filters & membranes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">AMC Support</h4>
                <p className="text-[11px] text-slate-700">Annual maintenance</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER — "Everything Your RO Needs" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider">
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
            Everything Your RO Needs
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
            From new water purifiers to expert repair and periodic maintenance, we cover every aspect of clean drinking water in Prayagraj.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Sora']">RO Water Purifiers</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Modern domestic, alkaline, and commercial water purifiers designed to handle municipal, borewell, and high-TDS water supplies.
              </p>
            </div>
            <Link to="/products" className="pt-5 flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-800">
              <span>Browse Showroom</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Sora']">RO Repair & Service</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Troubleshooting pump vibration, electrical faults, continuous drain water, low flow rate, and bad taste across major purifier models.
              </p>
            </div>
            <Link to="/services" className="pt-5 flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-800">
              <span>View Service Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Sora']">Spare Parts & Filters</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Membranes, booster pumps, SMPS adapters, solenoid valves, pre-filters, carbon blocks, food-grade pipes, and faucet fixtures.
              </p>
            </div>
            <Link to="/parts" className="pt-5 flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-800">
              <span>Explore Spare Parts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 4 */}
          <div className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Sora']">Installation & Relocation</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Secure wall mounting, brass inlet connections, leakage tests, and safe uninstallation for home shifting across Prayagraj.
              </p>
            </div>
            <Link to="/book-service" className="pt-5 flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-800">
              <span>Book Installation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 5 */}
          <div className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Sora']">Filter & Membrane Replacement</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Periodic replacement of sediment cartridges and high-rejection RO membranes with on-site pre and post TDS testing.
              </p>
            </div>
            <Link to="/services" className="pt-5 flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-800">
              <span>Learn About Filters</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 6 */}
          <div className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Sora']">Annual Maintenance (AMC)</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Year-round maintenance packages featuring scheduled periodic service visits, priority breakdown response, and filter support.
              </p>
            </div>
            <Link to="/amc" className="pt-5 flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-800">
              <span>Explore AMC Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NEW INTERACTIVE CONVERSION FEATURE: "Find the Right RO" */}
      <FindTheRightRO />

      {/* 5. FEATURED PRODUCTS (Digital Showroom Preview) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <span>Digital Showroom</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
              Featured Water Purifiers
            </h2>
            <p className="text-sm text-slate-700 max-w-lg">
              Explore domestic, alkaline, and commercial RO purifiers. All units are demo showroom configurations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {(['all', 'domestic', 'alkaline', 'commercial'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setProductCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                  productCategory === cat
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Models' : `${cat} RO`}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center pt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
          >
            <span>View All Water Purifiers & Commercial Plants</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
            Purifier Technologies & Spare Categories
          </h2>
          <p className="text-sm text-slate-700 max-w-lg mx-auto">
            Choose by purification technology or find the exact replacement spare part for your machine.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "RO Systems", desc: "For High TDS Water", link: "/products", icon: Droplets },
            { name: "RO + UV + UF", desc: "Multi-Barrier Pure", link: "/products", icon: ShieldCheck },
            { name: "Alkaline RO", desc: "Mineral & pH Balance", link: "/products?category=alkaline", icon: Sparkles },
            { name: "Commercial RO", desc: "25 to 50+ LPH", link: "/products?category=commercial", icon: Layers },
            { name: "RO Membranes", desc: "75/80/100 GPD", link: "/parts", icon: Cpu },
            { name: "Booster Pumps", desc: "24V DC Heavy Duty", link: "/parts", icon: Wrench },
          ].map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.link}
                className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all text-center flex flex-col items-center justify-center space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[11px] text-slate-700">{cat.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 7. RO SERVICES SECTION (Overview & Direct Booking) */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                <span>Doorstep RO Assistance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
                Professional RO Services in Prayagraj
              </h2>
              <p className="text-sm text-slate-700 max-w-xl">
                Careful diagnostics, systematic multi-point inspection, and genuine replacement parts for all domestic and commercial RO machines.
              </p>
            </div>

            <Link
              to="/book-service"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all shrink-0"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Doorstep Service</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">
                      {service.badge || "Service"}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-['Sora']">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-700 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Common signs:
                    </span>
                    <ul className="text-[11px] text-slate-700 space-y-1">
                      {service.commonProblems.slice(0, 2).map((prob, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                          <span className="line-clamp-1">{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">
                    {service.startingEstimate}
                  </span>
                  <Link
                    to="/book-service"
                    className="text-xs font-bold text-sky-700 hover:text-sky-800"
                  >
                    Book →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              to="/services"
              className="text-sm font-semibold text-sky-700 hover:text-sky-800 underline underline-offset-4"
            >
              View complete list of RO repair, maintenance & installation services →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. AMC SECTION HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 bg-sky-500/20 border border-sky-400/30 rounded-full text-xs font-bold uppercase tracking-wider text-sky-300 inline-block">
              Annual Maintenance Contracts
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Sora'] text-white">
              Worry-Free Pure Water With RO AMC Plans
            </h2>
            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
              Never miss a filter replacement again. Choose from Basic, Standard, and Comprehensive maintenance plans tailored for Prayagraj homes and offices.
            </p>

            <div className="flex flex-wrap gap-4 pt-3">
              <Link
                to="/amc"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sky-950 bg-white hover:bg-sky-50 shadow-md transition-all text-sm"
              >
                <span>Compare AMC Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={buildWhatsAppUrl(whatsappMessages.amc('Annual Maintenance'))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-sky-300/80 pt-2 italic">
              *Demo plan pricing starting from ₹1,499/year. Final coverage confirmed upon machine inspection.
            </p>
          </div>

          <div className="hidden lg:block absolute -right-10 -bottom-10 w-96 h-96 bg-sky-500/10 rounded-full blur-2xl" />
        </div>
      </section>

      {/* 9. BRANDS WE DEAL WITH / SERVICE SUPPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Sora']">
            Brands & System Types We Support
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto">
            We provide compatible servicing, troubleshooting, and replacement filters for popular water purifier designs in Prayagraj.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center items-center"
            >
              <span className="text-xs font-bold text-slate-800 font-['Sora']">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-700 mt-0.5">
                {brand.categoryNote}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-700 text-center mt-4 italic max-w-2xl mx-auto">
          {brandsDisclaimer}
        </p>
      </section>

      {/* 10. WHY AJIT AQUA APPLIANCES (Trust Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
            Why Choose Ajit Aqua Appliances?
          </h2>
          <p className="text-sm text-slate-700 max-w-lg mx-auto">
            Practical, local customer commitment for all your drinking water purification needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Sora']">Local Service Support</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Based in Prayagraj with quick doorstep dispatch for repair, service, and spare parts delivery across town.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Sora']">RO Repair & Maintenance</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Multi-stage reverse osmosis servicing, booster pump testing, and electrical component troubleshooting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Sora']">Spare Parts Availability</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Stocks standard-sized filters, 75/80/100 GPD membranes, 24V SMPS adapters, and genuine fittings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-base font-bold text-slate-900 font-['Sora']">Transparent Process</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Clear diagnosis, upfront estimates before repair, and direct communication on WhatsApp or phone.
            </p>
          </div>
        </div>
      </section>

      {/* 11. CUSTOMER REVIEWS (Explicitly Demo/Replaceable) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider">
            <span>Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
            Customer Reviews & Feedback
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 italic max-w-lg mx-auto">
            Demo review content will be replaced with verified customer feedback from Ajit Aqua Appliances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((slot) => (
            <div
              key={slot.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-[11px] font-semibold">
                  <span>{slot.category}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{slot.description}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-800">
                  {slot.slotTitle}
                </span>
                <span className="text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[10px]">
                  Verified Slot
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FAQ ACCORDION (Neutral, factual) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-700">
            Answers to common questions regarding RO purifiers, water quality, and maintenance.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 font-['Sora'] hover:text-sky-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 13. LOCAL SERVICE AREAS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-50/70 border border-sky-100 rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-sky-600" />
            <span>Prayagraj Service Areas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Sora']">
            Providing RO Sales & Doorstep Support Across Prayagraj
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto">
            Our technicians visit all major residential and commercial localities across Prayagraj for water testing, installation, repair, and filter replacement.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-3 max-w-3xl mx-auto">
            {businessConfig.serviceAreas.map((area) => (
              <span
                key={area.id}
                className="px-3 py-1.5 bg-white text-slate-800 rounded-xl text-xs font-semibold border border-slate-200 shadow-xs"
              >
                {area.name}
              </span>
            ))}
          </div>

          <div className="pt-3">
            <Link
              to="/book-service"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-sky-700 bg-white border border-sky-300 hover:bg-sky-50 shadow-xs transition-colors"
            >
              <span>Check Service Availability In Your Locality</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-xl shadow-sky-900/15">
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-['Sora']">
              Need an RO or RO Service?
            </h2>
            <p className="text-sm sm:text-base text-sky-100 font-normal">
              Explore our products or connect with Ajit Aqua Appliances for help with your RO requirements in Prayagraj.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sky-950 bg-white hover:bg-sky-50 shadow-md transition-all text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Shop Products</span>
            </Link>

            <Link
              to="/book-service"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-sky-900 hover:bg-sky-950 shadow-md transition-all text-sm"
            >
              <Wrench className="w-4 h-4 text-sky-300" />
              <span>Book Service</span>
            </Link>

            <a
              href={buildWhatsAppUrl(whatsappMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-sky-200">
            <span>Call us directly at </span>
            <a href={`tel:${businessConfig.phone}`} className="font-bold underline text-white">
              {businessConfig.displayPhone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
