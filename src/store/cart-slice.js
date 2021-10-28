import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartShown: false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    toggle: (state) => {
      state.isCartShown = !state.isCartShown;
    },
    addProduct: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id,
      );
      state.totalQuantity += newItem.quantity;

      const newTotalPrice = (
        state.totalPrice +
        newItem.price * newItem.quantity
      ).toFixed(2);

      state.totalPrice = +newTotalPrice;

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: newItem.quantity,
          totalPrice: +(newItem.price * newItem.quantity).toFixed(2),
        });
      } else {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = +(
          existingItem.totalPrice +
          newItem.price * newItem.quantity
        ).toFixed(2);
      }
    },
    removeProduct: (state, action) => {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
