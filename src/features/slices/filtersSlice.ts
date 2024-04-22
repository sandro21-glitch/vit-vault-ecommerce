import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  productsPerPage: number;
  sort: string;
  filterPrice: number;
}

const initialState: FiltersState = {
  productsPerPage: 24,
  sort: "normal",
  filterPrice: 0,
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
    setFilterPrice: (state, action: PayloadAction<number>) => {
      state.filterPrice = action.payload;
    },
  },
});

export const { setProductPerPage, setPriceSort, setFilterPrice } =
  filtersSlice.actions;

export default filtersSlice.reducer;
