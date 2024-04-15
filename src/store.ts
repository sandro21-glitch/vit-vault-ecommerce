import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/slices/productsSlice";
import filtersReducer from "./features/slices/filtersSlice"; // Correct import
export const store = configureStore({
  reducer: {
    product: productReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
