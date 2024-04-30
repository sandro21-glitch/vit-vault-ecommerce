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
        existingProduct.totalPrice += (discountedPrice || price) * quantity;
        existingProduct.quantity += quantity;
      } else {
        const totalPrice = (discountedPrice || price) * quantity;
        const newProduct: CartProductTypes = { ...action.payload, totalPrice };
        cartProducts.push(newProduct);
      }

      state.totalSum = cartProducts.reduce(
        (sum, product) => sum + product.totalPrice,
        0
      );
      localStorage.setItem("products", JSON.stringify(cartProducts));
      localStorage.setItem("sum", JSON.stringify(state.totalSum));
    },
    removeCartProduct: (state, action: PayloadAction<string>) => {
      // remove the product from the cart
      const updatedCart = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      // calculate the updated total sum
      const updatedSum = (state.totalSum = updatedCart.reduce(
        (sum, product) => sum + product.totalPrice,
        0
      ));
      // update the cart state and total sum
      state.totalSum = updatedSum;
      state.cartProducts = updatedCart;
      // update local storage
      localStorage.setItem("products", JSON.stringify(updatedCart));
      localStorage.setItem("sum", JSON.stringify(updatedSum));
    },
    increaseAmount: (
      state,
      action: PayloadAction<{
        id: string;
        newCount: number;
      }>
    ) => {
      const { id, newCount } = action.payload;

      const { cartProducts } = state;
      const existingProduct = cartProducts.find((item) => item.id === id);
      if (existingProduct) {
        const discountedPrice =
          existingProduct.price -
          (existingProduct.price * (existingProduct.discount || 0)) / 100;
        existingProduct.totalPrice =
          (discountedPrice || existingProduct.price) * newCount;
        existingProduct.quantity = newCount;

        state.totalSum = cartProducts.reduce(
          (sum, product) => sum + product.totalPrice,
          0
        );
        localStorage.setItem("products", JSON.stringify(cartProducts));
        localStorage.setItem("sum", JSON.stringify(state.totalSum));
      }
    },
    decreaseAmount: (
      state,
      action: PayloadAction<{
        id: string;
        newCount: number;
      }>
    ) => {
      const { id, newCount } = action.payload;
      const { cartProducts } = state;
      const existingProduct = cartProducts.find((item) => item.id === id);

      if (existingProduct) {
        const discountedPrice =
          existingProduct.price -
          (existingProduct.price * (existingProduct.discount || 0)) / 100;
        existingProduct.totalPrice =
          (discountedPrice || existingProduct.price) * newCount;
        existingProduct.quantity = newCount;

        state.totalSum = cartProducts.reduce(
          (sum, product) => sum + product.totalPrice,
          0
        );
        localStorage.setItem("products", JSON.stringify(cartProducts));
        localStorage.setItem("sum", JSON.stringify(state.totalSum));
      }
    },
  },
});

export const {
  addProductToCart,
  removeCartProduct,
  increaseAmount,
  decreaseAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
