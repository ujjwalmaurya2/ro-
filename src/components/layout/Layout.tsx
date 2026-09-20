import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomBar } from './MobileBottomBar';
import { CartDrawer } from '../common/CartDrawer';
import { businessConfig } from '../../config/business';

const routeTitles: Record<string, string> = {
  '/': `${businessConfig.name} | RO Water Purifiers, Spare Parts & Service in Prayagraj`,
  '/products': `Water Purifiers Showroom | ${businessConfig.name}`,
  '/parts': `RO Spare Parts & Replacement Filters | ${businessConfig.name}`,
  '/services': `Doorstep RO Repair & Service in Prayagraj | ${businessConfig.name}`,
  '/book-service': `Book RO Service in Prayagraj | ${businessConfig.name}`,
  '/amc': `Annual Maintenance Contracts (AMC) | ${businessConfig.name}`,
  '/about': `About ${businessConfig.name} | Prayagraj Water Purification`,
  '/contact': `Contact & Store Location | ${businessConfig.name}`,
  '/cart': `Enquiry Cart | ${businessConfig.name}`,
  '/checkout': `Order Details & Checkout | ${businessConfig.name}`,
};

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top and set document title on route navigation
  useEffect(() => {
    window.scrollTo(0, 0);

    if (routeTitles[pathname]) {
      document.title = routeTitles[pathname];
    } else if (pathname.startsWith('/products/')) {
      document.title = `Product Details | ${businessConfig.name}`;
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
      <CartDrawer />
    </div>
  );
};
