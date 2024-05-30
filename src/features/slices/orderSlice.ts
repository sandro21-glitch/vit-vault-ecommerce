import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderedProducts, ShippingData } from "../../types/orderTypes";
import { child, get, push, ref, set } from "firebase/database";
import { database } from "../../config/firebase";

// Async Thunks
export const pushShippedOrdersToFirebase = createAsyncThunk(
  "orders/pushShippedOrders",
  async (
    { userId, shippingData }: { userId: string; shippingData: ShippingData },
    _
  ) => {
    const userShippedOrdersRef = ref(database, `users/${userId}/shippedOrders`);
    const newOrderRef = push(userShippedOrdersRef);
    await set(newOrderRef, shippingData);
    return shippingData;
  }
);

export const fetchShippedOrdersFromFirebase = createAsyncThunk(
  "orders/fetchShippedOrders",
  async (userId: string, _) => {
    const dbRef = ref(database);
    const userShippedOrdersRef = child(dbRef, `users/${userId}/shippedOrders`);
    const snapshot = await get(userShippedOrdersRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const shippedOrders = Object.values(data) as ShippingData[];
      return shippedOrders;
    } else {
      return [];
    }
  }
);
// enum status
enum Status {
  Idle = "idle",
  Loading = "loading",
  Succeeded = "succeeded",
  Failed = "failed",
}

export interface OrderState {
  orders: OrderedProducts[];
  shippedOrders: ShippingData[];
  totalSum: number;
  status: Status;
}

const initialState: OrderState = {
  orders: [],
  shippedOrders: [],
  totalSum: 0,
  status: Status.Idle,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state, action: PayloadAction<OrderedProducts[]>) => {
      state.orders = state.orders.concat(action.payload);
    },
    addShippedOrders: (state, action: PayloadAction<ShippingData>) => {
      state.shippedOrders = state.shippedOrders.concat(action.payload);
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      pushShippedOrdersToFirebase.fulfilled,
      (state, action: PayloadAction<ShippingData>) => {
        state.shippedOrders.push(action.payload);
      }
    );
    builder
      .addCase(
        fetchShippedOrdersFromFirebase.fulfilled,
        (state, action: PayloadAction<ShippingData[]>) => {
          state.shippedOrders = action.payload;
          state.status = Status.Succeeded;
        }
      )
      .addCase(fetchShippedOrdersFromFirebase.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchShippedOrdersFromFirebase.rejected, (state) => {
        state.status = Status.Failed;
      });
  },
});

export const { addOrders, clearOrders, addShippedOrders } = orderSlice.actions;

export default orderSlice.reducer;
