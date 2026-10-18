import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageCircle, 
  ShoppingCart, 
  Check, 
  Shield, 
  Truck, 
  Wrench, 
  Info
} from 'lucide-react';
import { productsData } from '../data/products';
import { formatINR } from '../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/common/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem, setIsCartOpen } = useCart();

  const product = productsData.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState<string>(
    product?.image || ''
  );

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-['Sora']">Purifier Not Found</h2>
        <p className="text-sm text-slate-700">
          The product you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Showroom</span>
        </Link>
      </div>
    );
  }

  const whatsappUrl = buildWhatsAppUrl(
    whatsappMessages.product(product.name, product.brand)
  );

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      type: 'product',
      brandOrCategory: product.brand,
    });
    setIsCartOpen(true);
  };

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && (p.category === product.category || p.technology === product.technology))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-700">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:underline">Products</Link>
        <span>/</span>
        <span className="text-slate-500 truncate">{product.name}</span>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        
        {/* Left: Image Gallery */}
        <div className="lg:col-span-6 space-y-3">
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs">
            <img
              src={activeImage || product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/fallbacks/purifier-fallback.svg';
              }}
            />
            {product.isDemo && (
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2 py-0.5 bg-white/90 backdrop-blur-xs text-slate-700 font-semibold text-[10px] rounded border border-slate-200">
                  Demo Model
                </span>
              </div>
            )}
            <div className="absolute top-2.5 right-2.5">
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 font-semibold text-[10px] rounded border border-emerald-200">
                {product.availability}
              </span>
            </div>
          </div>

          {/* Thumbnail row */}
          {product.gallery.length > 1 && (
            <div className="flex gap-2 justify-center lg:justify-start">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 bg-slate-50 transition-all ${
                    activeImage === img ? 'border-sky-600 ring-2 ring-sky-200' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx}`} 
                    className="w-full h-full object-contain p-1" 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/fallbacks/purifier-fallback.svg';
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Conversion CTAs */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-700 uppercase tracking-wider">
              <span>{product.brand}</span>
              <span>•</span>
              <span>{product.technology}</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-['Sora'] tracking-tight">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-3 sm:p-4 rounded-xl bg-sky-50/70 border border-sky-100 space-y-1">
            <div className="flex items-baseline gap-2.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 font-['Sora']">
                {formatINR(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs sm:text-sm text-slate-400 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
              {product.originalPrice > product.price && (
                <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  Save {formatINR(product.originalPrice - product.price)}
                </span>
              )}
            </div>
            <p className="text-[10px] text-slate-500 italic">
              *Sample demo pricing for Prayagraj showroom display.
            </p>
          </div>

          {/* Conversion Action Buttons */}
          <div className="space-y-2 pt-1">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    type: 'product',
                    brandOrCategory: product.brand,
                  });
                }}
                className="flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm shadow-sky-600/20 transition-all active:scale-95"
              >
                <span>Buy / Book Now</span>
              </button>
            </div>

            {/* WhatsApp Enquiry Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-10 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp (Price & Availability)</span>
            </a>
          </div>

          {/* Assurances */}
          <div className="grid grid-cols-3 gap-1.5 pt-2 text-center text-[10px] sm:text-xs text-slate-600 border-t border-slate-100">
            <div className="p-2 bg-slate-50 rounded-lg">
              <Truck className="w-3.5 h-3.5 text-sky-600 mx-auto mb-0.5" />
              <span>Prayagraj Delivery</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg">
              <Wrench className="w-3.5 h-3.5 text-sky-600 mx-auto mb-0.5" />
              <span>Installation Support</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg">
              <Shield className="w-3.5 h-3.5 text-sky-600 mx-auto mb-0.5" />
              <span>{product.warranty}</span>
            </div>
          </div>

          {/* Key Bullet Highlights */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Key Features:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <Check className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Specifications Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 font-['Sora']">
            Technical Specifications
          </h2>
          <p className="text-xs text-slate-500">
            Standard specifications for {product.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm">
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Purification Technology</span>
            <span className="font-semibold text-slate-900 text-right">{product.specifications.purificationTechnology}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Purification Stages</span>
            <span className="font-semibold text-slate-900">{product.specifications.purificationStages} Stages</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Storage Capacity</span>
            <span className="font-semibold text-slate-900">{product.specifications.storageCapacity}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Purification Speed</span>
            <span className="font-semibold text-slate-900">{product.specifications.purificationSpeed}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Suitable Water TDS</span>
            <span className="font-semibold text-slate-900 text-right">{product.specifications.suitableWaterTDS}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Cabinet Material</span>
            <span className="font-semibold text-slate-900">{product.specifications.bodyMaterial}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Mounting Type</span>
            <span className="font-semibold text-slate-900">{product.specifications.mountingType}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Power Consumption</span>
            <span className="font-semibold text-slate-900">{product.specifications.powerConsumption}</span>
          </div>
        </div>

        <div className="p-2.5 bg-slate-50 rounded-lg text-[11px] text-slate-600 flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
          <span>Demo showroom figures for reference. Specifications matched against manufacturer batch.</span>
        </div>
      </div>

      {/* Related Products: 2-Column Mobile Grid */}
      {relatedProducts.length > 0 && (
        <div className="space-y-3 pt-2">
          <h2 className="text-lg font-bold text-slate-900 font-['Sora']">
            Related Water Purifiers
          </h2>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
