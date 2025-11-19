import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type InteractionType } from "../../types/InteractionType";

const initialInteractionState: InteractionType = {
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState: initialInteractionState,
  reducers: {
    setIsRegisterModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isRegisterModalOpen = action.payload;
    },
    setIsLoginModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isLoginModalOpen = action.payload;
    },
  },
});

export default interactionSlice.reducer;
export const { setIsRegisterModalOpen, setIsLoginModalOpen } =
  interactionSlice.actions;
