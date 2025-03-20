import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    changeMenu: (state, action) => {
      console.log("state passed on menuSlice", action.payload);
      state.menuOpen = action.payload;
    },
  },
});
export const { changeMenu } = MenuSlice.actions;
export const menuOpen = (state: RootState) => state.menu.menuOpen;
export default MenuSlice.reducer;
