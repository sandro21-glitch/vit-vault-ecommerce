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

const storedProducts = localStorage.getItem("products");

export interface CartState {
  cartProducts: CartProductTypes[];
  totalSum: number;
}

const initialState: CartState = {
  cartProducts: storedProducts ? JSON.parse(storedProducts) : [],
  totalSum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProductTypes>) => {
      const { cartProducts } = state;
      const { id, price, discount, quantity } = action.payload;

      const existingProduct = cartProducts.find((item) => item.id === id);
      const discountedPrice = price - (price * (discount || 0)) / 100;

      if (existingProduct) {
        existingProduct.totalPrice +=
          (discount || 0) === null
            ? price * quantity
            : discountedPrice * quantity;
        existingProduct.quantity += quantity;
        const updatedCartProducts = [...cartProducts];
        localStorage.setItem("products", JSON.stringify(updatedCartProducts));
        state.cartProducts = updatedCartProducts;
      } else {
        const totalPrice =
          (discount || 0) === null
            ? price * quantity
            : discountedPrice * quantity;
        const newProduct = { ...action.payload, totalPrice };
        const updatedCartProducts = [...cartProducts, newProduct];
        localStorage.setItem("products", JSON.stringify(updatedCartProducts));
        state.cartProducts = updatedCartProducts;
      }
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
