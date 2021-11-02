import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import clxs from "../../utils/clxs";
import Header from "../Header";

const OverlayWrapper = ({ children }) => {
  const dispatch = useDispatch();

  const closeOverlayHandler = () => {
    dispatch(uiActions.closeOverlay());
  };

  const overlayComponentHandler = (componentName) => {
    dispatch(uiActions.switchOverlayComponent(componentName));
  };

  return (
    <section
      className={clxs(
        "pb-10",
        "bg-gray-50 z-30",
        // "bg-lightOrange-50 z-30",
        "w-full min-h-screen text-lightOrange-800 ",
      )}
    >
      <div
        onClick={closeOverlayHandler}
        className={clxs(
          "w-8 h-8 absolute top-4 right-4 cursor-pointer",
          "flex flex-col justify-center items-center",
          "animate-fadeIn",
          "transform transition-all hover:rotate-90",
        )}
      >
        <span className="absolute h-px w-full bg-lightOrange-800 rotate-45"></span>
        <span className="absolute h-px w-full bg-lightOrange-800 -rotate-45"></span>
      </div>
      <Header />
      <div className="container mx-auto px-8 pt-24 animate-fadeIn">
        {/* <ul>
          <li onClick={() => overlayComponentHandler("cart")}>Cart</li>
          <li onClick={() => overlayComponentHandler("search")}>Search</li>
        </ul> */}
        <div>{children}</div>
      </div>
    </section>
  );
};

export default OverlayWrapper;
