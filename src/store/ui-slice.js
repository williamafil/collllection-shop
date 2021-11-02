import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isOverlayShown: false,
    overlayComponent: null,
  },
  reducers: {
    showOverlay: (state, action) => {
      state.isOverlayShown = true;
      state.overlayComponent = action.payload;
    },
    switchOverlayComponent: (state, action) => {
      state.overlayComponent = action.payload;
    },
    closeOverlay: (state) => {
      state.isOverlayShown = false;
      state.overlayComponent = null;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
