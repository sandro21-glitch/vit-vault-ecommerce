import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface ProductState {

}

const initialState: ProductState = {

};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
