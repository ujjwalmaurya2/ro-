import React from 'react';
import { MessageCircle, ShoppingCart } from 'lucide-react';
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
    <div className="group bg-white rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Top Image & Category Tag */}
        <div className="relative aspect-4/3 bg-slate-50 overflow-hidden">
          <img
            src={part.image}
            alt={part.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2.5 py-1 text-[11px] font-bold text-sky-800 bg-white/95 backdrop-blur-xs rounded-full shadow-xs border border-sky-100">
              {part.categoryLabel}
            </span>
          </div>
          {part.isDemo && (
            <div className="absolute bottom-2.5 right-2.5">
              <span className="px-2 py-0.5 text-[10px] font-semibold text-slate-700 bg-white/90 rounded border border-slate-200">
                Demo Part
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2.5">
          <h3 className="text-sm font-bold text-slate-900 leading-snug font-['Sora'] group-hover:text-sky-600 transition-colors">
            {part.name}
          </h3>

          <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
            {part.shortDescription}
          </p>

          <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-100/80 text-[11px] text-slate-700">
            <span className="font-semibold text-sky-900 block mb-0.5">Compatibility:</span>
            <span className="line-clamp-2 text-slate-700">{part.compatibility}</span>
          </div>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="p-4 pt-0 space-y-3">
        <div className="flex items-baseline justify-between pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold text-slate-900 font-['Sora']">
              {formatINR(part.price)}
            </span>
            {part.originalPrice > part.price && (
              <span className="text-xs text-slate-700 line-through">
                {formatINR(part.originalPrice)}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
            Enquire for Stock
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Enquire</span>
          </a>

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
            className="inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-sm shadow-sky-600/20 transition-all active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
