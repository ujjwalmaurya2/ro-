import React from 'react';
import { MessageCircle, ShoppingCart, Cpu } from 'lucide-react';
import type { SparePart } from '../../data/spareParts';
import { formatINR } from '../../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { useCart } from '../../context/CartContext';

interface SparePartCardProps {
  part: SparePart;
}

export const SparePartCard: React.FC<SparePartCardProps> = ({ part }) => {
  const { addItem } = useCart();

  const whatsappUrl = buildWhatsAppUrl(
    whatsappMessages.sparePart(part.name)
  );

  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 hover:border-sky-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden p-2 sm:p-2.5">
      <div>
        {/* Compact Aspect-Square Image Container */}
        <div className="relative aspect-square rounded-lg bg-slate-50 overflow-hidden mb-2">
          <img
            src={part.image}
            alt={part.name}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/parts/part-fallback.svg';
            }}
          />

          {/* Top Badges (Non-colliding Flex Row) */}
          <div className="absolute top-1.5 inset-x-1.5 flex items-start justify-between gap-1 pointer-events-none z-10">
            <span 
              className="px-1.5 py-0.5 text-[9px] font-bold text-sky-800 bg-white/95 backdrop-blur-xs rounded-md shadow-2xs border border-sky-100 truncate max-w-[70%]"
              title={part.categoryLabel}
            >
              {part.categoryLabel}
            </span>

            {part.isDemo && (
              <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] font-medium text-slate-500 bg-white/90 rounded border border-slate-200 shrink-0">
                Demo
              </span>
            )}
          </div>
        </div>

        {/* Part Category & Quick Spec Tag */}
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium mb-1">
          <span className="inline-flex items-center gap-0.5 text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded font-semibold truncate">
            <Cpu className="w-2.5 h-2.5 shrink-0" />
            <span>{part.categoryLabel}</span>
          </span>
          <span className="truncate text-slate-400">•</span>
          <span className="truncate text-slate-500">Universal Fit</span>
        </div>

        {/* Part Title (Strictly 2 lines clamped) */}
        <h3 
          className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug line-clamp-2 font-['Sora'] min-h-[2.4em] group-hover:text-sky-600 transition-colors"
          title={part.name}
        >
          {part.name}
        </h3>

        {/* Compact Compatibility Line */}
        <p 
          className="text-[10px] text-slate-500 line-clamp-1 truncate mt-1" 
          title={`Compatible with: ${part.compatibility}`}
        >
          <span className="font-semibold text-slate-700">Fits:</span> {part.compatibility}
        </p>
      </div>

      {/* Pricing and Touch-Friendly Compact Actions */}
      <div className="mt-2 pt-2 border-t border-slate-100 flex flex-col justify-end">
        {/* Price Row */}
        <div className="flex items-baseline justify-between gap-1 mb-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs sm:text-sm font-black text-slate-900 font-['Sora']">
              {formatINR(part.price)}
            </span>
            {part.originalPrice > part.price && (
              <span className="text-[10px] text-slate-400 line-through">
                {formatINR(part.originalPrice)}
              </span>
            )}
          </div>
          <span className="text-[9px] font-semibold text-sky-700 bg-sky-50 px-1 py-0.5 rounded">
            In Stock
          </span>
        </div>

        {/* Action Controls (Accessible touch target: min 38px height) */}
        <div className="grid grid-cols-4 gap-1.5">
          <button
            onClick={() => addItem({
              id: part.id,
              name: part.name,
              price: part.price,
              originalPrice: part.originalPrice,
              image: part.image,
              type: 'spare-part',
              brandOrCategory: part.categoryLabel
            })}
            className="col-span-3 inline-flex items-center justify-center gap-1 h-9 px-2 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 active:scale-95 transition-all shadow-xs"
            aria-label={`Add ${part.name} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="sm:hidden">Add</span>
            </span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 inline-flex items-center justify-center h-9 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors active:scale-95"
            title="Enquire on WhatsApp"
            aria-label={`Enquire on WhatsApp about ${part.name}`}
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
