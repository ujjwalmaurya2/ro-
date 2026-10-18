import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Droplets, 
  Filter, 
  Wrench, 
  Factory, 
  Info, 
  PhoneCall 
} from 'lucide-react';

interface CategoryItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    name: 'Water Purifiers',
    path: '/products',
    icon: Droplets,
    description: 'Domestic & commercial RO purifiers',
  },
  {
    name: 'Spare Parts',
    path: '/parts',
    icon: Filter,
    description: 'Genuine filters, membranes & pumps',
  },
  {
    name: 'Services',
    path: '/services',
    icon: Wrench,
    description: 'Repair, filter service & installation',
  },
  {
    name: 'EMC Plants',
    path: '/amc',
    icon: Factory,
    description: 'Annual maintenance contracts & plants',
  },
  {
    name: 'About Us',
    path: '/about',
    icon: Info,
    description: 'Our store, mission & local presence',
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: PhoneCall,
    description: 'Store address, phone & enquiry',
  },
];

export const CategoryNavBar: React.FC = () => {
  const location = useLocation();
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);

  const isCategoryActive = (path: string): boolean => {
    const current = location.pathname;
    if (path === '/products') {
      return current === '/products' || current.startsWith('/products/');
    }
    if (path === '/parts') {
      return current.startsWith('/parts');
    }
    if (path === '/services') {
      return current.startsWith('/services') || current === '/book-service';
    }
    if (path === '/amc') {
      return current.startsWith('/amc');
    }
    if (path === '/about') {
      return current.startsWith('/about');
    }
    if (path === '/contact') {
      return current.startsWith('/contact');
    }
    return false;
  };

  // Smoothly center the active category item into view on mobile navigation
  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [location.pathname]);

  return (
    <div className="border-t border-slate-100/90 bg-white/95 backdrop-blur-md shadow-[0_2px_8px_rgba(15,61,86,0.03)]">
      <div className="max-w-7xl mx-auto">
        <nav
          className="flex items-center justify-start lg:justify-center gap-1.5 sm:gap-2.5 py-2 px-3 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar scroll-smooth"
          aria-label="Category navigation"
        >
          {CATEGORIES.map((category) => {
            const active = isCategoryActive(category.path);
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to={category.path}
                ref={active ? activeLinkRef : undefined}
                aria-current={active ? 'page' : undefined}
                className={`group shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-semibold transition-all duration-150 select-none ${
                  active
                    ? 'bg-sky-50 text-sky-800 border border-sky-300 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-sky-700 hover:bg-slate-50 border border-slate-200/70 bg-white/60'
                }`}
                title={category.description}
              >
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-full transition-colors ${
                    active
                      ? 'bg-sky-100 text-sky-700'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-600'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="whitespace-nowrap tracking-tight">{category.name}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
