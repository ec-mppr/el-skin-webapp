import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { CartAction, cartReducer } from '../reducer/cartReducer';

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

type CartContextType = {
  state: { cartProducts: CartProduct[] };
  dispatch: React.Dispatch<CartAction>;
}
const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {cartProducts: []});

  return <CartContext value={{state: state, dispatch: dispatch}}>
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