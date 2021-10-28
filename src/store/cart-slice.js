import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartShown: false,
    cartItems: [],
    totalQuantity: 0,
    subTotal: 0,
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

      const newSubTotal = (
        state.subTotal +
        newItem.price * newItem.quantity
      ).toFixed(2);

      state.subTotal = +newSubTotal;

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
    removeProduct: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        state.subTotal = +(
          state.subTotal -
          existingItem.price * action.payload.quantity
        ).toFixed(2);
        state.totalQuantity -= action.payload.quantity;

        if (existingItem.quantity > 1) {
          existingItem.quantity -= action.payload.quantity;
          existingItem.totalPrice = +(
            existingItem.totalPrice -
            existingItem.price * action.payload.quantity
          ).toFixed(2);
        } else if (existingItem.quantity === 1) {
          const newItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id,
          );
          state.cartItems = [...newItems];
        }
      } else {
        return state;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
