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
  },
  reducers: {
    toggle: (state) => {
      state.isCartShown = !state.isCartShown;
    },
    addProduct: (state, action) => {
      const { cartItems, totalQuantity, subTotal } = state;

      const newItem = action.payload;
      const {
        id: newItemId,
        price: newItemPrice,
        quantity: newItemQuantity,
      } = newItem;

      // state.totalQuantity += newItem.quantity;
      // state.totalQuantity = sumTotalQt(totalQuantity, newItemQuantity, "add");
      state.totalQuantity = sumTotalQt(totalQuantity, newItemQuantity, "add");

      // const newSubTotal = (
      //   state.subTotal +
      //   newItem.price * newItem.quantity
      // ).toFixed(2);
      // state.subTotal = +newSubTotal;
      state.subTotal = +sumSubTotal(subTotal, newItem, "add");

      // const existingItem = state.cartItems.find(
      //   (item) => item.id === newItem.id,
      // );

      // if (!existingItem) {
      //   state.cartItems.push({
      //     ...newItem,
      //     quantity: newItem.quantity,
      //     totalPrice: +(newItem.price * newItem.quantity).toFixed(2),
      //   });
      // } else {
      //   existingItem.quantity += action.payload.quantity;
      //   existingItem.totalPrice = +(
      //     existingItem.totalPrice +
      //     newItem.price * newItem.quantity
      //   ).toFixed(2);
      // }
      state.cartItems = addToCart(cartItems, newItem);
    },
    removeProduct: (state, action) => {
      const { cartItems, totalQuantity, subTotal } = state;
      const item = action.payload;
      const { id: itemId, price: itemPrice, quantity: itemQuantity } = item;

      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (!existingItem) return;
      state.subTotal = +sumSubTotal(subTotal, item, "remove");
      state.totalQuantity = sumTotalQt(totalQuantity, itemQuantity, "remove");
      state.cartItems = removeFromCart(cartItems, item);
      // if (existingItem) {
      // state.subTotal = +(
      //   state.subTotal -
      //   existingItem.price * action.payload.quantity
      // ).toFixed(2);

      // state.totalQuantity -= action.payload.quantity;

      // if (
      //   existingItem.quantity === 1 ||
      //   action.payload.quantity === existingItem.quantity
      // ) {
      //   const newItems = state.cartItems.filter(
      //     (item) => item.id !== action.payload.id,
      //   );
      //   state.cartItems = [...newItems];
      // } else if (existingItem.quantity > 1) {
      //   existingItem.quantity -= action.payload.quantity;
      //   existingItem.totalPrice = +(
      //     existingItem.totalPrice -
      //     existingItem.price * action.payload.quantity
      //   ).toFixed(2);
      // }
      // } else {
      //   return state;
      // }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
