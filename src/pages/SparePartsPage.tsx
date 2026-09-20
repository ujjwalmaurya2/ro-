import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Cpu, 
  Wrench, 
  MessageCircle, 
  Info
} from 'lucide-react';
import { sparePartsData } from '../data/spareParts';
import { SparePartCard } from '../components/common/SparePartCard';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const SparePartsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Spare Parts' },
    { id: 'membrane', label: 'RO Membranes' },
    { id: 'filters', label: 'Sediment & Carbon' },
    { id: 'pumps', label: 'Booster Pumps' },
    { id: 'electrical', label: 'SMPS & UV Lamps' },
    { id: 'valves', label: 'Valves & Restrictors' },
    { id: 'fittings-tanks', label: 'Pipes & Tanks' },
  ];

  const filteredParts = useMemo(() => {
    return sparePartsData.filter((part) => {
      const matchesCategory =
        selectedCategory === 'all' || part.category === selectedCategory;

      const matchesSearch =
        part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.compatibility.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-700">Spare Parts Catalogue</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
          RO Spare Parts & Replacement Filters
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
          Genuine-grade RO membranes, booster pumps, SMPS adapters, pre-filter bowls, carbon cartridges, and food-grade plumbing fittings in Prayagraj.
        </p>

        {/* Demo Notice */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-800">
          <Info className="w-4 h-4 text-sky-600 shrink-0" />
          <span>Spare parts catalogue with demo pricing. Need an exact fit for your model? Send a photo on WhatsApp!</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search spare parts (e.g. membrane, pump, 24V SMPS, filter bowl, pipe)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 text-sm text-slate-800 bg-slate-50/50"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}

          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-sky-700 hover:underline ml-auto font-medium"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      {/* Spare Parts Grid */}
      {filteredParts.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
          <Cpu className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 font-['Sora']">No spare parts found</h3>
          <p className="text-xs text-slate-700 max-w-sm mx-auto">
            Try searching for a different component name or check directly with us on WhatsApp.
          </p>
          <a
            href={buildWhatsAppUrl(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredParts.map((part) => (
            <SparePartCard key={part.id} part={part} />
          ))}
        </div>
      )}

      {/* Part Compatibility Consultation */}
      <div className="bg-sky-50 border border-sky-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-sky-800 font-bold text-xs uppercase tracking-wider">
            <Wrench className="w-4 h-4 text-sky-600" />
            <span>Unsure which spare part fits your RO?</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-['Sora']">
            Send Us a Photo of Your Purifier or Part on WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 max-w-xl">
            Take a quick photo of your water purifier cabinet, pump label, or filter candle. Our Prayagraj technician will identify the exact compatible replacement part.
          </p>
        </div>

        <a
          href={buildWhatsAppUrl(whatsappMessages.sparePartPhotoMatch())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all shrink-0"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Send Photo on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
