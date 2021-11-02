import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { pathToLogin } from "../../router";

const MobileNavOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginHandler = () => {
    history.push(pathToLogin);
    dispatch(uiActions.closeOverlay());
  };
  return (
    <div>
      <ul className="text-3xl tracking-wider uppercase space-y-8">
        <li>Main</li>
        <li>Shop</li>
        <li>Info</li>
      </ul>
      <ul className="mt-28 space-y-4 tracking-wide">
        <li>
          <span onClick={loginHandler} className="py-1 pr-2 cursor-pointer">
            Log in
          </span>
        </li>
        <li>Create account</li>
      </ul>
    </div>
  );
};

export default MobileNavOverlay;
