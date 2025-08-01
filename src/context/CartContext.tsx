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
  data: { cartQuantityTotal: number, cartPriceTotal: number };
}
const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartProducts: [] });

  const cartQuantityTotal = state.cartProducts.reduce((total, product) => total + product.quantity, 0);

  const cartPriceTotal = state.cartProducts.reduce((total, product) => total + product.price, 0);

  return <CartContext value={{ state: state, dispatch: dispatch, data: { cartQuantityTotal: cartQuantityTotal, cartPriceTotal: cartPriceTotal } }}>
    {children}
  </CartContext>;
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    console.error('useCartContext must be used within a CartProvider');
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};