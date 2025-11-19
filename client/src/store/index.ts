import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
import registerReducer from "./RegisterSlice";
import interactionReducer from "./InteractionSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    interaction: interactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
