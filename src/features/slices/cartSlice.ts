import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartProductTypes {
  id: string;
  name: string;
  image: string;
  price: number;
  discount: number;
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  cartProducts: CartProductTypes[];
  totalSum: number;
}

const initialState: CartState = {
  cartProducts: [],
  totalSum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProductTypes>) => {
      state.cartProducts.push(action.payload);
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
