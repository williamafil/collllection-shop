import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { uiActions } from "../../store/ui-slice";
import {
  pathToAccount,
  pathToHome,
  pathToLogin,
  pathToSignup,
} from "../../router";

const MobileNavOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);

  const redirectPageHandler = (path) => {
    if (pathname !== path) history.push(path);
    dispatch(uiActions.closeOverlay());
  };

  const switchOverlayComponentHandler = (componentName) => {
    dispatch(uiActions.switchOverlayComponent(componentName));
  };

  const notLoggedIn = () => (
    <ul className="mt-28 space-y-4 tracking-wide">
      <li>
        <span
          onClick={() => redirectPageHandler(pathToLogin)}
          className="py-1 pr-2 cursor-pointer"
        >
          Log in
        </span>
      </li>
      <li
        onClick={() => redirectPageHandler(pathToSignup)}
        className="py-1 pr-2 cursor-pointer"
      >
        Create account
      </li>
    </ul>
  );

  const userIsLoggedIn = () => (
    <ul className="mt-28 space-y-4 tracking-wide">
      {currentUser.firstName !== "" && (
        <li>
          <span
            onClick={() => redirectPageHandler(pathToAccount)}
            className="py-1 pr-2 cursor-pointer"
          >
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
  );

  return (
    <div>
      <ul className="text-3xl tracking-wider uppercase space-y-8">
        <li className="cursor-pointer">
          <span onClick={() => redirectPageHandler(pathToHome)}>Main</span>
        </li>
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
      {!currentUser ? notLoggedIn() : userIsLoggedIn()}
    </div>
  );
};

export default MobileNavOverlay;
