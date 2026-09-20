import React from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatINR } from '../../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeItem, 
    updateQuantity, 
    subtotal, 
    totalSavings, 
    totalCount 
  } = useCart();

  if (!isCartOpen) return null;

  const whatsappOrderLink = buildWhatsAppUrl(
    whatsappMessages.cartOrder(
      items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price }))
    )
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-sky-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-['Sora']">Your Enquiry Cart</h3>
                <p className="text-xs text-slate-700">{totalCount} item{totalCount !== 1 ? 's' : ''} selected</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-400 mx-auto flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900">Your cart is empty</h4>
                  <p className="text-xs text-slate-700 mt-1 max-w-xs mx-auto">
                    Explore our range of RO purifiers, genuine spare parts, and filtration kits.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                  <Link
                    to="/products"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    Browse Purifiers
                  </Link>
                  <Link
                    to="/parts"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    View Spare Parts
                  </Link>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {items.map((item) => (
                  <div key={item.id} className="py-3.5 flex gap-3.5 items-center">
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border border-slate-100 shrink-0 bg-slate-50"
                      loading="lazy"
                    />

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 truncate">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-sm font-bold text-sky-700">
                          {formatINR(item.price)}
                        </span>
                        {item.originalPrice && item.originalPrice > item.price && (
                          <span className="text-xs text-slate-700 line-through">
                            {formatINR(item.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-slate-200 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-slate-500 hover:text-sky-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-semibold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-slate-500 hover:text-sky-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 transition-colors ml-auto"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">{formatINR(subtotal)}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex items-center justify-between text-emerald-600 text-xs">
                    <span>Estimated Discount</span>
                    <span className="font-semibold">-{formatINR(totalSavings)}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-base font-bold text-slate-900">
                  <span>Estimated Total</span>
                  <span className="text-sky-700">{formatINR(subtotal)}</span>
                </div>
              </div>

              {/* Order / Enquiry CTAs */}
              <div className="space-y-2 pt-2">
                <a
                  href={whatsappOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 font-semibold shadow-md shadow-emerald-600/20 transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire / Order on WhatsApp</span>
                </a>

                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 font-semibold transition-all text-sm"
                >
                  <span>Proceed to Order Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-700 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Doorstep delivery & installation support in Prayagraj</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
