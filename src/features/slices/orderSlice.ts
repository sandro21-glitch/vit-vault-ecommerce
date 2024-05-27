import { createSlice } from "@reduxjs/toolkit";

export interface OrderState {
 
}

const initialState: OrderState = {

};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
});

export const {

} = orderSlice.actions;

export default orderSlice.reducer;
