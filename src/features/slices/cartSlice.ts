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

      // check if the product is already in the cart
      const existingProduct = cartProducts.find((item) => item.id === id);
      const discountedPrice = price - (price * (discount || 0)) / 100;

      if (existingProduct) {
        // If the product exists, update its quantity and total price
        existingProduct.totalPrice +=
          (discount || 0) === null
            ? price * quantity
            : discountedPrice * quantity;
        existingProduct.quantity += quantity;

        // update the cart state and total sum
        const updatedCartProducts = [...cartProducts];
        localStorage.setItem("products", JSON.stringify(updatedCartProducts));
        state.cartProducts = updatedCartProducts;
        // calculate the total sum considering discounted prices
        state.totalSum = state.cartProducts.reduce((sum, product) => {
          const price = product.discount ? discountedPrice : product.price;
          return sum + price * product.quantity;
        }, 0);

        localStorage.setItem("sum", JSON.stringify(state.totalSum));
      } else {
        // If the product is not in the cart, add it
        const totalPrice =
          (discount || 0) === null
            ? price * quantity
            : discountedPrice * quantity;
        const newProduct = { ...action.payload, totalPrice };
        const updatedCartProducts = [...cartProducts, newProduct];
        localStorage.setItem("products", JSON.stringify(updatedCartProducts));

        // update the cart state and total sum
        state.cartProducts = updatedCartProducts;
        state.totalSum = state.cartProducts.reduce((sum, product) => {
          const price = product.discount ? discountedPrice : product.price;
          return sum + price * product.quantity;
        }, 0);
        localStorage.setItem("sum", JSON.stringify(state.totalSum));
      }
    },
    removeCartProduct: (state, action: PayloadAction<string>) => {
      // Remove the product from the cart
      const updatedCart = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      // Calculate the updated total sum
      const updatedSum = (state.totalSum = updatedCart.reduce(
        (sum, product) => sum + product.totalPrice,
        0
      ));
      // Update the cart state and total sum
      state.totalSum = updatedSum;
      state.cartProducts = updatedCart;
      // Update local storage
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
        // Calculate the discounted price
        const existingProductPrice = existingProduct.price;
        const existingProductdiscount = existingProduct.discount;
        const discountedPrice =
          existingProductPrice -
          (existingProductPrice * (existingProductdiscount || 0)) / 100;

        // Update the total price and quantity of the existing product
        existingProduct.totalPrice =
          (existingProductdiscount || 0) === null
            ? existingProductPrice * newCount
            : discountedPrice * newCount;
        existingProduct.quantity = newCount;

        // Update the cart state and total sum
        const updatedCartProducts = [...cartProducts];
        state.totalSum = state.cartProducts.reduce((sum, product) => {
          const price = product.discount ? discountedPrice : product.price;
          return sum + price * product.quantity;
        }, 0);
        // Update local storage
        localStorage.setItem("products", JSON.stringify(updatedCartProducts));
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
      console.log(newCount);

      if (existingProduct) {
        // calculate the discounted price
        const existingProductPrice = existingProduct.price;
        const existingProductdiscount = existingProduct.discount;
        const discountedPrice =
          existingProductPrice -
          (existingProductPrice * (existingProductdiscount || 0)) / 100;

        // Update the total price and quantity of the existing product
        existingProduct.totalPrice =
          (existingProductdiscount || 0) === null
            ? existingProductPrice * newCount
            : discountedPrice * newCount;
        existingProduct.quantity = newCount;

        // Update the cart state and total sum
        const updatedCartProducts = [...cartProducts];
        state.totalSum = state.cartProducts.reduce((sum, product) => {
          const price = product.discount ? discountedPrice : product.price;
          return sum + price * product.quantity;
        }, 0);

        // Update local storage
        localStorage.setItem("products", JSON.stringify(updatedCartProducts));
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
