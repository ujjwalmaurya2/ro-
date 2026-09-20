import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingCart, Droplets } from 'lucide-react';
import type { Product } from '../../data/products';
import { formatINR } from '../../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const whatsappUrl = buildWhatsAppUrl(
    whatsappMessages.product(product.name, product.brand)
  );

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Top Image Container */}
      <div className="relative aspect-4/3 bg-gradient-to-b from-sky-50/60 to-slate-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Technology Pill */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="px-2.5 py-1 text-[11px] font-bold text-sky-800 bg-white/95 backdrop-blur-xs rounded-full shadow-xs border border-sky-100">
            {product.technology}
          </span>
          {product.isDemo && (
            <span className="px-2 py-0.5 text-[10px] font-semibold text-slate-700 bg-slate-100/90 rounded-md border border-slate-200">
              Demo Model
            </span>
          )}
        </div>

        {/* Stock status */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 text-[10px] font-medium text-emerald-800 bg-emerald-50 rounded-full border border-emerald-200">
            {product.availability}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-700">
            <span>{product.brand}</span>
            <span>{product.specifications.storageCapacity}</span>
          </div>

          <Link to={`/products/${product.id}`} className="block group-hover:text-sky-600 transition-colors">
            <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 font-['Sora']">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Specs bullets */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] text-slate-700">
            <span className="inline-flex items-center gap-1 bg-sky-50 px-2 py-0.5 rounded text-sky-800 font-medium">
              <Droplets className="w-3 h-3 text-sky-600" />
              {product.specifications.purificationStages} Stages
            </span>
            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
              {product.specifications.purificationSpeed}
            </span>
          </div>
        </div>

        {/* Pricing & CTAs */}
        <div className="pt-5 mt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-slate-900 font-['Sora']">
                {formatINR(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-700 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
            </div>
            {product.originalPrice > product.price && (
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Save {formatINR(product.originalPrice - product.price)}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

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
              className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-sm shadow-sky-600/20 transition-all active:scale-95"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="block text-center text-xs font-semibold text-sky-700 hover:text-sky-800 py-1 transition-colors"
          >
            View Full Specifications →
          </Link>
        </div>
      </div>
    </div>
  );
};
