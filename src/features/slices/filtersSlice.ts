import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  productsPerPage: number;
}

const initialState: FiltersState = {
  productsPerPage: 24,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setProductPerPage: (state, action: PayloadAction<number>) => {
      state.productsPerPage = action.payload;
    },
  },
});

export const { setProductPerPage } = filtersSlice.actions;

export default filtersSlice.reducer;
