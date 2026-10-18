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
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-700 uppercase tracking-wider">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500">Spare Parts</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
              RO Spare Parts & Filters
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-0.5">
              Genuine-grade membranes, booster pumps, SMPS, and filter cartridges in Prayagraj.
            </p>
          </div>
          {/* Demo Notice */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-[11px] text-sky-800 self-start sm:self-auto shrink-0">
            <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>Need model matching? Send a photo on WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-2.5">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search spare parts (membrane, pump, SMPS, filter bowl)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:border-sky-500 text-xs sm:text-sm text-slate-800 bg-slate-50/50"
          />
        </div>

        {/* Category Horizontally Scrollable Chips */}
        <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-100 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
              className="text-xs text-sky-700 hover:underline shrink-0 ml-auto font-medium pl-2"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Spare Parts Grid: Mobile-First 2-Column Responsive Grid */}
      {filteredParts.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
          <Cpu className="w-8 h-8 text-slate-300 mx-auto" />
          <h3 className="text-sm font-bold text-slate-800 font-['Sora']">No spare parts found</h3>
          <p className="text-xs text-slate-600 max-w-xs mx-auto">
            Check directly with Ajit Aqua Appliances on WhatsApp for compatibility.
          </p>
          <a
            href={buildWhatsAppUrl(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredParts.map((part) => (
            <SparePartCard key={part.id} part={part} />
          ))}
        </div>
      )}

      {/* Part Compatibility Consultation */}
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
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
