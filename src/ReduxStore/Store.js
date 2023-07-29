import { configureStore } from '@reduxjs/toolkit';
import ecomReducer from "./EcomSlice"

export const store = configureStore({
  reducer: {
    ecom: ecomReducer,
  },
});
