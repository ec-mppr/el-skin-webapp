import { CartProduct } from '../context/CartContext';
import { IProduct } from '../types/IProduct';

export type CartAction = {
    type: CartActionType;
    cartProduct?: CartProduct;
    productToAdd?: IProduct;
}

export enum CartActionType {
    ADD_PRODUCT = 'ADD_PRODUCT',
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
    DECREASE_QUANTITY = 'DECREASE_QUANTITY',
}

export type CartState = {
    cartProducts: CartProduct[]
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
  case CartActionType.ADD_PRODUCT: {
    if (action.productToAdd) {
      const addedItem = { ...action.productToAdd, 'quantity': 1, 'totalPrice': action.productToAdd.price } as CartProduct;
      const newState = ({ cartProducts: [...state.cartProducts, addedItem] });
      return newState;
    }
    return state;
  }
  case CartActionType.INCREASE_QUANTITY: {
    if (action.cartProduct) {
      const prevAddedProducts = state.cartProducts.map((prevProduct) => {
        if (prevProduct.id == action.cartProduct?.id) {
          const updatedCartItem = { ...prevProduct };
          updatedCartItem.quantity = updatedCartItem.quantity + 1;
          updatedCartItem.totalPrice = updatedCartItem.quantity * updatedCartItem.price;
          return updatedCartItem;
        } else {
          return prevProduct;
        }
      });
      const newState = ({ cartProducts: [...prevAddedProducts] });
      return newState;
    }
    return state;
  }
  case CartActionType.DECREASE_QUANTITY: {
    if (action.cartProduct) {
      const prevAddedProducts = state.cartProducts.flatMap((prevProduct) => {
        if (prevProduct.id == action.cartProduct?.id) {
          if (prevProduct.quantity > 1) {
            const updatedCartItem = { ...prevProduct };
            updatedCartItem.quantity = updatedCartItem.quantity - 1;
            updatedCartItem.totalPrice = updatedCartItem.quantity * updatedCartItem.price;
            return updatedCartItem;
          } else {
            return [];
          }
        }
        return prevProduct;
      });
      const newState = ({ cartProducts: [...prevAddedProducts] });
      return newState;
    }
    return state;
  }
  }
};