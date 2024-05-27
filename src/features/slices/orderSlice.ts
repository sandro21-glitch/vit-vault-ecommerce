import { createSlice } from "@reduxjs/toolkit";

interface OrderedProducts {
  name: string;
  price: number;
  amount: number;
  id: string;
}

export interface OrderState {
  orders: OrderedProducts[];
  totalSum: number;
}

const initialState: OrderState = {
  orders: [],
  totalSum: 0,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state, action) => {
      state.orders = state.orders.concat(action.payload);
    },
  },
});

export const { addOrders } = orderSlice.actions;

export default orderSlice.reducer;
