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
  filteredProducts: Product[] | null;
  productsByCategory: Product[] | null;
  searchTerm: string;
}

const initialState: ProductState = {
  productData: null,
  status: Status.Idle,
  error: null,
  selectedProductId: null,
  filteredProducts: null,
  productsByCategory: null,
  searchTerm: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProductId: (state, action: PayloadAction<string>) => {
      state.selectedProductId = action.payload;
    },
    setFilteredProducts: (state) => {
      const { productData, searchTerm } = state;

      if (productData && searchTerm !== "") {
        state.filteredProducts = productData.filter((data) =>
          data.name.toLowerCase().startsWith(searchTerm)
        );
      }
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload.toLowerCase().trim();
    },
    setProductsByCategory: (state, action: PayloadAction<string>) => {
      if (state.productData) {
        state.productsByCategory = state.productData?.filter(
          (data) =>
            data.category.toLowerCase() === action.payload.toLowerCase() ||
            data?.type?.toLowerCase() === action.payload.toLowerCase()
        );
      }
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

export const {
  setSelectedProductId,
  setFilteredProducts,
  setSearchTerm,
  setProductsByCategory,
} = productSlice.actions;

export const selectProductData = (state: RootState) =>
  state.product.productData;

export default productSlice.reducer;
