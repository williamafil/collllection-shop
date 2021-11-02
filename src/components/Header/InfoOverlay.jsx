import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { ReactComponent as ArrowDownLeft } from "../../images/arrow-down-left.svg";

const InfoOverlay = () => {
  const dispatch = useDispatch();
  const switchOverlayComponentHandler = (componentName) => {
    dispatch(uiActions.switchOverlayComponent(componentName));
  };

  return (
    <div>
      <div className="fixed top-6 left-6">
        <div
          onClick={() => switchOverlayComponentHandler("mobileNav")}
          className="inline-block"
        >
          <ArrowDownLeft className="cursor-pointer transform rotate-45" />
        </div>
      </div>
      <ul className="text-3xl tracking-wider uppercase space-y-8">
        <li>Blog</li>
        <li>About us</li>
      </ul>
    </div>
  );
};

export default InfoOverlay;
