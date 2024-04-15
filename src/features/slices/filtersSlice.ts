import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  productsPerPage: number;
  sort: string;
}

const initialState: FiltersState = {
  productsPerPage: 24,
  sort: "normal",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setProductPerPage: (state, action: PayloadAction<number>) => {
      state.productsPerPage = action.payload;
    },
    setPriceSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { setProductPerPage, setPriceSort } = filtersSlice.actions;

export default filtersSlice.reducer;
