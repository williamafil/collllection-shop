import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartShown: false,
    cartItems: [],
  },
  reducers: {
    toggle: (state) => {
      state.isCartShown = !state.isCartShown;
    },
    addProduct: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
