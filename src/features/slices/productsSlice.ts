import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { database } from "../../config/firebase";
import { get, ref } from "firebase/database";
import { Product } from "../../types/ProductTypes";
import { RootState } from "../../store";

// enum status
enum Status {
  Idle = "idle",
  Loading = "loading",
  Succeeded = "succeeded",
  Failed = "failed",
}

// fetch data from Firebase database
export const fetchDataFromFirebase = createAsyncThunk(
  "product/fetchDataFromFirebase",
  async () => {
    try {
      const dataRef = ref(database, "products");
      const snapshot = await get(dataRef);
      return snapshot.exists() ? snapshot.val() : null;
    } catch (error) {
      throw error;
    }
  }
);

export interface ProductState {
  productData: Product[] | null;
  status: Status;
  error: string | null;
  selectedProductId: string | null;
}

const initialState: ProductState = {
  productData: null,
  status: Status.Idle,
  error: null,
  selectedProductId: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProductId: (state, action: PayloadAction<string>) => {
      state.selectedProductId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromFirebase.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchDataFromFirebase.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.productData = action.payload;
      })
      .addCase(fetchDataFromFirebase.rejected, (state) => {
        state.status = Status.Failed;
        state.error = "Error";
      });
  },
});

export const { setSelectedProductId } = productSlice.actions;

export const selectProductData = (state: RootState) =>
  state.product.productData;

export default productSlice.reducer;
