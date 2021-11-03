import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { uiActions } from "../../store/ui-slice";
import { pathToLogin, pathToSignup } from "../../router";
import { current } from "immer";

const MobileNavOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.currentUser);

  const loginHandler = () => {
    history.push(pathToLogin);
    dispatch(uiActions.closeOverlay());
  };

  const signupHandler = () => {
    history.push(pathToSignup);
    dispatch(uiActions.closeOverlay());
  };

  const switchOverlayComponentHandler = (componentName) => {
    dispatch(uiActions.switchOverlayComponent(componentName));
  };

  return (
    <div>
      <ul className="text-3xl tracking-wider uppercase space-y-8">
        <li className="cursor-pointer">Main</li>
        <li className="cursor-pointer">
          <span onClick={() => switchOverlayComponentHandler("shopMenu")}>
            Shop
          </span>
        </li>
        <li className="cursor-pointer">
          <span onClick={() => switchOverlayComponentHandler("info")}>
            Info
          </span>
        </li>
      </ul>
      {!currentUser ? (
        <ul className="mt-28 space-y-4 tracking-wide">
          <li>
            <span onClick={loginHandler} className="py-1 pr-2 cursor-pointer">
              Log in
            </span>
          </li>
          <li onClick={signupHandler} className="py-1 pr-2 cursor-pointer">
            Create account
          </li>
        </ul>
      ) : (
        <ul className="mt-28 space-y-4 tracking-wide">
          {currentUser.firstName !== "" && (
            <li>
              <span className="py-1 pr-2">
                Logged in as {currentUser.firstName}
              </span>
            </li>
          )}

          <li>
            <span
              onClick={() => auth.signOut()}
              className="py-1 pr-2 cursor-pointer"
            >
              Log out
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavOverlay;
