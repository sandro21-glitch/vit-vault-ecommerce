import { createSlice } from "@reduxjs/toolkit";

export interface ModalsState {
  sidebar: boolean;
  loginSidebar: boolean;
}

const initialState: ModalsState = {
  sidebar: false,
  loginSidebar: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebar = true;
    },
    openLoginSidebar: (state) => {
      state.loginSidebar = true;
    },
    closeSidebar: (state) => {
      state.sidebar = false;
    },
    closeLoginSidebar: (state) => {
      state.loginSidebar = false;
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  openLoginSidebar,
  closeLoginSidebar,
} = modalsSlice.actions;

export default modalsSlice.reducer;
