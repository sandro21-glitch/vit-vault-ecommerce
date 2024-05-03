import { createSlice } from "@reduxjs/toolkit";

export interface ArticlesData {
  id: string;
  title: string;
  subTitle: string;
  image: string;
  info: string;
  subInfos: {
    infoTitle: string;
    answer: string;
  }[];
}

export interface ArticlesState {
  articlesData: ArticlesData[] | null;
}

const initialState: ArticlesState = {
  articlesData: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});

export const {} = articlesSlice.actions;

export default articlesSlice.reducer;
