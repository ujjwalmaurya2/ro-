import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  MessageCircle, 
  ArrowLeft,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal, totalSavings, totalCount } = useCart();
  const navigate = useNavigate();

  const whatsappOrderLink = buildWhatsAppUrl(
    whatsappMessages.cartOrder(
      items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price }))
    )
  );

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-sky-50 text-sky-400 mx-auto flex items-center justify-center">
          <ShoppingCart className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Sora']">
            Your Cart is Currently Empty
          </h1>
          <p className="text-sm text-slate-700 max-w-md mx-auto">
            You haven't added any water purifiers or RO spare parts to your enquiry cart yet.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors text-sm"
          >
            <span>Explore Water Purifiers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/parts"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold hover:bg-slate-200 transition-colors text-sm"
          >
            <span>Browse RO Spare Parts</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Enquiry Cart</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Sora'] mt-1">
            Shopping / Enquiry Cart ({totalCount} items)
          </h1>
        </div>

        <button
          onClick={clearCart}
          className="text-xs font-semibold text-rose-600 hover:text-rose-700 self-start sm:self-auto"
        >
          Clear All Items
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Cart Items Table / List */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
          {items.map((item) => (
            <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl border border-slate-200 bg-slate-50 shrink-0"
                />
                <div className="space-y-1 min-w-0">
                  <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                    {item.type === 'product' ? 'Water Purifier' : 'Spare Part'}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-['Sora'] truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-slate-900">
                      {formatINR(item.price)}
                    </span>
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className="text-xs text-slate-700 line-through">
                        {formatINR(item.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Quantity Controls & Remove */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <div className="flex items-center border border-slate-200 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1.5 text-slate-500 hover:text-sky-600"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1.5 text-slate-500 hover:text-sky-600"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-right sm:min-w-[80px]">
                  <span className="text-sm font-bold text-slate-900 block">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          <div className="p-4 bg-slate-50 text-xs text-slate-700 flex items-center justify-between">
            <Link to="/products" className="inline-flex items-center gap-1.5 font-semibold text-sky-700 hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Continue Browsing Showroom</span>
            </Link>
            <span>Doorstep delivery across Prayagraj</span>
          </div>
        </div>

        {/* Order Summary Box */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-5">
          <h2 className="text-lg font-bold text-slate-900 font-['Sora'] border-b border-slate-100 pb-3">
            Estimated Order Summary
          </h2>

          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Items Total ({totalCount})</span>
              <span className="font-semibold text-slate-900">{formatINR(subtotal)}</span>
            </div>
            {totalSavings > 0 && (
              <div className="flex justify-between text-emerald-600 text-xs">
                <span>Total Promotional Savings</span>
                <span className="font-semibold">-{formatINR(totalSavings)}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-600 text-xs">
              <span>Delivery / Inspection</span>
              <span className="text-slate-700">Coordinated on WhatsApp</span>
            </div>
            <div className="pt-3 border-t border-slate-200 flex justify-between text-base font-bold text-slate-900">
              <span>Estimated Total</span>
              <span className="text-sky-700 text-xl font-['Sora']">{formatINR(subtotal)}</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={whatsappOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order / Enquire on WhatsApp</span>
            </a>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all text-center"
            >
              <span>Proceed to Customer Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-700 space-y-2 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Genuine-grade components with service support</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Local doorstep delivery in Prayagraj</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
