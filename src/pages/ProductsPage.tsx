import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Droplets, 
  MessageCircle, 
  Info
} from 'lucide-react';
import { productsData } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'all' || product.category === selectedCategory;

        const matchesTech =
          selectedTech === 'all' || product.technology.includes(selectedTech);

        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesTech && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
  }, [selectedCategory, selectedTech, searchQuery, sortBy]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-700 uppercase tracking-wider">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500">Showroom</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
              RO Water Purifiers
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-0.5">
              Domestic, alkaline, and commercial RO purifiers in Prayagraj.
            </p>
          </div>
          {/* Demo Disclaimer notice */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-[11px] text-sky-800 self-start sm:self-auto shrink-0">
            <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>Showroom configurations • Enquire for live stock</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-2.5">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
          {/* Search Input */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search model, technology, or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:border-sky-500 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50"
            />
          </div>

          {/* Technology Filter & Sort Controls */}
          <div className="sm:col-span-6 grid grid-cols-2 gap-2">
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              aria-label="Filter by purification technology"
              className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-sky-500 text-xs sm:text-sm text-slate-800 bg-slate-50/50"
            >
              <option value="all">All Tech</option>
              <option value="RO">RO Purifiers</option>
              <option value="UV">RO + UV</option>
              <option value="UF">RO + UV + UF</option>
              <option value="Alkaline">Copper + Alkaline</option>
              <option value="Commercial">Commercial RO</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              aria-label="Sort products by price or popularity"
              className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-sky-500 text-xs sm:text-sm text-slate-800 bg-slate-50/50"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Horizontally Scrollable Category Chips */}
        <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-100 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-semibold text-slate-500 shrink-0 flex items-center gap-1 mr-0.5">
            <Filter className="w-3 h-3 text-sky-600" /> Filter:
          </span>
          {[
            { id: 'all', label: 'All Purifiers' },
            { id: 'domestic', label: 'Domestic RO' },
            { id: 'alkaline', label: 'Alkaline & Mineral' },
            { id: 'commercial', label: 'Commercial Plants' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
          
          {(searchQuery || selectedCategory !== 'all' || selectedTech !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTech('all');
              }}
              className="text-xs text-sky-700 hover:underline shrink-0 ml-auto font-medium pl-2"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Product Results Grid: Mobile-First 2-Column Responsive Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
          <Droplets className="w-8 h-8 text-slate-300 mx-auto" />
          <h3 className="text-sm font-bold text-slate-800 font-['Sora']">No purifiers found</h3>
          <p className="text-xs text-slate-600 max-w-xs mx-auto">
            Try a different filter or search term.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedTech('all');
            }}
            className="mt-1 px-3.5 py-1.5 bg-sky-600 text-white text-xs font-semibold rounded-lg"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Direct WhatsApp Consultation Strip */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-emerald-950 font-['Sora']">
            Looking for a specific purifier brand or custom setup?
          </h3>
          <p className="text-xs text-emerald-800">
            Share your water requirement with Ajit Aqua Appliances on WhatsApp for pricing and availability.
          </p>
        </div>
        <a
          href={buildWhatsAppUrl(whatsappMessages.general())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
