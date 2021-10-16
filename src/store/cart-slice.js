import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartShown: false,
  },
  reducers: {
    toggle: (state) => {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
