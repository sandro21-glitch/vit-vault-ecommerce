import { createSlice } from "@reduxjs/toolkit";

interface OrderedProducts {
  name: string;
  price: number;
  amount: number;
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
  reducers: {},
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
