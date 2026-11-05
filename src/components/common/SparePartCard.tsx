import React from 'react';
import type { SparePart } from '../../data/spareParts';
import { formatINR } from '../../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { useCart } from '../../context/CartContext';
import { CardActions } from './CardActions';

interface SparePartCardProps {
  part: SparePart;
}

export const SparePartCard: React.FC<SparePartCardProps> = ({ part }) => {
  const { addItem } = useCart();
  const whatsappUrl = buildWhatsAppUrl(whatsappMessages.sparePart(part.name, part.price));

  return (
    <article className="group card card-hover flex flex-col p-2.5 sm:p-3">
      <div className="relative aspect-square rounded-xl bg-brand-neutral overflow-hidden">
        <img
          src={part.image}
          alt={part.name}
          width={240}
          height={240}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.04]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/spare-parts/part-fallback.svg';
          }}
        />
        {part.isDemo && (
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-white/95 border border-brand-border text-[10px] font-medium text-ink-muted">
            Demo
          </span>
        )}
      </div>

      <div className="flex-1 flex flex-col pt-2.5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted truncate">{part.categoryLabel}</p>
        <h3 className="font-sans text-[13px] sm:text-sm font-semibold text-ink leading-snug line-clamp-2 min-h-[2.6em] mt-0.5" title={part.name}>
          {part.name}
        </h3>
        <p className="text-[11px] text-ink-muted truncate mt-0.5" title={part.compatibility ?? part.shortDescription}>
          {part.compatibility ? `Fits: ${part.compatibility}` : 'Confirm fit on WhatsApp'}
        </p>

        <div className="flex items-baseline flex-wrap gap-x-1.5 mt-2 mb-2.5">
          <span className="text-base font-bold text-ink">{formatINR(part.price)}</span>
          {part.originalPrice !== undefined && part.originalPrice > part.price && (
            <span className="text-[11px] text-slate-400 line-through">{formatINR(part.originalPrice)}</span>
          )}
          {part.inStock && <span className="ml-auto text-[10px] font-semibold text-emerald-700">In stock</span>}
        </div>

        <div className="mt-auto">
          <CardActions
            itemName={part.name}
            whatsappUrl={whatsappUrl}
            onAdd={() =>
              addItem({
                id: part.id,
                name: part.name,
                price: part.price,
                originalPrice: part.originalPrice,
                image: part.image,
                type: 'spare-part',
                brandOrCategory: part.categoryLabel,
              })
            }
          />
        </div>
      </div>
    </article>
  );
};
