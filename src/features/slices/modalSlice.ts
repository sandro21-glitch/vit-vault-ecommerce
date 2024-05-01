import { createSlice } from "@reduxjs/toolkit";

export interface ModalsState {
  sidebar: boolean;
}

const initialState: ModalsState = {
  sidebar: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebar = true;
    },
    closeSidebar: (state) => {
      state.sidebar = false;
    },
  },
});

export const { openSidebar, closeSidebar } = modalsSlice.actions;

export default modalsSlice.reducer;
