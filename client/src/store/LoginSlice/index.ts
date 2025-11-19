import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type LoginType } from "../../types/LoginType";

const initialLoginState: LoginType = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = loginSlice.actions;
export default loginSlice.reducer;
