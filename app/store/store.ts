import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../features/MenuSlice";
export const store = configureStore({
  reducer: { menu: MenuReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
