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
const storedSum = localStorage.getItem("sum");

export interface CartState {
  cartProducts: CartProductTypes[];
  totalSum: number;
}

const initialState: CartState = {
  cartProducts: storedProducts ? JSON.parse(storedProducts) : [],
  totalSum: storedSum ? +storedSum : 0,
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
        state.totalSum = state.cartProducts.reduce(
          (sum, product) => sum + product.totalPrice,
          0
        );
        localStorage.setItem("sum", JSON.stringify(state.totalSum));
      } else {
        const totalPrice =
          (discount || 0) === null
            ? price * quantity
            : discountedPrice * quantity;
        const newProduct = { ...action.payload, totalPrice };
        const updatedCartProducts = [...cartProducts, newProduct];
        localStorage.setItem("products", JSON.stringify(updatedCartProducts));
        state.cartProducts = updatedCartProducts;
        state.totalSum = state.cartProducts.reduce(
          (sum, product) => sum + product.totalPrice,
          0
        );
        localStorage.setItem("sum", JSON.stringify(state.totalSum));
      }
    },
    removeCartProduct: (state, action: PayloadAction<string>) => {
      const updtedCart = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      const updatedSum = (state.totalSum = updtedCart.reduce(
        (sum, product) => sum + product.totalPrice,
        0
      ));
      state.totalSum = updatedSum;
      state.cartProducts = updtedCart;
      localStorage.setItem("products", JSON.stringify(updtedCart));
      localStorage.setItem("sum", JSON.stringify(updatedSum));
    },
  },
});

export const { addProductToCart, removeCartProduct } = cartSlice.actions;

export default cartSlice.reducer;
