import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderedProducts, ShippingData } from "../../types/orderTypes";

export interface OrderState {
  orders: OrderedProducts[];
  shippedOrders: ShippingData[];
  totalSum: number;
}

const initialState: OrderState = {
  orders: [],
  shippedOrders: [],
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
    addShippedOrders: (state, action: PayloadAction<ShippingData>) => {
      state.shippedOrders = state.shippedOrders.concat(action.payload);
    },
  },
});

export const { addOrders, clearOrders, addShippedOrders } = orderSlice.actions;

export default orderSlice.reducer;
