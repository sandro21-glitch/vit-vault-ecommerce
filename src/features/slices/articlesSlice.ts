import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articlesData from "../../data/articles.json";
export interface SubInfo {
  infoTitle: string;
  answer: string;
}

export interface ArticlesData {
  id: string;
  title: string;
  subTitle: string | null;
  image: string;
  info: string | null;
  subInfos: SubInfo[] | null;
}

export const fetchArticlesData = createAsyncThunk(
  "articles/fetchArticlesData",
  async () => {
    try {
      const articles: ArticlesData[] = articlesData.articles;
      return articles;
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  }
);
export interface ArticlesState {
  articlesData: ArticlesData[] | null;
  status: string;
}

const initialState: ArticlesState = {
  articlesData: null,
  status: "idle",
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticlesData.fulfilled, (state, action) => {
        state.articlesData = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchArticlesData.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {} = articlesSlice.actions;

export default articlesSlice.reducer;
