import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { useCart, UseCartReturn } from 'hooks/useCart';

export interface CartProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<UseCartReturn>({} as UseCartReturn);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cart = useCart();
  return <CartContext value={cart}>
    {children}
  </CartContext>;
};

export const useCartContext = (): UseCartReturn => {
  const context = useContext(CartContext);
  if (!context) {
    console.error('useCartContext must be used within a CartProvider');
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};