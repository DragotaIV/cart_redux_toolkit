import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feautures/cart/cartSlice';
import modalReducer from './feautures/modal/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
