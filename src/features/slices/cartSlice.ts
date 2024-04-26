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
      const payload = action.payload;
      const { cartProducts } = state;
      const checkId = cartProducts.find((item) => item.id === payload.id);
      const discountedPrice =
        payload.price - (payload.price * payload.discount) / 100;

      if (checkId && payload.id === checkId.id) {
        (checkId.totalPrice +=
          payload.discount === null
            ? payload.price * payload.quantity
            : discountedPrice * payload.quantity),
          (checkId.quantity += payload.quantity);
      } else {
        const product = {
          ...payload,
          totalPrice:
            payload.discount === null
              ? payload.price * payload.quantity
              : discountedPrice * payload.quantity,
        };
        state.cartProducts.push(product);
      }
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
