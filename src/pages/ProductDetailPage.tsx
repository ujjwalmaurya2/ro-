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
  CheckCircle2
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
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-semibold shadow-xs hover:bg-sky-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Catalog</span>
        </Link>
      </div>
    );
  }

  const priceText = product.priceDisplay || formatINR(product.price);

  const whatsappUrl = buildWhatsAppUrl(
    whatsappMessages.product(
      product.brand,
      product.model || product.name,
      priceText
    )
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
    .filter((p) => p.id !== product.id && (p.brand === product.brand || p.technology === product.technology))
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-700">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:underline">Products</Link>
        <span>/</span>
        <Link to={`/products?brand=${encodeURIComponent(product.brand)}`} className="hover:underline">{product.brand}</Link>
        <span>/</span>
        <span className="text-slate-500 truncate">{product.name}</span>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        
        {/* Left: Image Gallery */}
        <div className="lg:col-span-6 space-y-3">
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs flex items-center justify-center">
            <img
              src={activeImage || product.image}
              alt={product.alt || `${product.brand} ${product.model || product.name} RO Water Purifier`}
              className="w-full h-full object-contain p-4 transition-all duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/fallbacks/purifier-fallback.svg';
              }}
            />
            {product.availability === 'In Stock' && (
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-emerald-600 text-white font-bold text-xs rounded-lg shadow-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
                </span>
              </div>
            )}
            {product.technology && (
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-sky-800 font-bold text-xs rounded-lg border border-sky-100 shadow-xs">
                  {product.technology}
                </span>
              </div>
            )}
          </div>

          {/* Thumbnail row */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-2 justify-center lg:justify-start">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 bg-slate-50 transition-all cursor-pointer ${
                    (activeImage || product.image) === img ? 'border-sky-600 ring-2 ring-sky-200' : 'border-slate-200 opacity-70 hover:opacity-100'
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
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span>{product.brand}</span>
              <span>•</span>
              <span>Model: {product.model}</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-['Sora'] tracking-tight">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description || product.shortDescription}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/80 border border-sky-100 space-y-1.5">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 font-['Sora']">
                {product.priceDisplay || formatINR(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && !product.priceMax && (
                <>
                  <span className="text-sm sm:text-base text-slate-400 line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    Save {formatINR(product.originalPrice - product.price)}
                  </span>
                </>
              )}
            </div>
            <p className="text-xs text-slate-600">
              Includes manufacturer machine warranty & doorstep setup assistance in Prayagraj.
            </p>
          </div>

          {/* Conversion Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <div className="grid grid-cols-2 gap-2.5">
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
                className="flex items-center justify-center gap-1.5 h-11 px-3 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors active:scale-95 cursor-pointer shadow-xs"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex items-center justify-center gap-1.5 h-11 px-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all active:scale-95 cursor-pointer"
              >
                <span>Book / Order Now</span>
              </button>
            </div>

            {/* WhatsApp Enquiry Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-11 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp (Best Deal & Setup)</span>
            </a>
          </div>

          {/* Assurances */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] sm:text-xs text-slate-600 border-t border-slate-100">
            <div className="p-2.5 bg-slate-50 rounded-xl">
              <Truck className="w-4 h-4 text-sky-600 mx-auto mb-1" />
              <span className="font-semibold block text-slate-900">Doorstep Delivery</span>
              <span>All Prayagraj areas</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl">
              <Wrench className="w-4 h-4 text-sky-600 mx-auto mb-1" />
              <span className="font-semibold block text-slate-900">Installation Help</span>
              <span>Expert wall fitting</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl">
              <Shield className="w-4 h-4 text-sky-600 mx-auto mb-1" />
              <span className="font-semibold block text-slate-900">Genuine Warranty</span>
              <span>{product.warranty ?? 'Manufacturer backed'}</span>
            </div>
          </div>

          {/* Key Bullet Highlights */}
          {product.features && product.features.length > 0 && (
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Key Features:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <Check className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Specifications Table */}
      {product.specifications ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 space-y-4 shadow-2xs">
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-['Sora']">
              Technical Specifications
            </h2>
            <p className="text-xs text-slate-500">
              Verified specifications for {product.brand} {product.model}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Brand</span>
              <span className="font-semibold text-slate-900">{product.brand}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Model Name</span>
              <span className="font-semibold text-slate-900">{product.model}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Purification Technology</span>
              <span className="font-semibold text-slate-900 text-right">{product.specifications.purificationTechnology}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Purification Stages</span>
              <span className="font-semibold text-slate-900">{product.specifications.purificationStages} Stages</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Storage Capacity</span>
              <span className="font-semibold text-slate-900">{product.specifications.storageCapacity}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Purification Speed</span>
              <span className="font-semibold text-slate-900">{product.specifications.purificationSpeed}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Suitable Water TDS</span>
              <span className="font-semibold text-slate-900 text-right">{product.specifications.suitableWaterTDS}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Cabinet Material</span>
              <span className="font-semibold text-slate-900">{product.specifications.bodyMaterial}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Mounting Type</span>
              <span className="font-semibold text-slate-900">{product.specifications.mountingType}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Power Consumption</span>
              <span className="font-semibold text-slate-900">{product.specifications.powerConsumption}</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 font-['Sora']">
              Related Water Purifiers
            </h2>
            <Link to="/products" className="text-xs font-bold text-sky-600 hover:text-sky-700">
              View All Purifiers &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
