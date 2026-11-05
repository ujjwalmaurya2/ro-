import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { productsData } from '../data/products';
import { sparePartsData } from '../data/spareParts';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  type: 'product' | 'spare-part';
  quantity: number;
  brandOrCategory?: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalCount: number;
  subtotal: number;
  totalSavings: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_STORAGE_KEY = 'ajeet_aqua_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved: CartItem[] = JSON.parse(
        localStorage.getItem(CART_STORAGE_KEY) || localStorage.getItem('ajit_aqua_cart_v1') || '[]'
      );
      // Re-price saved carts from the catalogue so stale prices never reach totals; drop discontinued items.
      return saved.flatMap((item) => {
        const current = [...productsData, ...sparePartsData].find((p) => p.id === item.id);
        return current
          ? [{ ...item, name: current.name, price: current.price, originalPrice: current.originalPrice, image: current.image }]
          : [];
      });
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore localStorage quota errors
    }
  }, [items]);

  const addItem = (itemToAdd: Omit<CartItem, 'quantity'>, qty: number = 1) => {
    // Toast outside the state updater: updaters must stay pure (StrictMode runs them twice).
    const inCart = items.some((item) => item.id === itemToAdd.id);
    showToast(inCart ? `Updated quantity for "${itemToAdd.name}" in cart` : `Added "${itemToAdd.name}" to cart`, inCart ? 'info' : 'success');
    setItems((prev) =>
      prev.some((item) => item.id === itemToAdd.id)
        ? prev.map((item) => (item.id === itemToAdd.id ? { ...item, quantity: item.quantity + qty } : item))
        : [...prev, { ...itemToAdd, quantity: qty }]
    );
  };

  const removeItem = (id: string) => {
    const item = items.find((i) => i.id === id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      showToast(`Removed "${item.name}" from cart`, 'info');
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalSavings = items.reduce((acc, item) => {
    if (item.originalPrice && item.originalPrice > item.price) {
      return acc + (item.originalPrice - item.price) * item.quantity;
    }
    return acc;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalCount,
        subtotal,
        totalSavings,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
