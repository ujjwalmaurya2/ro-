import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, X, Wrench, ArrowRight, MessageCircle } from 'lucide-react';
import { productsData } from '../../data/products';
import { sparePartsData } from '../../data/spareParts';
import { servicesData } from '../../data/services';
import { formatINR } from '../../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

const matches = (q: string, ...fields: (string | undefined)[]) =>
  fields.some((f) => f?.toLowerCase().includes(q));

interface SiteSearchProps {
  className?: string;
}

/** Header search across purifiers, spare parts and services (all from the central data files). */
export const SiteSearch: React.FC<SiteSearchProps> = ({ className = '' }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const listId = useId();

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return { products: [], parts: [], services: [] };
    return {
      products: productsData.filter((p) => matches(q, p.name, p.brand, p.model, p.technology, p.category)).slice(0, 5),
      parts: sparePartsData.filter((p) => matches(q, p.name, p.categoryLabel)).slice(0, 3),
      services: servicesData.filter((s) => matches(q, s.name, s.shortDescription)).slice(0, 3),
    };
  }, [q]);
  const total = results.products.length + results.parts.length + results.services.length;

  // Close the panel on route change and on outside click.
  const routeKey = pathname + search;
  const [prevRoute, setPrevRoute] = useState(routeKey);
  if (routeKey !== prevRoute) {
    setPrevRoute(routeKey);
    setOpen(false);
  }
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);

  const submit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!q) return;
    const toParts = results.products.length === 0 && results.parts.length > 0;
    navigate(`${toParts ? '/parts' : '/products'}?q=${encodeURIComponent(query.trim())}`);
    inputRef.current?.blur();
  };

  const clear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const showPanel = open && q.length > 0;

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <form role="search" onSubmit={submit}>
        <label htmlFor={`${listId}-input`} className="sr-only">
          Search RO purifiers, spare parts and services
        </label>
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden />
        <input
          ref={inputRef}
          id={`${listId}-input`}
          type="search"
          inputMode="search"
          autoComplete="off"
          enterKeyHint="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setOpen(false);
              inputRef.current?.blur();
            }
          }}
          placeholder="Search RO purifiers, spare parts, service..."
          aria-controls={listId}
          aria-expanded={showPanel}
          className="w-full h-10 pl-10 pr-10 rounded-xl bg-slate-100/80 border border-transparent text-sm text-ink placeholder:text-slate-400 transition-colors focus:bg-white focus:border-sky-300 focus:ring-2 focus:ring-sky-100 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={clear}
            className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      <p className="sr-only" aria-live="polite">
        {showPanel ? `${total} result${total === 1 ? '' : 's'}` : ''}
      </p>

      {showPanel && (
        <div
          id={listId}
          className="absolute left-0 right-0 top-full mt-2 z-50 card shadow-[0_16px_40px_-12px_rgba(15,61,86,0.25)] max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain animate-fade-in"
        >
          {total === 0 ? (
            <div className="p-5 text-center space-y-2">
              <p className="text-sm font-semibold text-ink">No matches for “{query.trim()}”</p>
              <p className="text-xs text-ink-muted">Try a brand (KENT, Aquaguard), a part (membrane, filter) or “repair”.</p>
              <a
                href={buildWhatsAppUrl(whatsappMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-whatsapp mt-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Ask us on WhatsApp
              </a>
            </div>
          ) : (
            <div className="py-1.5">
              {results.products.length > 0 && (
                <ResultGroup title="RO Purifiers">
                  {results.products.map((p) => (
                    <ResultLink key={p.id} to={`/products/${p.id}`} image={p.image} title={p.name} meta={p.priceDisplay || formatINR(p.price)} />
                  ))}
                </ResultGroup>
              )}
              {results.parts.length > 0 && (
                <ResultGroup title="Spare Parts">
                  {results.parts.map((p) => (
                    <ResultLink key={p.id} to={`/parts?q=${encodeURIComponent(p.name)}`} image={p.image} title={p.name} meta={formatINR(p.price)} />
                  ))}
                </ResultGroup>
              )}
              {results.services.length > 0 && (
                <ResultGroup title="Services">
                  {results.services.map((s) => (
                    <ResultLink key={s.id} to="/services" title={s.name} meta={s.startingEstimate} />
                  ))}
                </ResultGroup>
              )}
              <button
                type="button"
                onClick={submit}
                className="w-full flex items-center justify-between gap-2 px-4 py-3 mt-1 border-t border-brand-border text-sm font-semibold text-brand-deep hover:bg-brand-subtle"
              >
                <span className="truncate">See all results for “{query.trim()}”</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ResultGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-1">
    <p className="px-4 pt-1.5 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">{title}</p>
    <ul>{children}</ul>
  </div>
);

const ResultLink: React.FC<{ to: string; title: string; meta: string; image?: string }> = ({ to, title, meta, image }) => (
  <li>
    <Link to={to} className="flex items-center gap-3 px-4 py-2 min-h-11 hover:bg-brand-subtle focus-visible:bg-brand-subtle">
      <span className="w-9 h-9 rounded-lg bg-brand-neutral border border-brand-border flex items-center justify-center shrink-0 overflow-hidden">
        {image ? <img src={image} alt="" className="w-full h-full object-contain p-0.5" loading="lazy" /> : <Wrench className="w-4 h-4 text-brand-primary" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-ink truncate">{title}</span>
        <span className="block text-xs text-ink-muted truncate">{meta}</span>
      </span>
    </Link>
  </li>
);
