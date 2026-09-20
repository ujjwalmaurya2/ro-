import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SparePartsPage } from './pages/SparePartsPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookServicePage } from './pages/BookServicePage';
import { AmcPage } from './pages/AmcPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => (
  <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-4">
    <h1 className="text-4xl font-black text-slate-900 font-['Sora']">404</h1>
    <h2 className="text-xl font-bold text-slate-800">Page Not Found</h2>
    <p className="text-xs sm:text-sm text-slate-700">
      The page you requested could not be found. Return to the home page or digital showroom.
    </p>
    <Link
      to="/"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Return to Home</span>
    </Link>
  </div>
);

export function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/:id" element={<ProductDetailPage />} />
              <Route path="parts" element={<SparePartsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="book-service" element={<BookServicePage />} />
              <Route path="amc" element={<AmcPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
