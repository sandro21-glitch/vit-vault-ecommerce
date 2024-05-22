import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, database } from "../../config/firebase";
import { ref, set, update } from "firebase/database";

export interface UserData {
  email: string;
  password: string;
  name?: string;
  surname?: string;
}

export interface UserDataState {
  email: string;
  uid: string;
  name?: string;
  surname?: string;
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
      const { uid, email } = userCredential.user;
      if (!email) {
        throw new Error("Email cannot be null");
      }
      await set(ref(database, "users/" + uid), {
        uid,
        email,
        name: "",
        surname: "",
      });
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
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

export const signOutUser = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await auth.signOut();
    } catch (error: any) {
      return rejectWithValue(error.message || "Sign out failed");
    }
  }
);

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async ({
    uid,
    name,
    surname,
  }: {
    uid: string;
    name?: string;
    surname?: string;
  }) => {
    try {
      await update(ref(database, `users/${uid}`), { name, surname });
      return { uid, name, surname };
    } catch (error) {
      throw new Error("Failed to update user data");
    }
  }
);

export const saveUserData = createAsyncThunk(
  "user/saveUserData",
  async (userData: UserDataState, { rejectWithValue }) => {
    try {
      const { uid, email, name, surname } = userData;
      await set(ref(database, `users/${uid}`), { uid, email, name, surname });
      return userData;
    } catch (error: any) {
      return rejectWithValue(error.message || "Saving user data failed");
    }
  }
);

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
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
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
      })
      .addCase(saveUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveUserData.fulfilled, (state, action) => {
        if (state.user) {
          state.user.name = action.payload.name;
          state.user.surname = action.payload.surname;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(saveUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        if (state.user) {
          state.user.name = action.payload.name;
          state.user.surname = action.payload.surname;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
