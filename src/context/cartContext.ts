import { createContext } from 'react';

type CartContextType = {
  cartProducts: string[],
}

// export const CartContext = createContext({
// cartProducts: [],
// setCartProducts: (cartProducts: string[]) => { console.log(cartProducts );},
// });

export const CartContext = createContext<CartContextType>({cartProducts: []});

