import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { ReactComponent as BagIcon } from "../images/bag.svg";
import { ReactComponent as ArrowUp } from "../images/menu-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../images/menu-arrow-down.svg";
import HeaderLogo from "./Header/HeaderLogo";
import {
  pathToHome,
  pathToCheckout,
  pathToLogin,
  pathToAccount,
} from "../router";
import clxs from "../utils/clxs";

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const numberOfCartItems = useSelector((state) => state.cart.totalQuantity);
  const isOverlayShown = useSelector((state) => state.ui.isOverlayShown);
  const overlayComponent = useSelector((state) => state.ui.overlayComponent);

  const showOverlayHandler = (name) => {
    dispatch(uiActions.showOverlay(name));
  };

  const showCartHandler = () => {
    if (isOverlayShown) {
      dispatch(uiActions.switchOverlayComponent("cart"));
    } else {
      dispatch(uiActions.showOverlay("cart"));
    }
  };

  const redirectPageHandler = (path) => {
    if (pathname !== path) history.push(path);
    dispatch(uiActions.closeOverlay());
  };

  const isAtOverlayOrCheckout = pathname === pathToCheckout || isOverlayShown;
  const checkoutPageBgColor = isAtOverlayOrCheckout
    ? "bg-gray-50"
    : "bg-lightOrange-50";
  const borderColor = isOverlayShown ? "border-lightOrange-800" : "border-dark";

  return (
    <>
      {pathname !== pathToCheckout ? (
        <div className={checkoutPageBgColor}>
          <header
            className={clxs(
              "container mx-auto py-20 px-5",
              isOverlayShown ? "hidden lg:block" : "block",
            )}
          >
            <nav className="w-full flex justify-between items-center">
              <div className="left-nav w-full">
                <div
                  onClick={() => showOverlayHandler("mobileNav")}
                  className={clxs(
                    "hamburger-icon",
                    "mb-0.5 lg:hidden w-8 h-7 p-1 cursor-pointer",
                    "flex flex-col justify-around",
                  )}
                >
                  <span
                    className={clxs("w-full h-1 block border-b ", borderColor)}
                  ></span>
                  <span
                    className={clxs("w-full h-1 block border-b ", borderColor)}
                  ></span>
                  <span
                    className={clxs("w-full h-1 block border-b ", borderColor)}
                  ></span>
                </div>
                <div className="hidden lg:block w-full">
                  <ul className="flex space-x-8 tracking-wide">
                    <li>
                      <span
                        onClick={() => redirectPageHandler(pathToHome)}
                        className={clxs(
                          "relative pb-1.5 hover:border-b cursor-pointer flex",
                          borderColor,
                        )}
                      >
                        MAIN
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => showOverlayHandler("shopMenu")}
                        className={clxs(
                          "w-14 relative pb-1.5 hover:border-b cursor-pointer flex",
                          borderColor,
                          overlayComponent === "shopMenu"
                            ? clxs("border-b", borderColor)
                            : "",
                        )}
                      >
                        SHOP{" "}
                        {overlayComponent === "shopMenu" ? (
                          <ArrowDown className="h-3 w-3 absolute right-0 top-1.5" />
                        ) : (
                          <ArrowUp className="h-3 w-3 absolute right-0 top-1.5" />
                        )}
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => showOverlayHandler("info")}
                        className={clxs(
                          "w-14 relative pb-1.5 hover:border-b cursor-pointer flex",
                          borderColor,
                          overlayComponent === "info"
                            ? clxs("border-b", borderColor)
                            : "",
                        )}
                      >
                        INFO{" "}
                        {overlayComponent === "info" ? (
                          <ArrowDown className="h-3 w-3 absolute right-1.5 top-1.5" />
                        ) : (
                          <ArrowUp className="h-3 w-3 absolute right-1.5 top-1.5" />
                        )}
                      </span>
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
                              className={clxs(
                                "pb-2 hover:border-b cursor-pointer",
                                borderColor,
                              )}
                            >
                              Log Out
                            </span>
                          </li>
                          <li>
                            <Link
                              to={pathToAccount}
                              className={clxs(
                                "pb-2 hover:border-b cursor-pointer",
                                borderColor,
                              )}
                            >
                              Account
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li>
                          <span
                            onClick={() => redirectPageHandler(pathToLogin)}
                            className={clxs(
                              "pb-2 hover:border-b cursor-pointer",
                              borderColor,
                            )}
                          >
                            Log In
                          </span>
                        </li>
                      )}

                      <li>
                        <span
                          onClick={() => showOverlayHandler("search")}
                          className={clxs(
                            "pb-2 hover:border-b cursor-pointer",
                            borderColor,
                          )}
                        >
                          Search
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    onClick={showCartHandler}
                    className={clxs(
                      "cursor-pointer",
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
