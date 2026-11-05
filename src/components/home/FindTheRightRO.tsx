import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, RotateCcw, ArrowRight, Check, Info } from 'lucide-react';
import { productsData, type Product } from '../../data/products';
import { formatINR } from '../../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { ProductCard } from '../common/ProductCard';

const WATER_SOURCES = ['Borewell', 'Municipal', 'Tanker', 'Not sure'];
const FAMILY_SIZES = ['1–3', '4–6', '7+'];
const BUDGETS = [
  { id: 'lt10', label: 'Under ₹10,000', test: (p: number) => p < 10000 },
  { id: '10to15', label: '₹10,000–15,000', test: (p: number) => p >= 10000 && p < 15000 },
  { id: '15plus', label: '₹15,000+', test: (p: number) => p >= 15000 },
];
const PREFERENCES = [
  { id: 'alkaline', label: 'Alkaline / mineral' },
  { id: 'domestic', label: 'Standard RO' },
];

/** Picks matching products from the catalogue; reasons only quote data that exists in the catalogue. */
function recommendProducts(products: Product[], budgetId: string, preference: string) {
  const budget = BUDGETS.find((b) => b.id === budgetId);
  return products
    .filter((p) => (!budget || budget.test(p.price)) && (!preference || p.category === preference))
    .sort((a, b) => Number(!!b.isFeatured) - Number(!!a.isFeatured) || a.price - b.price)
    .slice(0, 3);
}

const ChipGroup: React.FC<{ label: string; options: { id: string; label: string }[]; value: string; onChange: (v: string) => void }> = ({
  label,
  options,
  value,
  onChange,
}) => (
  <fieldset className="space-y-2">
    <legend className="text-sm font-semibold text-ink mb-2">{label}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={value === o.id}
          onClick={() => onChange(value === o.id ? '' : o.id)}
          className={`chip ${value === o.id ? 'chip-on' : 'chip-off'}`}
        >
          {value === o.id && <Check className="w-3.5 h-3.5" />}
          {o.label}
        </button>
      ))}
    </div>
  </fieldset>
);

const asOptions = (xs: string[]) => xs.map((x) => ({ id: x, label: x }));

export const FindTheRightRO: React.FC = () => {
  const [waterSource, setWaterSource] = useState('');
  const [familySize, setFamilySize] = useState('');
  const [budget, setBudget] = useState('');
  const [preference, setPreference] = useState('');

  const answered = !!(budget || preference);
  const results = useMemo(() => (answered ? recommendProducts(productsData, budget, preference) : []), [answered, budget, preference]);

  const budgetLabel = BUDGETS.find((b) => b.id === budget)?.label;
  const prefLabel = PREFERENCES.find((p) => p.id === preference)?.label;

  const reasonsFor = (p: Product) =>
    [
      budgetLabel && `${p.priceMax ? 'Starts at' : 'Priced at'} ${formatINR(p.price)} (budget: ${budgetLabel})`,
      prefLabel && p.technology && `${p.technology} purifier`,
      familySize && p.specifications?.storageCapacity && `Listed storage: ${p.specifications.storageCapacity}`,
    ].filter(Boolean) as string[];

  const whatsappUrl = buildWhatsAppUrl(
    whatsappMessages.recommendation({
      waterSource: waterSource || 'Not specified',
      familySize: familySize || 'Not specified',
      budget: budgetLabel || 'Not specified',
      preference: prefLabel || 'Not specified',
    })
  );

  const reset = () => {
    setWaterSource('');
    setFamilySize('');
    setBudget('');
    setPreference('');
  };

  return (
    <section id="find-the-right-ro" className="container-page">
      <div className="card p-5 sm:p-8 bg-gradient-to-br from-white to-brand-subtle">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div className="space-y-1">
            <p className="eyebrow inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Find the right RO
            </p>
            <h2 className="section-title">Not sure which purifier to pick?</h2>
            <p className="section-sub">Answer any of these — optional — and we’ll shortlist from our catalogue.</p>
          </div>
          <Link to="/products" className="inline-flex items-center gap-1 min-h-11 text-sm font-semibold text-brand-primary hover:text-brand-deep shrink-0">
            Skip &amp; browse all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <ChipGroup label="Water source" options={asOptions(WATER_SOURCES)} value={waterSource} onChange={setWaterSource} />
          <ChipGroup label="Family size" options={asOptions(FAMILY_SIZES)} value={familySize} onChange={setFamilySize} />
          <ChipGroup label="Budget" options={BUDGETS} value={budget} onChange={setBudget} />
          <ChipGroup label="Preference" options={PREFERENCES} value={preference} onChange={setPreference} />
        </div>

        <div className="mt-6 pt-5 border-t border-brand-border" aria-live="polite">
          {!answered ? (
            <p className="text-sm text-ink-muted">Pick a budget or preference to see matching purifiers.</p>
          ) : results.length === 0 ? (
            <p className="text-sm text-ink-muted">No purifiers in our catalogue match that combination. Try another budget, or ask us on WhatsApp.</p>
          ) : (
            <>
              <p className="text-sm font-semibold text-ink mb-3">
                {results.length} suggestion{results.length === 1 ? '' : 's'} from our catalogue
              </p>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {results.map((p) => (
                  <li key={p.id} className="flex flex-col gap-2">
                    <ProductCard product={p} />
                    <ul className="space-y-1 px-1">
                      {reasonsFor(p).map((r) => (
                        <li key={r} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-px" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          )}

          {(waterSource || familySize) && (
            <p className="mt-4 flex items-start gap-1.5 text-xs text-ink-muted">
              <Info className="w-3.5 h-3.5 shrink-0 mt-px text-brand-primary" />
              Suitability for your water source and family size is confirmed by our team — share your answers on WhatsApp.
            </p>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="w-4 h-4" />
              Send my answers on WhatsApp
            </a>
            {(answered || waterSource || familySize) && (
              <button type="button" onClick={reset} className="btn btn-secondary">
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
