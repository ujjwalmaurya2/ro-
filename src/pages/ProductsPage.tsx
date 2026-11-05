import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Droplets, 
  MessageCircle, 
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';
import { productsData } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

const BRANDS = [
  { id: 'all', label: 'All Brands' },
  { id: 'KENT', label: 'KENT' },
  { id: 'Aquaguard', label: 'Aquaguard' },
  { id: 'Livpure', label: 'Livpure' },
  { id: 'Havells', label: 'Havells' },
  { id: 'Blue Mount', label: 'Blue Mount' },
  { id: 'Urban Company Native', label: 'Urban Company Native' },
];

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'all' || product.category === selectedCategory;

        const matchesBrand =
          selectedBrand === 'all' ||
          product.brand.toLowerCase() === selectedBrand.toLowerCase() ||
          (selectedBrand === 'Urban Company Native' && product.brand.includes('Urban Company'));

        const matchesTech =
          selectedTech === 'all' || !!product.technology?.toLowerCase().includes(selectedTech.toLowerCase());

        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.model.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          (product.technology ?? '').toLowerCase().includes(query);

        return matchesCategory && matchesBrand && matchesTech && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
  }, [selectedCategory, selectedBrand, selectedTech, searchQuery, sortBy]);

  const handleBrandChange = (brandId: string) => {
    setSelectedBrand(brandId);
    if (brandId === 'all') {
      searchParams.delete('brand');
    } else {
      searchParams.set('brand', brandId);
    }
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedBrand('all');
    setSelectedCategory('all');
    setSelectedTech('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedBrand !== 'all' || selectedCategory !== 'all' || selectedTech !== 'all' || sortBy !== 'featured';

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-700 uppercase tracking-wider">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-500">Showroom Catalog</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Sora']">
              RO Water Purifier Catalog
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-0.5">
              Genuine branded domestic, alkaline, and mineral water purifiers with doorstep installation in Prayagraj.
            </p>
          </div>
          {/* Authentic Service Assurance Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-900 self-start sm:self-auto shrink-0 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
            <span>100% Genuine Machines • Free Delivery & Setup Enquiry</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="bg-white p-3 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
        {/* Search & Sort Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
          {/* Search Input */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by model (e.g. Grand, Eterna, M1), brand, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Technology Filter & Sort Controls */}
          <div className="sm:col-span-6 grid grid-cols-2 gap-2">
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              aria-label="Filter by purification technology"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 text-xs sm:text-sm text-slate-800 bg-slate-50/50 cursor-pointer"
            >
              <option value="all">All Purification Tech</option>
              <option value="RO">RO Purifiers</option>
              <option value="UV">RO + UV</option>
              <option value="UF">RO + UV + UF</option>
              <option value="Alkaline">Copper + Alkaline</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              aria-label="Sort products by price or popularity"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 text-xs sm:text-sm text-slate-800 bg-slate-50/50 cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Brand Tabs (Primary Brand Filter) */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <Filter className="w-3 h-3 text-sky-600" /> Filter by Brand:
            </span>
            <span className="text-[11px] font-semibold text-slate-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'purifier' : 'purifiers'} found
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {BRANDS.map((brand) => {
              const count = brand.id === 'all' 
                ? productsData.length 
                : productsData.filter(p => p.brand.toLowerCase() === brand.id.toLowerCase() || (brand.id === 'Urban Company Native' && p.brand.includes('Urban Company'))).length;
              const isSelected = selectedBrand === brand.id;

              return (
                <button
                  key={brand.id}
                  onClick={() => handleBrandChange(brand.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-sky-600 text-white shadow-xs scale-102 ring-2 ring-sky-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span>{brand.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Sub-Filters */}
        <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
            Type:
          </span>
          {[
            { id: 'all', label: 'All Types' },
            { id: 'domestic', label: 'Standard Domestic RO' },
            { id: 'alkaline', label: 'Alkaline & Mineral Series' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-sky-100 text-sky-800 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
          
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold shrink-0 ml-auto pl-2 cursor-pointer flex items-center gap-0.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Results Grid: Responsive (1-col mobile, 2-col tablet, 3-col desktop, 4-col xl) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3 p-6">
          <Droplets className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 font-['Sora']">No water purifiers match your filters</h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto">
            Try choosing a different brand, resetting search keywords, or contacting us directly for custom models.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4.5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Direct WhatsApp Consultation Strip */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-bold text-emerald-950 font-['Sora'] flex items-center justify-center sm:justify-start gap-1.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Need advice selecting the right RO for your area in Prayagraj?</span>
          </h3>
          <p className="text-xs sm:text-sm text-emerald-800">
            Tell us your locality or water source (Borewell / Nagar Nigam / Tanker) on WhatsApp. We will recommend the exact model and share best purchase pricing.
          </p>
        </div>
        <a
          href={buildWhatsAppUrl(whatsappMessages.general())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all shrink-0 cursor-pointer active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
