import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import clxs from "../../utils/clxs";

const CartWrapper = ({ children }) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <section
      className={clxs(
        "pb-10",
        " bg-lightOrange-50 z-30",
        "w-full min-h-max text-lightOrange-800 animate-fadeIn",
      )}
    >
      <div
        onClick={toggleCartHandler}
        className={clxs(
          "w-8 h-8 absolute top-4 right-4 cursor-pointer",
          "flex flex-col justify-center items-center",
          "transform transition-all hover:rotate-90",
        )}
      >
        <span className="absolute h-px w-full bg-lightOrange-800 rotate-45"></span>
        <span className="absolute h-px w-full bg-lightOrange-800 -rotate-45"></span>
      </div>
      <div className="container mx-auto px-8 pt-20">{children}</div>
    </section>
  );
};

export default CartWrapper;
