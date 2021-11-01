import { createSlice } from "@reduxjs/toolkit";
import {
  sumTotalQt,
  sumSubTotal,
  addToCart,
  removeFromCart,
} from "../utils/cart-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartShown: false,
    cartItems: [],
    totalQuantity: 0,
    subTotal: 0,
    shipping: 10,
  },
  reducers: {
    toggle: (state) => {
      state.isCartShown = !state.isCartShown;
    },
    addProduct: (state, action) => {
      const { cartItems, totalQuantity, subTotal } = state;
      const newItem = action.payload;

      state.totalQuantity = sumTotalQt(totalQuantity, newItem.quantity, "add");
      state.subTotal = +sumSubTotal(subTotal, newItem, "add");
      state.cartItems = addToCart(cartItems, newItem);
    },
    removeProduct: (state, action) => {
      const { cartItems, totalQuantity, subTotal } = state;
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (!existingItem) return;
      state.subTotal = +sumSubTotal(subTotal, item, "remove");
      state.totalQuantity = sumTotalQt(totalQuantity, item.quantity, "remove");
      state.cartItems = removeFromCart(cartItems, item);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
