import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

interface UserData {
  email: string;
  password: string;
}
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: UserData, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      return userCredential.user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export interface UserState {
  user: string | null;
  isLoading: boolean;
  error: boolean | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setLoading, setError, clearError, logout } = userSlice.actions;

export default userSlice.reducer;
