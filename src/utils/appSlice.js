import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSideBar: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    hideSideBarInWatchPage: (state) => {
      state.showSideBar = false;
    },
    showSideBarSetToTrue: (state) => {
      state.showSideBar = true;
    },
  },
});

export const { toggleSideBar, hideSideBarInWatchPage, showSideBarSetToTrue } =
  appSlice.actions;
export default appSlice.reducer;
