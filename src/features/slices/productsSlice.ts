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
}

const initialState: ProductState = {
  productData: null,
  status: Status.Idle,
  error: null,
  selectedProductId: null,
  filteredProducts: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProductId: (state, action: PayloadAction<string>) => {
      state.selectedProductId = action.payload;
    },
    setFilteredProducts: (state, action: PayloadAction<string>) => {
      const { productData } = state;
      const searchTerm = action.payload.toLowerCase().trim(); 

      if (!searchTerm) {
        state.filteredProducts = [];
      } else if (productData) {
        state.filteredProducts = productData.filter((data) =>
          data.name.toLowerCase().startsWith(searchTerm)
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

export const { setSelectedProductId, setFilteredProducts } =
  productSlice.actions;

export const selectProductData = (state: RootState) =>
  state.product.productData;

export const selectFilteredProducts = (
  state: RootState,
  category: string,
  filterPrice: number,
  sort: string
) => {
  const { productData } = state.product;

  return productData
    ?.filter((product) => {
      return (
        (product.price <= filterPrice &&
          product.category === category.replace(/-/g, " ")) ||
        product.type === category.replace(/-/g, " ")
      );
    })
    .sort((a, b) => {
      if (sort === "lowest") {
        return b.price - a.price;
      } else if (sort === "highest") {
        return a.price - b.price;
      }
      return 0;
    });
};

export default productSlice.reducer;
