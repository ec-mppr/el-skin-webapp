import { createContext } from 'react';

type CartContextType = {
  cartProducts: string[],
}
export const CartContext = createContext<CartContextType>({cartProducts: []});

