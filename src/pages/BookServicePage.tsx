import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Wrench, 
  MessageCircle, 
  CheckCircle2, 
  Send,
  Info
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { isValidIndianPhone } from '../utils/formatters';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const getDefaultBookingDate = (): string => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
};

export const BookServicePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState(() => ({
    name: '',
    phone: '',
    serviceType: searchParams.get('service') || 'RO Repair & Breakdown',
    brand: 'Kent',
    model: '',
    locality: businessConfig.serviceAreas[0]?.name || 'Civil Lines',
    address: '',
    date: getDefaultBookingDate(),
    timeSlot: 'Morning (09:00 AM – 12:00 PM)',
    problem: '',
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmittedDemo, setIsSubmittedDemo] = useState(false);

  const serviceOptions = [
    'RO Repair & Breakdown',
    'Routine Servicing & Sanitization',
    'Filter Replacement (Sediment/Carbon)',
    'RO Membrane Replacement',
    'RO Installation / Wall Mounting',
    'Uninstallation / Home Relocation',
    'TDS Level Testing & Water Check',
    'Water Leakage Fix',
    'Low Water Flow Issue',
    'No Water Output / Dead Machine',
    'Annual Maintenance Contract (AMC)',
    'Other Service Requirement'
  ];

  const brandOptions = [
    'Kent',
    'Aquaguard',
    'Livpure',
    'Pureit',
    'Aqua Grand',
    'Havells',
    'Custom Assembled Domestic RO',
    'Commercial RO Plant',
    'Other / Not Sure'
  ];

  const timeSlots = [
    'Morning (09:00 AM – 12:00 PM)',
    'Afternoon (12:00 PM – 03:00 PM)',
    'Evening (03:00 PM – 06:00 PM)',
    'Late Evening (06:00 PM – 08:30 PM)'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile number';
    } else if (!isValidIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }
    if (!formData.locality) newErrors.locality = 'Please select your locality in Prayagraj';
    if (!formData.address.trim()) newErrors.address = 'Please enter your street address / landmark';
    if (!formData.date) newErrors.date = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getWhatsAppMessage = () => {
    return (
      `Hello ${businessConfig.name}, I would like to book an RO service in Prayagraj:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Mobile: ${formData.phone}\n` +
      `• Service Type: ${formData.serviceType}\n` +
      `• Brand / Model: ${formData.brand} ${formData.model ? `(${formData.model})` : ''}\n` +
      `• Locality in Prayagraj: ${formData.locality}\n` +
      `• Address: ${formData.address}\n` +
      `• Preferred Date: ${formData.date}\n` +
      `• Preferred Time: ${formData.timeSlot}\n` +
      `• Problem Description: ${formData.problem || 'Standard check-up'}\n\n` +
      `Please review my request and confirm the appointment schedule.`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmittedDemo(true);
    }
  };

  const handleSendViaWhatsAppDirect = () => {
    if (validate()) {
      const url = buildWhatsAppUrl(getWhatsAppMessage());
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5 text-sky-600" />
          <span>Doorstep Technician Dispatch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
          Book RO Service in Prayagraj
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
          Schedule an expert RO service technician visit for repair, filter replacement, installation, or periodic maintenance.
        </p>
      </div>

      {/* Confirmation Modal / State (Factually safe demo handling) */}
      {isSubmittedDemo ? (
        <div className="bg-white rounded-3xl border border-sky-200 p-8 sm:p-10 shadow-xl space-y-6 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 font-['Sora']">
              Your Service Request Has Been Prepared
            </h2>
            <p className="text-sm text-slate-700 max-w-md mx-auto">
              Your request is ready. Send it to Ajit Aqua Appliances on WhatsApp so the team can review your details and confirm the appointment.
            </p>
          </div>

          {/* Request Summary Card */}
          <div className="max-w-md mx-auto bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-700">Customer Name:</span>
              <span className="font-semibold text-slate-900">{formData.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-700">Contact Number:</span>
              <span className="font-semibold text-slate-900">{formData.phone}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-700">Service Required:</span>
              <span className="font-semibold text-sky-700">{formData.serviceType}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-700">Locality:</span>
              <span className="font-semibold text-slate-900">{formData.locality}, Prayagraj</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-700">Preferred Slot:</span>
              <span className="font-semibold text-slate-900">{formData.date} • {formData.timeSlot.split('(')[0]}</span>
            </div>
          </div>

          {/* Direct WhatsApp Action */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={buildWhatsAppUrl(getWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Service Request on WhatsApp</span>
            </a>

            <button
              onClick={() => setIsSubmittedDemo(false)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Edit Details
            </button>
          </div>

          <p className="text-[11px] text-slate-700 italic">
            *Demo booking workflow: Connecting via WhatsApp enables direct coordination with the service coordinator.
          </p>
        </div>
      ) : (
        /* The Booking Form */
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          
          {/* Customer Info Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-['Sora'] border-b border-slate-100 pb-2">
              1. Your Contact Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Chandra"
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
                  10-Digit Mobile Number *
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
            </div>
          </div>

          {/* Service & Purifier Details */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-slate-900 font-['Sora'] border-b border-slate-100 pb-2">
              2. Service & Machine Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Service Category *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm text-slate-800"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  RO Purifier Brand / Make
                </label>
                <select
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm text-slate-800"
                >
                  {brandOptions.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  RO Model Name / Number (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grand Plus 10L, Kent Prime, or Assembled RO"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Location & Address in Prayagraj */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-slate-900 font-['Sora'] border-b border-slate-100 pb-2">
              3. Service Location in Prayagraj
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Locality / Area in Prayagraj *
                </label>
                <select
                  value={formData.locality}
                  onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
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
                  Street Address, House No. & Landmark *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Flat 302, Near Hanuman Mandir"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                    errors.address ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50 focus:border-sky-500'
                  }`}
                />
                {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
              </div>
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-slate-900 font-['Sora'] border-b border-slate-100 pb-2">
              4. Preferred Schedule & Problem Description
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm text-slate-800"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Problem Description / Special Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the problem, e.g., low water pressure, strange taste, beep sound, machine not turning on..."
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-sky-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Review & Prepare Service Request</span>
            </button>

            <button
              type="button"
              onClick={handleSendViaWhatsAppDirect}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Send Service Request on WhatsApp</span>
            </button>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 flex items-center gap-2">
            <Info className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Doorstep technician service available 7 days a week (9:00 AM – 8:30 PM) across Prayagraj.</span>
          </div>

        </form>
      )}
    </div>
  );
};
