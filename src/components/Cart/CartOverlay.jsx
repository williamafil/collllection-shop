import React from "react";
import { useSelector } from "react-redux";

import EmptyCart from "./EmptyCart";
import CartDetail from "./CartDetail";

const CartOverlay = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return <>{totalQuantity ? <CartDetail /> : <EmptyCart />}</>;
};

export default CartOverlay;
