import { createContext, SetStateAction, Dispatch } from 'react';

export interface ICartContext {
  cartProducts: string[];
  setCartProducts: Dispatch<SetStateAction<string[]>>;
}
export const CartContext = createContext<ICartContext>({cartProducts: [], setCartProducts: () => null});

