import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Wrench
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { isValidIndianPhone } from '../utils/formatters';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'RO Purifier Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!isValidIndianPhone(formData.phone)) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const getWhatsAppMessage = () => {
    return (
      `Hello ${businessConfig.name}, I am contacting you from your website:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Subject: ${formData.subject}\n` +
      `• Message: ${formData.message}\n`
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-slate-700">Contact</span>
      </div>

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
          Contact Ajit Aqua Appliances
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
          Get in touch with us for water purifier enquiries, spare parts availability, or doorstep service in Prayagraj.
        </p>
      </div>

      {/* Grid: Contact Cards & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-slate-900 font-['Sora']">
              Store & Service Centre
            </h2>

            <div className="space-y-4 text-sm">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-700 block font-medium">Direct Phone Call</span>
                  <a
                    href={`tel:${businessConfig.phone}`}
                    className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {businessConfig.displayPhone}
                  </a>
                  <span className="text-xs text-slate-700 block">7 Days a week</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-700 block font-medium">WhatsApp Support</span>
                  <a
                    href={buildWhatsAppUrl(whatsappMessages.general())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-700 hover:underline"
                  >
                    {businessConfig.displayWhatsapp}
                  </a>
                  <span className="text-xs text-slate-700 block">Direct chat & photo sharing</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-700 block font-medium">Email Address</span>
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-sky-600"
                  >
                    {businessConfig.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-700 block font-medium">Address</span>
                  <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                    {businessConfig.fullAddress}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-700 block font-medium">Working Hours</span>
                  <p className="text-xs text-slate-800 font-semibold">
                    {businessConfig.businessHours.days}: {businessConfig.businessHours.timing}
                  </p>
                </div>
              </div>
            </div>

            {/* Book Service Fast-track button */}
            <div className="pt-4 border-t border-slate-100">
              <Link
                to="/book-service"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm transition-colors text-center"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Technician Visit Online</span>
              </Link>
            </div>
          </div>

          {/* Map Container Placeholder */}
          <div className="bg-slate-100 rounded-3xl border border-slate-200 p-6 text-center space-y-3">
            <MapPin className="w-8 h-8 text-sky-600 mx-auto" />
            <h3 className="text-sm font-bold text-slate-900 font-['Sora']">
              Prayagraj Local Presence
            </h3>
            <p className="text-xs text-slate-700 max-w-xs mx-auto">
              Our service coverage spans Teliyarganj, Civil Lines, Katra, George Town, Allahpur, Naini, Jhunsi, and surrounding Prayagraj areas.
            </p>
          </div>
        </div>

        {/* Right Column: Contact & Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 font-['Sora']">
                Send an Online Message
              </h2>
              <p className="text-xs text-slate-700">
                Leave your enquiry and we will respond via WhatsApp or call.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-emerald-950 font-['Sora']">
                    Thank You, Message Prepared!
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    For faster response, you can forward this message directly to our official WhatsApp helpline.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href={buildWhatsAppUrl(getWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', subject: 'RO Purifier Enquiry', message: '' });
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-sky-500'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-sky-500'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm text-slate-800"
                  >
                    <option value="RO Purifier Purchase">RO Purifier Purchase (Domestic / Commercial)</option>
                    <option value="RO Repair & Service">RO Repair & Breakdown Service</option>
                    <option value="Spare Parts Availability">Spare Parts & Filters Availability</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                    <option value="General Water Advice">General Water Advice & TDS Testing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Requirement *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type your question or requirement here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      errors.message ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-sky-500'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all text-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl(whatsappMessages.general())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
