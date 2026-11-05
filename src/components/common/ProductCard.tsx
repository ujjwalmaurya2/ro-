import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingCart, Droplets, Check } from 'lucide-react';
import type { Product } from '../../data/products';
import { formatINR } from '../../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const priceText = product.priceDisplay || formatINR(product.price);

  const whatsappUrl = buildWhatsAppUrl(
    whatsappMessages.product(
      product.brand,
      product.model || product.name,
      priceText
    )
  );

  const discountAmount = product.originalPrice && product.originalPrice > product.price
    ? product.originalPrice - product.price
    : 0;
    
  const badge = product.isFeatured ? 'Featured' : (product.technology || product.category);

  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 hover:border-sky-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden p-2.5 sm:p-3">
      <div>
        {/* Compact Aspect-Square Image Container */}
        <Link 
          to={`/products/${product.id}`}
          className="relative block aspect-square rounded-lg bg-slate-50 overflow-hidden mb-2 border border-slate-100"
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.alt || `${product.brand} ${product.model || product.name} RO Water Purifier`}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/fallbacks/purifier-fallback.svg';
            }}
          />

          {/* Top Badges (Non-colliding Flex Row) */}
          <div className="absolute top-1.5 inset-x-1.5 flex items-start justify-between gap-1 pointer-events-none z-10">
            {badge ? (
              <span
                className="px-1.5 py-0.5 text-[9px] font-bold text-sky-800 bg-white/95 backdrop-blur-xs rounded-md shadow-2xs border border-sky-100 truncate max-w-[70%]"
                title={badge}
              >
                {badge}
              </span>
            ) : <span />}

            {product.availability === 'In Stock' && (
              <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] font-semibold text-emerald-800 bg-emerald-50/95 rounded border border-emerald-200 shrink-0 flex items-center gap-0.5">
                <Check className="w-2.5 h-2.5" /> In Stock
              </span>
            )}
          </div>

          {/* Discount Tag */}
          {discountAmount > 0 && (
            <div className="absolute bottom-1.5 left-1.5">
              <span className="px-1.5 py-0.5 text-[9px] font-bold text-emerald-800 bg-emerald-50/95 rounded border border-emerald-200">
                Save {formatINR(discountAmount)}
              </span>
            </div>
          )}
        </Link>

        {/* Product Brand & Storage/Stages Spec */}
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium mb-1 min-h-[1.25rem]">
          <span className="inline-flex items-center gap-0.5 text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded font-semibold truncate">
            <Droplets className="w-2.5 h-2.5 shrink-0" />
            <span>
              {product.specifications?.storageCapacity || (product.specifications?.purificationStages ? `${product.specifications.purificationStages} Stages` : 'RO Unit')}
            </span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="font-semibold text-slate-700 truncate">{product.brand}</span>
        </div>

        {/* Product Title (Clamped 2 lines) */}
        <Link 
          to={`/products/${product.id}`} 
          className="block group-hover:text-sky-600 transition-colors"
          title={product.name}
        >
          <h3 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug line-clamp-2 font-['Sora'] min-h-[2.4em]">
            {product.name}
          </h3>
        </Link>
      </div>

      {/* Pricing and Touch-Friendly Actions */}
      <div className="mt-2 pt-2 border-t border-slate-100 flex flex-col justify-end">
        {/* Price Row */}
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="text-xs sm:text-sm font-black text-slate-900 font-['Sora']">
            {product.priceDisplay || formatINR(product.price)}
          </span>
          {discountAmount > 0 && product.originalPrice && !product.priceMax && (
            <span className="text-[10px] text-slate-400 line-through">
              {formatINR(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-4 gap-1.5">
          <button
            onClick={() => addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              originalPrice: product.originalPrice,
              image: product.image,
              type: 'product',
              brandOrCategory: product.brand
            })}
            className="col-span-3 inline-flex items-center justify-center gap-1 h-9 px-2 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 active:scale-95 transition-all shadow-xs cursor-pointer"
            aria-label={`Add ${product.name} to cart`}
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
            className="col-span-1 inline-flex items-center justify-center h-9 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors active:scale-95 cursor-pointer"
            title="Enquire on WhatsApp"
            aria-label={`Enquire on WhatsApp about ${product.name}`}
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
