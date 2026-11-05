import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  MessageCircle,
  ShieldCheck,
  Droplets,
  Filter,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Layers,
  MapPin,
  Phone,
  BadgeIndianRupee,
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { productsData } from '../data/products';
import { sparePartsData } from '../data/spareParts';
import { SERVICE_VISIT_CHARGE, servicesData } from '../data/services';
import { amcPlan } from '../data/amcPlans';
import { faqsData } from '../data/faqs';
import { brandsData, brandsDisclaimer } from '../data/brands';
import { formatINR } from '../utils/formatters';
import { ProductCard } from '../components/common/ProductCard';
import { SparePartCard } from '../components/common/SparePartCard';
import { FindTheRightRO } from '../components/home/FindTheRightRO';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

const visitCharge = formatINR(SERVICE_VISIT_CHARGE);

const QUICK_ACTIONS = [
  { label: 'RO Purifiers', to: '/products', icon: Droplets, tone: 'bg-sky-50 text-sky-700' },
  { label: 'Book Repair', to: '/book-service', icon: Wrench, tone: 'bg-orange-50 text-orange-600' },
  { label: 'Spare Parts', to: '/parts', icon: Filter, tone: 'bg-violet-50 text-violet-600' },
  { label: 'AMC Plans', to: '/amc', icon: ShieldCheck, tone: 'bg-emerald-50 text-emerald-700' },
];

const HOME_SERVICE_IDS = ['ro-repair', 'routine-servicing', 'filter-replacement', 'installation'];
const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'ro-repair': Wrench,
  'routine-servicing': Sparkles,
  'filter-replacement': Layers,
  installation: Droplets,
};

const SectionHeader: React.FC<{ eyebrow?: string; title: string; sub?: string; action?: { to: string; label: string } }> = ({
  eyebrow,
  title,
  sub,
  action,
}) => (
  <div className="flex items-end justify-between gap-4 mb-4 sm:mb-6">
    <div className="min-w-0 space-y-1">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
    {action && (
      <Link to={action.to} className="shrink-0 inline-flex items-center gap-1 min-h-11 text-sm font-semibold text-brand-primary hover:text-brand-deep">
        {action.label}
        <ArrowRight className="w-4 h-4" />
      </Link>
    )}
  </div>
);

export const HomePage: React.FC = () => {
  const [brand, setBrand] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>(faqsData[0]?.id ?? null);

  const brands = useMemo(() => [...new Set(productsData.map((p) => p.brand))], []);
  const heroProduct = productsData.find((p) => p.isFeatured) ?? productsData[0];

  const shownProducts = useMemo(() => {
    const list = brand === 'all' ? productsData.filter((p) => p.isFeatured) : productsData.filter((p) => p.brand === brand);
    return list.slice(0, 8);
  }, [brand]);

  const homeServices = servicesData.filter((s) => HOME_SERVICE_IDS.includes(s.id));

  return (
    <div className="space-y-8 sm:space-y-14 pb-4">
      {/* ── MOBILE: quick actions + compact promo ─────────────────────── */}
      <div className="md:hidden">
        <nav aria-label="Quick actions" className="grid grid-cols-4 gap-2 px-4 py-3">
          {QUICK_ACTIONS.map(({ label, to, icon: Icon, tone }) => (
            <Link key={label} to={to} className="flex flex-col items-center gap-1.5 min-h-11 py-1 rounded-xl active:scale-95 transition-transform">
              <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tone}`}>
                <Icon className="w-6 h-6" />
              </span>
              <span className="text-[11px] font-semibold text-slate-700 text-center leading-tight">{label}</span>
            </Link>
          ))}
        </nav>

        <section aria-label="Ajit Aqua Appliances" className="px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-aqua text-white px-4 py-3.5 min-h-[150px] flex flex-col justify-between">
            <div aria-hidden className="absolute -right-10 -top-12 w-44 h-44 rounded-full bg-white/10" />
            <div aria-hidden className="absolute right-6 -bottom-16 w-32 h-32 rounded-full bg-white/10" />
            {heroProduct && (
              <img
                src={heroProduct.image}
                alt=""
                aria-hidden
                width={64}
                height={80}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-16 h-20 object-contain drop-shadow-xl max-[374px]:hidden"
              />
            )}
            <div className="relative space-y-1 pr-16 max-[374px]:pr-0">
              <span className="inline-block text-[10px] font-bold tracking-wider bg-white/15 rounded-full px-2 py-0.5">
                RO SALES &amp; SERVICE IN PRAYAGRAJ
              </span>
              <h1 className="text-lg font-bold leading-tight">Pure Water. Better Living.</h1>
              <p className="text-xs leading-snug text-sky-50/90">RO Sales, Genuine Spares &amp; Doorstep Repair</p>
            </div>
            <div className="relative flex gap-2 pt-2.5">
              <Link to="/products" className="btn btn-sm min-h-10 bg-white text-brand-deep hover:bg-sky-50">
                Shop ROs
              </Link>
              <Link to="/book-service" className="btn btn-sm min-h-10 bg-brand-navy/40 text-white border border-white/30 hover:bg-brand-navy/60">
                Book Repair · {visitCharge}
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── DESKTOP / TABLET HERO ─────────────────────────────────────── */}
      <section className="hidden md:block bg-gradient-to-b from-brand-subtle to-white border-b border-sky-100/70">
        <div className="container-page grid grid-cols-12 gap-8 items-center py-7 lg:py-8">
          <div className="col-span-7 space-y-5">
            <p className="eyebrow inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              RO Sales &amp; Service in Prayagraj
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
              Pure Water. <span className="text-brand-primary">Better Living.</span>
            </h1>
            <p className="text-base lg:text-lg text-ink-muted max-w-xl">
              Branded RO purifiers, genuine spare parts and doorstep repair &amp; maintenance from your local Prayagraj RO store.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link to="/products" className="btn btn-primary px-6">
                Shop RO Purifiers
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/book-service" className="btn btn-secondary px-6">
                <Wrench className="w-4 h-4 text-brand-primary" />
                Book Repair · {visitCharge} visit
              </Link>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary" />
                <a href={`tel:${businessConfig.phone}`} className="font-semibold text-ink hover:text-brand-primary">
                  {businessConfig.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-whatsapp" />
                <a href={buildWhatsAppUrl(whatsappMessages.general())} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-whatsapp">
                  WhatsApp enquiry
                </a>
              </li>
            </ul>
          </div>

          {heroProduct && (
            <div className="col-span-5 w-full max-w-md justify-self-end">
              <Link
                to={`/products/${heroProduct.id}`}
                className="group block relative card overflow-hidden bg-gradient-to-b from-white to-brand-subtle shadow-[0_24px_48px_-24px_rgba(15,61,86,0.35)]"
              >
                <div aria-hidden className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-sky-100/70" />
                <img
                  src={heroProduct.image}
                  alt={heroProduct.alt || heroProduct.name}
                  width={420}
                  height={420}
                  fetchPriority="high"
                  className="relative w-full aspect-[5/4] object-contain p-6 pb-20 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 backdrop-blur px-4 py-3 border border-brand-border">
                  <div className="min-w-0">
                    <p className="text-xs text-ink-muted">Featured · {heroProduct.brand}</p>
                    <p className="font-semibold text-ink truncate">{heroProduct.name}</p>
                  </div>
                  <span className="shrink-0 text-lg font-bold text-ink">{heroProduct.priceDisplay || formatINR(heroProduct.price)}</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── POPULAR RO PURIFIERS ─────────────────────────────────────── */}
      <section id="popular-ro" className="container-page">
        <SectionHeader
          title="Popular RO Purifiers"
          sub="Explore trusted brands for your home and office."
          action={{ to: '/products', label: 'View all' }}
        />

        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 mb-4" role="group" aria-label="Filter by brand">
          {['all', ...brands].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBrand(b)}
              aria-pressed={brand === b}
              className={`chip ${brand === b ? 'chip-on' : 'chip-off'}`}
            >
              {b === 'all' ? 'Featured' : b}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {shownProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── SPARE PARTS ─────────────────────────────────────────────── */}
      <section className="container-page">
        <SectionHeader
          eyebrow="Genuine spares"
          title="RO Spare Parts"
          sub="Filters, membranes and components at listed prices."
          action={{ to: '/parts', label: 'All parts' }}
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {sparePartsData.slice(0, 6).map((part) => (
            <SparePartCard key={part.id} part={part} />
          ))}
        </div>
      </section>

      {/* ── SERVICES & AMC ──────────────────────────────────────────── */}
      <section className="bg-brand-neutral border-y border-brand-border py-10 sm:py-14">
        <div className="container-page">
          <SectionHeader
            eyebrow="Doorstep service"
            title="RO Repair & Maintenance"
            sub={`Service & Visit Charge ${visitCharge}. Parts and repairs, if needed, are quoted separately.`}
            action={{ to: '/services', label: 'All services' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {homeServices.map((service) => {
              const Icon = SERVICE_ICONS[service.id] ?? Wrench;
              return (
                <Link
                  key={service.id}
                  to={`/book-service?service=${encodeURIComponent(service.name)}`}
                  className="card card-hover p-4 flex sm:flex-col gap-3 group"
                >
                  <span className="w-11 h-11 rounded-xl bg-brand-light/70 text-brand-deep flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="min-w-0 flex-1 flex flex-col">
                    <span className="text-sm font-semibold text-ink group-hover:text-brand-primary">{service.name}</span>
                    <span className="text-xs text-ink-muted line-clamp-2 mt-0.5">{service.shortDescription}</span>
                    <span className="mt-auto pt-2 text-xs font-semibold text-brand-deep">{service.startingEstimate}</span>
                  </span>
                </Link>
              );
            })}

            <div className="card p-4 flex sm:flex-col gap-3 border-sky-200 bg-gradient-to-br from-white to-brand-subtle">
              <span className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div className="min-w-0 flex-1 flex flex-col">
                <span className="text-sm font-semibold text-ink">{amcPlan.name}</span>
                <span className="text-2xl font-bold text-ink mt-0.5">{formatINR(amcPlan.price)}</span>
                <span className="text-xs text-ink-muted mt-1">{amcPlan.note}</span>
                <div className="flex gap-2 pt-3 mt-auto">
                  <Link to="/amc" className="btn btn-sm btn-soft">Details</Link>
                  <a href={buildWhatsAppUrl(whatsappMessages.amc())} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-whatsapp">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT FINDER ──────────────────────────────────────────── */}
      <FindTheRightRO />

      {/* ── LOCAL TRUST INFO (verified business details only) ──────── */}
      <section className="container-page">
        <div className="card p-5 sm:p-8 grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 space-y-2">
            <p className="eyebrow">Local &amp; reachable</p>
            <h2 className="section-title">Your RO store in Prayagraj</h2>
            <p className="section-sub">Call or WhatsApp us for product advice, spare parts and service visits.</p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <li>
              <a href={`tel:${businessConfig.phone}`} className="card card-hover flex items-center gap-3 p-3.5 h-full">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="min-w-0">
                  <span className="block text-xs text-ink-muted">Call</span>
                  <span className="block text-sm font-semibold text-ink">{businessConfig.displayPhone}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={buildWhatsAppUrl(whatsappMessages.general())} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-3 p-3.5 h-full">
                <MessageCircle className="w-5 h-5 text-whatsapp shrink-0" />
                <span className="min-w-0">
                  <span className="block text-xs text-ink-muted">WhatsApp</span>
                  <span className="block text-sm font-semibold text-ink">{businessConfig.displayWhatsapp}</span>
                </span>
              </a>
            </li>
            <li>
              <Link to="/book-service" className="card card-hover flex items-center gap-3 p-3.5 h-full">
                <BadgeIndianRupee className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="min-w-0">
                  <span className="block text-xs text-ink-muted">Service &amp; Visit</span>
                  <span className="block text-sm font-semibold text-ink">{visitCharge} · parts extra</span>
                </span>
              </Link>
            </li>
          </ul>
          <div className="lg:col-span-12 border-t border-brand-border pt-4">
            <p className="text-xs font-semibold text-ink-muted mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-primary" />
              Service areas in Prayagraj
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {businessConfig.serviceAreas.map((area) => (
                <li key={area.id} className="px-2.5 py-1 rounded-lg bg-brand-neutral border border-brand-border text-xs text-slate-700">
                  {area.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── BRANDS WE SERVICE ───────────────────────────────────────── */}
      <section className="container-page">
        <SectionHeader title="Brands we service" sub="Repairs and replacement filters for popular purifier brands." />
        <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {brandsData.map((b) => (
            <li key={b.id} className="card px-3 py-3 text-center">
              <span className="block text-sm font-semibold text-ink">{b.name}</span>
              <span className="block text-[11px] text-ink-muted mt-0.5">{b.categoryNote}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink-muted mt-3">{brandsDisclaimer}</p>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Frequently asked questions" />
        <div className="space-y-2.5">
          {faqsData.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div key={faq.id} className="card overflow-hidden">
                <h3>
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full min-h-12 px-4 py-3 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-ink hover:text-brand-primary"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-${faq.id}`} className="px-4 pb-4 text-sm text-slate-600 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="container-page">
        <div className="rounded-2xl bg-brand-navy text-white p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-bold">Need an RO or an RO service?</h2>
            <p className="text-sm text-sky-100/80">Shop purifiers, book a technician visit, or message us on WhatsApp.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link to="/products" className="btn bg-white text-brand-navy hover:bg-sky-50">Shop Products</Link>
            <Link to="/book-service" className="btn btn-primary">
              <Wrench className="w-4 h-4" />
              Book Service
            </Link>
            <a href={buildWhatsAppUrl(whatsappMessages.general())} target="_blank" rel="noopener noreferrer" className="btn bg-emerald-600 text-white hover:bg-emerald-700">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
