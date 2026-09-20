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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:underline">Products</Link>
        <span>/</span>
        <span className="text-slate-700 truncate">{product.name}</span>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-4/3 sm:aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src={activeImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.isDemo && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-xs text-slate-700 font-semibold text-xs rounded-lg border border-slate-200">
                  Demo Model
                </span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 font-semibold text-xs rounded-lg border border-emerald-200">
                {product.availability}
              </span>
            </div>
          </div>

          {/* Thumbnail row */}
          {product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-sky-600 ring-2 ring-sky-200' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Conversion CTAs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span>{product.brand}</span>
              <span>•</span>
              <span>{product.technology}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Sora'] tracking-tight">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-slate-900 font-['Sora']">
                {formatINR(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-slate-700 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
              {product.originalPrice > product.price && (
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  Save {formatINR(product.originalPrice - product.price)}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-700 italic">
              *Sample demo pricing for Prayagraj showroom display. Taxes & installation may vary.
            </p>
          </div>

          {/* Key Bullet Highlights */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Key Features:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Action Buttons */}
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all"
              >
                <span>Buy / Book Now</span>
              </button>
            </div>

            {/* WhatsApp Enquiry Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp (Price & Availability)</span>
            </a>
          </div>

          {/* Assurances */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] text-slate-700 border-t border-slate-100">
            <div className="p-2 bg-slate-50 rounded-lg">
              <Truck className="w-4 h-4 text-sky-600 mx-auto mb-1" />
              <span>Prayagraj Delivery</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg">
              <Wrench className="w-4 h-4 text-sky-600 mx-auto mb-1" />
              <span>Installation Support</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg">
              <Shield className="w-4 h-4 text-sky-600 mx-auto mb-1" />
              <span>{product.warranty}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Specifications Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 font-['Sora']">
            Technical Specifications
          </h2>
          <p className="text-xs text-slate-700">
            Standard specifications for {product.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-sm">
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700 font-medium">Purification Technology</span>
            <span className="font-semibold text-slate-900">{product.specifications.purificationTechnology}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700 font-medium">Purification Stages</span>
            <span className="font-semibold text-slate-900">{product.specifications.purificationStages} Stages</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700 font-medium">Storage Capacity</span>
            <span className="font-semibold text-slate-900">{product.specifications.storageCapacity}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700 font-medium">Purification Speed</span>
            <span className="font-semibold text-slate-900">{product.specifications.purificationSpeed}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700 font-medium">Suitable Water TDS</span>
            <span className="font-semibold text-slate-900">{product.specifications.suitableWaterTDS}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700 font-medium">Cabinet Material</span>
            <span className="font-semibold text-slate-900">{product.specifications.bodyMaterial}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700 font-medium">Mounting Type</span>
            <span className="font-semibold text-slate-900">{product.specifications.mountingType}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700 font-medium">Power Consumption</span>
            <span className="font-semibold text-slate-900">{product.specifications.powerConsumption}</span>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 flex items-start gap-2">
          <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
          <span>Note: Specifications are demo showroom figures for illustrative reference and will be matched against the exact manufacturer batch model.</span>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-slate-900 font-['Sora']">
            Related Water Purifiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
