import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "AppSlice",
  initialState: {
    isOpen: false,
    darkTheme: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
export const { toggleMenu, closeMenu, toggleDarkTheme } = appSlice.actions;
export default appSlice.reducer;
