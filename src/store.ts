import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/slices/productsSlice";
import filtersReducer from "./features/slices/filtersSlice";
import cartReducer from "./features/slices/cartSlice";
import modalsReducer from "./features/slices/modalSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    filters: filtersReducer,
    cart: cartReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
