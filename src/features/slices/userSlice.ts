import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export interface UserData {
  email: string;
  password: string;
}

export interface UserDataState {
  email: string;
  uid: string;
}

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: UserData, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      const { uid, email } = userCredential.user;
      if (!email) {
        throw new Error("Email cannot be null");
      }
      return { uid, email };
    } catch (error: any) {
      return rejectWithValue(error.message || "Registration failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: UserData, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password);
      const { uid, email } = userCredential.user;
      if (!email) {
        throw new Error("Email cannot be null");
      }
      return { uid, email };
    } catch (error: any) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

export const signOutUser = createAsyncThunk("auth/signOut", async (_, { rejectWithValue }) => {
  try {
    await auth.signOut();
  } catch (error: any) {
    return rejectWithValue(error.message || "Sign out failed");
  }
});

export interface UserState {
  user: UserDataState | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        // Do not clear the error state here
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(signOutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
