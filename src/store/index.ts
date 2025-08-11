import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    products: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;