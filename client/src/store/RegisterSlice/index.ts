import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RegisterType } from "../../types/RegisterType";

const initialRegisterState: RegisterType = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialRegisterState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setPassword } =
  registerSlice.actions;
export default registerSlice.reducer;
