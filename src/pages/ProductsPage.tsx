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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-700">Digital Showroom</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Sora']">
          RO Water Purifiers Showroom
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
          Browse our digital showroom of domestic, alkaline, and commercial RO purifiers. Compatible with borewell and municipal water sources across Prayagraj.
        </p>

        {/* Demo Disclaimer notice */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-800">
          <Info className="w-4 h-4 text-sky-600 shrink-0" />
          <span>Demo showroom models shown. Models, brands, and prices can be confirmed with Ajit Aqua Appliances.</span>
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by purifier model, technology, or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50"
            />
          </div>

          {/* Technology Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              aria-label="Filter by purification technology"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 text-sm text-slate-800 bg-slate-50/50"
            >
              <option value="all">All Technologies</option>
              <option value="RO">RO Purifiers</option>
              <option value="UV">RO + UV Systems</option>
              <option value="UF">RO + UV + UF</option>
              <option value="Alkaline">Copper + Alkaline RO</option>
              <option value="Commercial">Commercial RO</option>
            </select>
          </div>

          {/* Sort Control */}
          <div className="md:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              aria-label="Sort products by price or popularity"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 text-sm text-slate-800 bg-slate-50/50"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Category Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-700 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Category:
          </span>
          {[
            { id: 'all', label: 'All Purifiers' },
            { id: 'domestic', label: 'Domestic RO' },
            { id: 'alkaline', label: 'Alkaline & Mineral' },
            { id: 'commercial', label: 'Commercial Plants (25-50 LPH)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
              className="text-xs text-sky-700 hover:underline ml-auto font-medium"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Product Results Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
          <Droplets className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 font-['Sora']">No purifiers found</h3>
          <p className="text-xs text-slate-700 max-w-sm mx-auto">
            We couldn't find any products matching your active filters. Try searching for "Alkaline" or "Commercial" or reset filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedTech('all');
            }}
            className="mt-2 px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-lg"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Direct WhatsApp Consultation Strip */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
