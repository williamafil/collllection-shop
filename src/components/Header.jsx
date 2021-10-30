import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { ReactComponent as BagIcon } from "../images/bag.svg";
import clxs from "../utils/clxs";
import style from "./Header.module.css";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const numberOfCartItems = useSelector((state) => state.cart.totalQuantity);

  const cartToggleHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <>
      {pathname !== "/checkout" ? (
        <div
          className={
            pathname === "/checkout" ? "bg-white" : "bg-lightOrange-50"
          }
        >
          <header className={clxs("container mx-auto py-10 px-5")}>
            <nav className="w-full flex justify-between items-center">
              <div className="left-nav w-full">
                <div className="lg:hidden hamburger-icon w-8 h-8 p-1 flex flex-col justify-around cursor-pointer">
                  <span className="w-full h-1 block border-b border-dark"></span>
                  <span className="w-full h-1 block border-b border-dark"></span>
                  <span className="w-full h-1 block border-b border-dark"></span>
                </div>
                <div className="hidden lg:block w-full">
                  <ul className="flex space-x-8">
                    <li>
                      <a className={style.header__link_item} href="#">
                        MAIN
                      </a>
                    </li>
                    <li>
                      <a className={style.header__link_item} href="#">
                        SHOP
                      </a>
                    </li>
                    <li>
                      <a className={style.header__link_item} href="#">
                        More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={clxs(
                  "min-w-min",
                  pathname !== "/checkout" ? "w-1/3" : "w-full",
                )}
              >
                <Link to="/" className="h-full w-full">
                  <div className="w-full text-center">
                    <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl leading-5">
                      collllect
                    </h1>
                    <h2 className="w-full text-2xs md:text-xs lg:text-sm">
                      Mine & Yours
                    </h2>
                  </div>
                </Link>
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
                              to="/account"
                              className={style.header__link_item}
                            >
                              Account
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li>
                          <Link
                            to="/login"
                            className={style.header__link_item}
                            href="#"
                          >
                            Log In
                          </Link>
                        </li>
                      )}

                      <li>
                        <a className={style.header__link_item} href="#">
                          Search
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    onClick={cartToggleHandler}
                    className={`${style.header__link_item} flex justify-end items-center pb-0.5`}
                  >
                    <BagIcon className="w-7" />
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
