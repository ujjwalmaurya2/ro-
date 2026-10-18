import React, { useEffect } from 'react';
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

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const whatsappOrderLink = buildWhatsAppUrl(
    whatsappMessages.cartOrder(
      items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price }))
    )
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden box-border">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Right Drawer Container */}
      <div 
        className="fixed inset-y-0 right-0 w-full max-w-md max-w-[100vw] box-border bg-white shadow-2xl flex flex-col z-10 overflow-x-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Your Enquiry Cart"
      >
        {/* Drawer Header */}
        <div className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-slate-100 flex items-center justify-between gap-3 w-full min-w-0 bg-sky-50/50 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold text-slate-900 font-['Sora'] truncate">
                Your Enquiry Cart
              </h3>
              <p className="text-xs text-slate-600 truncate">
                {totalCount} item{totalCount !== 1 ? 's' : ''} selected
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-5 space-y-4 min-w-0">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-400 mx-auto flex items-center justify-center">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-slate-900">Your cart is empty</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
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
            <div className="divide-y divide-slate-100 min-w-0">
              {items.map((item) => (
                <div key={item.id} className="py-3.5 flex items-start gap-3 w-full min-w-0">
                  {/* Item Image */}
                  <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 p-1 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = item.type === 'product'
                          ? '/images/fallbacks/purifier-fallback.svg'
                          : '/images/parts/part-fallback.svg';
                      }}
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 
                      className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2"
                      title={item.name}
                    >
                      {item.name}
                    </h4>
                    
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-sky-700 tabular-nums">
                        {formatINR(item.price)}
                      </span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="text-xs text-slate-400 line-through tabular-nums">
                          {formatINR(item.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Quantity Controls & Delete Button */}
                    <div className="flex items-center justify-between gap-2 pt-1 w-full min-w-0">
                      <div className="flex items-center border border-slate-200 rounded-md bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-slate-500 hover:text-sky-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-slate-800 tabular-nums">
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
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors shrink-0 ml-auto"
                        aria-label={`Remove ${item.name} from cart`}
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
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 space-y-3 shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
            <div className="space-y-1.5 text-sm w-full min-w-0">
              <div className="flex items-start justify-between gap-3 w-full min-w-0 text-slate-600">
                <span className="flex-1 min-w-0">Subtotal</span>
                <span className="shrink-0 text-right font-semibold text-slate-900 tabular-nums">
                  {formatINR(subtotal)}
                </span>
              </div>
              
              {totalSavings > 0 && (
                <div className="flex items-start justify-between gap-3 w-full min-w-0 text-emerald-600 text-xs">
                  <span className="flex-1 min-w-0">Estimated Discount</span>
                  <span className="shrink-0 text-right font-semibold tabular-nums">
                    -{formatINR(totalSavings)}
                  </span>
                </div>
              )}
              
              <div className="pt-2 border-t border-slate-200 flex items-start justify-between gap-3 w-full min-w-0 text-base font-bold text-slate-900">
                <span className="flex-1 min-w-0">Estimated Total</span>
                <span className="shrink-0 text-right text-sky-700 tabular-nums">
                  {formatINR(subtotal)}
                </span>
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

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-600 pt-1 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>Doorstep delivery & installation support in Prayagraj</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
