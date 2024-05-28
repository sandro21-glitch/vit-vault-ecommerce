import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderedProducts } from "../../types/orderTypes";

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
    addOrders: (state, action: PayloadAction<OrderedProducts>) => {
      state.orders = state.orders.concat(action.payload);
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrders, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
