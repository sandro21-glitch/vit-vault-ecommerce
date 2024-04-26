import { createSlice } from "@reduxjs/toolkit";

interface CartProductTypes {
  id: string;
  name: string;
  image: string;
  price: number;
  discount: number;
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  cartProducts: CartProductTypes[] | null;
  totalSum: number;
}

const initialState: CartState = {
  cartProducts: null,
  totalSum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
