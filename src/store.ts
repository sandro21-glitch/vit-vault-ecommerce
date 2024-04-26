import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/slices/productsSlice";
import filtersReducer from "./features/slices/filtersSlice";
import cartReducer from "./features/slices/cartSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    filters: filtersReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
