import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "AppSlice",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
