import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';
import { IProduct } from '../types/IProduct';

export interface CartProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export type CartContextType = {
  cartProducts: CartProduct[];
  setCartProducts: Dispatch<SetStateAction<CartProduct[]>>;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType>({cartProducts: [], setCartProducts: () => null});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const contextValue = useMemo(() => ({
    cartProducts: cartProducts,
    setCartProducts: setCartProducts
  }), [cartProducts]);

  return <CartContext value={contextValue}>
    {children}
  </CartContext>;
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};