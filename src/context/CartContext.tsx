import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';
import { IProduct } from '../types/IProduct';

export interface CartProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
}

export type CartContextType = {
  cartProducts: CartProduct[];
  addProduct: (product: IProduct) => void;
  increaseQuantityProduct: (product: CartProduct) => void;
  decreaseQuantityProduct: (product: CartProduct) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType>({
  cartProducts: [],
  addProduct: () => null,
  increaseQuantityProduct: () => null,
  decreaseQuantityProduct: () => null
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addProduct = (product: IProduct) => {
    const addedItem = { ...product, 'quantity': 1, 'totalPrice': product.price } as CartProduct; 
    setCartProducts([...cartProducts, addedItem]);
  };

  const increaseQuantityProduct = (product: CartProduct) => {
    const prevAddedProducts = cartProducts.map((listedProduct) => {
      if (listedProduct.id == product.id) {
        ++listedProduct.quantity;
        listedProduct.totalPrice = listedProduct.quantity * listedProduct.price;
        return listedProduct;
      } else {
        return listedProduct;
      }
    });
    setCartProducts([...prevAddedProducts]);
  };

  const decreaseQuantityProduct = (product: CartProduct) => {
    const newList = cartProducts.flatMap((prevProduct) => {
      if (prevProduct.id == product.id) {
        if (prevProduct.quantity > 1) {
          prevProduct.quantity--;
          return prevProduct;
        } else {
          return [];
        }
      }
      return prevProduct;
    });
    setCartProducts(newList);
  };

  const contextValue = useMemo(() => ({
    cartProducts: cartProducts,
    addProduct: addProduct,
    increaseQuantityProduct: increaseQuantityProduct,
    decreaseQuantityProduct: decreaseQuantityProduct,
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