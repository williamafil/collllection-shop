import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { uiActions } from "../store/ui-slice";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { ReactComponent as BagIcon } from "../images/bag.svg";
import HeaderLogo from "./Header/HeaderLogo";
import {
  pathToHome,
  pathToCheckout,
  pathToLogin,
  pathToAccount,
} from "../router";
import clxs from "../utils/clxs";
import style from "./Header.module.css";

// TODO: Shop link, More link, Search toggle

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const numberOfCartItems = useSelector((state) => state.cart.totalQuantity);
  const isOverlayShown = useSelector((state) => state.ui.isOverlayShown);

  const cartToggleHandler = () => {
    dispatch(cartActions.toggle());
  };

  const showMobileNavHandler = () => {
    dispatch(uiActions.showOverlay("mobileNav"));
  };

  const showCartHandler = () => {
    if (isOverlayShown) {
      dispatch(uiActions.switchOverlayComponent("cart"));
    } else {
      dispatch(uiActions.showOverlay("cart"));
    }
  };

  const isAtOverlayOrCheckout = pathname === pathToCheckout || isOverlayShown;

  return (
    <>
      {pathname !== pathToCheckout ? (
        <div
          className={isAtOverlayOrCheckout ? "bg-gray-50" : "bg-lightOrange-50"}
        >
          <header
            className={clxs(
              "container mx-auto py-20 px-5",
              isOverlayShown ? "hidden lg:block" : "block",
            )}
          >
            <nav className="w-full flex justify-between items-center">
              <div className="left-nav w-full">
                <div
                  onClick={showMobileNavHandler}
                  className={clxs(
                    "hamburger-icon lg:hidden w-8 h-8 p-1 cursor-pointer",
                    "flex flex-col justify-around",
                  )}
                >
                  <span
                    className={clxs(
                      "w-full h-1 block border-b ",
                      isOverlayShown
                        ? " border-lightOrange-800"
                        : "border-dark",
                    )}
                  ></span>
                  <span
                    className={clxs(
                      "w-full h-1 block border-b ",
                      isOverlayShown
                        ? " border-lightOrange-800"
                        : "border-dark",
                    )}
                  ></span>
                  <span
                    className={clxs(
                      "w-full h-1 block border-b ",
                      isOverlayShown
                        ? " border-lightOrange-800"
                        : "border-dark",
                    )}
                  ></span>
                </div>
                <div className="hidden lg:block w-full">
                  <ul className="flex space-x-8">
                    <li>
                      <Link
                        to={pathToHome}
                        className={style.header__link_item}
                        href="#"
                      >
                        MAIN
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className={style.header__link_item}>
                        SHOP
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className={style.header__link_item}>
                        More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={clxs(
                  "min-w-min",
                  isOverlayShown ? "invisible" : "visible",
                  pathname !== "/checkout" ? "w-1/3" : "w-full",
                )}
              >
                <HeaderLogo />
              </div>

              <div className="right-nav w-full">
                <div className="h-ful flex justify-end">
                  <div className="hidden lg:block w-full pr-8">
                    <ul className="h-full flex justify-end items-center space-x-8">
                      {currentUser ? (
                        <>
                          <li>
                            <span
                              onClick={() => auth.signOut()}
                              className={style.header__link_item}
                            >
                              Log Out
                            </span>
                          </li>
                          <li>
                            <Link
                              to={pathToAccount}
                              className={style.header__link_item}
                            >
                              Account
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li>
                          <Link
                            to={pathToLogin}
                            className={style.header__link_item}
                          >
                            Log In
                          </Link>
                        </li>
                      )}

                      <li>
                        <Link className={style.header__link_item} to="/">
                          Search
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    onClick={showCartHandler}
                    className={clxs(
                      "pb-0.5 cursor-pointer",
                      "flex justify-center items-center ",
                    )}
                  >
                    <BagIcon className="h-7 my-auto" />
                    <span className="ml-1 text-base">{numberOfCartItems}</span>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
