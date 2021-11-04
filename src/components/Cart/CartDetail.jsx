import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import { uiActions } from "../../store/ui-slice";
import clxs from "../../utils/clxs";
import { pathToCheckout } from "../../router";

const CartDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector((state) => state.cart.subTotal);

  const redirectPageHandler = (path) => {
    history.push(path);
    dispatch(uiActions.closeOverlay());
  };

  return (
    <>
      <header className="grid grid-cols-12 mt-10 md:pb-10 md:border-b border-lightOrange-800">
        <div className=" col-span-5 md:col-span-3 xl:col-span-2">
          <h2 className="text-xl tracking-wide">Shopping Cart</h2>
        </div>
        <div
          className={clxs(
            "hidden md:visible",
            "col-span-7 md:col-span-9 xl:col-span-10",
            "md:flex md:flex-col md:justify-start",
          )}
        >
          <div className="flex justify-between items-stretch">
            <div className="px-2 flex flex-col md:w-full md:flex-row md:justify-end">
              <h3 className="py-4 md:p-0 pr-4 w-full md:w-28">Quantity</h3>
            </div>

            <h3 className="px-2 min-w-max md:w-2/6 text-base text-right">
              Total
            </h3>
          </div>
        </div>
      </header>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="my-10 w-full border-t border-lightOrange-800" />

      <footer className="flex flex-col md:flex-row">
        <aside className="md:flex-1 md:pr-20 lg:flex-2">
          <p className="text-sm">Special instructions for seller</p>
          <textarea
            className="w-full md:w-10/12 lg:w-8/12 mt-2 bg-transparent border border-lightOrange-800"
            rows="4"
          />
        </aside>

        <main className="md:flex-1 lg:flex-1">
          <div className="mt-10 md:m-0 flex justify-between">
            <h3>Subtotal</h3>
            <h3>$ {subTotal}</h3>
          </div>
          <p className="mt-6 text-xs">
            Shipping & taxes calculated at checkout
          </p>

          <button
            onClick={() => redirectPageHandler(pathToCheckout)}
            className="mt-3 py-3 w-full bg-lightOrange-800 text-lg tracking-wider text-white text-center"
          >
            Check Out
          </button>
        </main>
      </footer>
    </>
  );
};

export default CartDetail;
