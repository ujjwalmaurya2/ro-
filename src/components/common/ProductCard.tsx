import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { formatINR } from '../../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { useCart } from '../../context/CartContext';
import { CardActions } from './CardActions';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const priceText = product.priceDisplay || formatINR(product.price);
  const whatsappUrl = buildWhatsAppUrl(whatsappMessages.product(product.brand, product.model || product.name, priceText));
  const mrp = product.originalPrice && product.originalPrice > product.price && !product.priceMax ? product.originalPrice : 0;
  const badge = product.technology ?? (product.isFeatured ? 'Featured' : undefined);
  const spec = product.specifications?.storageCapacity;

  return (
    <article className="group card card-hover flex flex-col p-2.5 sm:p-3">
      <Link
        to={`/products/${product.id}`}
        className="relative block aspect-square rounded-xl bg-brand-neutral overflow-hidden"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.alt || `${product.brand} ${product.model || product.name} RO water purifier`}
          width={300}
          height={300}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.04]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/fallbacks/purifier-fallback.svg';
          }}
        />
        {badge && (
          <span className="absolute top-2 left-2 max-w-[calc(100%-1rem)] truncate px-2 py-0.5 rounded-md bg-white/95 border border-brand-border text-[10px] font-semibold text-brand-deep">
            {badge}
          </span>
        )}
      </Link>

      <div className="flex-1 flex flex-col pt-2.5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted truncate">{product.brand}</p>
        <Link to={`/products/${product.id}`} className="mt-0.5" title={product.name}>
          <h3 className="font-sans text-[13px] sm:text-sm font-semibold text-ink leading-snug line-clamp-2 min-h-[2.6em] group-hover:text-brand-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        {spec && <p className="text-[11px] text-ink-muted truncate mt-0.5">{spec}</p>}

        <div className="flex items-baseline flex-wrap gap-x-1.5 mt-2 mb-2.5">
          <span className="text-base font-bold text-ink">{priceText}</span>
          {mrp > 0 && <span className="text-[11px] text-slate-400 line-through">{formatINR(mrp)}</span>}
        </div>

        <div className="mt-auto">
          <CardActions
            itemName={product.name}
            whatsappUrl={whatsappUrl}
            onAdd={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                originalPrice: product.originalPrice,
                image: product.image,
                type: 'product',
                brandOrCategory: product.brand,
              })
            }
          />
        </div>
      </div>
    </article>
  );
};
