import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
}

const initialState: User = {} as User;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.setItem("language", "en");
      return {} as User;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
