import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowLeft, 
  Truck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { businessConfig } from '../config/business';
import { formatINR, isValidIndianPhone } from '../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const CheckoutPage: React.FC = () => {
  const { items, subtotal, totalSavings, totalCount, clearCart } = useCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    locality: businessConfig.serviceAreas[0]?.name || 'Civil Lines',
    address: '',
    pincode: '211002',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [orderPlacedDemo, setOrderPlacedDemo] = useState(false);

  if (items.length === 0 && !orderPlacedDemo) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-['Sora']">Your Cart is Empty</h2>
        <p className="text-sm text-slate-700">Please add products or spare parts before checking out.</p>
        <Link to="/products" className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" />
          <span>Go to Products Showroom</span>
        </Link>
      </div>
    );
  }

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!customer.name.trim()) errs.name = 'Please enter your full name';
    if (!customer.phone.trim()) {
      errs.phone = 'Please enter your 10-digit mobile number';
    } else if (!isValidIndianPhone(customer.phone)) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (!customer.address.trim()) errs.address = 'Please enter your street address';
    if (!customer.pincode.trim()) errs.pincode = 'Please enter your 6-digit pincode';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getWhatsAppMessage = () => {
    return whatsappMessages.cartOrder(
      items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
      {
        name: customer.name,
        phone: customer.phone,
        address: `${customer.address}, ${customer.locality}, Prayagraj - ${customer.pincode}`,
      }
    );
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setOrderPlacedDemo(true);
    }
  };

  const handleSendOnWhatsApp = () => {
    if (validate()) {
      const url = buildWhatsAppUrl(getWhatsAppMessage());
      window.open(url, '_blank', 'noopener,noreferrer');
      clearCart();
      setOrderPlacedDemo(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
        <Link to="/cart" className="hover:underline flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Cart</span>
        </Link>
        <span>/</span>
        <span className="text-slate-700">Order Details & Checkout</span>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
          Customer & Delivery Details
        </h1>
        <p className="text-sm text-slate-700">
          Provide your delivery address in Prayagraj to finalize your purifier or spare parts enquiry.
        </p>
      </div>

      {orderPlacedDemo ? (
        /* Order Prepared Demo Screen */
        <div className="bg-white rounded-3xl border border-sky-200 p-8 sm:p-12 text-center space-y-6 shadow-xl max-w-2xl mx-auto animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 font-['Sora']">
              Order Enquiry Prepared!
            </h2>
            <p className="text-sm text-slate-700 max-w-md mx-auto">
              Your order summary has been structured. Send it directly to <strong>Ajit Aqua Appliances</strong> on WhatsApp to confirm delivery time and installation in Prayagraj.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-700">Customer:</span>
              <span className="font-semibold text-slate-900">{customer.name} ({customer.phone})</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-700">Delivery Locality:</span>
              <span className="font-semibold text-slate-900">{customer.locality}, Prayagraj</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-700">Total Order Value:</span>
              <span className="font-bold text-sky-700 text-sm">{formatINR(subtotal)}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={buildWhatsAppUrl(getWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                clearCart();
                navigate('/');
              }}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
            >
              Back to Home
            </button>
          </div>

          <p className="text-[11px] text-slate-700 italic">
            *Demo checkout: Payment gateway integration can be added when client establishes merchant account.
          </p>
        </div>
      ) : (
        /* Checkout Form & Order Review */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <form onSubmit={handleCompleteOrder} className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-['Sora'] border-b border-slate-100 pb-2">
                1. Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Gupta"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-sky-500'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-sky-500'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-base font-bold text-slate-900 font-['Sora'] border-b border-slate-100 pb-2">
                2. Prayagraj Delivery Address
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Locality / Area *
                  </label>
                  <select
                    value={customer.locality}
                    onChange={(e) => setCustomer({ ...customer, locality: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm text-slate-800"
                  >
                    {businessConfig.serviceAreas.map((area) => (
                      <option key={area.id} value={area.name}>{area.name}</option>
                    ))}
                    <option value="Other Area in Prayagraj">Other Area in Prayagraj</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    value={customer.pincode}
                    onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.pincode ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-sky-500'
                    }`}
                  />
                  {errors.pincode && <p className="text-xs text-rose-500 mt-1">{errors.pincode}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Street Address, House No. & Landmark *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 45/2B, Near Medical College Crossing"
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.address ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-sky-500'
                    }`}
                  />
                  {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Installation / Delivery Instructions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Please bring extra 1/4 inch pipe for kitchen sink connection..."
                    value={customer.notes}
                    onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all text-xs"
              >
                <span>Review Order Enquiry</span>
              </button>

              <button
                type="button"
                onClick={handleSendOnWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Order Directly on WhatsApp</span>
              </button>
            </div>
          </form>

          {/* Order Review Sidebar */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-['Sora'] border-b border-slate-100 pb-2 flex items-center justify-between">
              <span>Order Summary</span>
              <span className="text-xs text-sky-700 font-normal">{totalCount} items</span>
            </h3>

            <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto pr-1 text-xs">
              {items.map((item) => (
                <div key={item.id} className="py-2.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 truncate">{item.name}</p>
                    <p className="text-slate-700 text-[11px]">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-slate-900 shrink-0">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">{formatINR(subtotal)}</span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Savings</span>
                  <span className="font-semibold">-{formatINR(totalSavings)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>Delivery / Installation</span>
                <span className="text-slate-700">Coordinated on WhatsApp</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between text-base font-bold text-slate-900">
                <span>Total</span>
                <span className="text-sky-700">{formatINR(subtotal)}</span>
              </div>
            </div>

            <div className="p-3 bg-sky-50 rounded-xl text-xs text-sky-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Truck className="w-3.5 h-3.5 text-sky-600" />
                <span>Prayagraj Doorstep Delivery</span>
              </div>
              <p className="text-[11px] text-sky-800 leading-relaxed">
                Our technician coordinates directly for delivery schedule and on-site machine testing.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
