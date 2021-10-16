import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import clxs from "../../utils/clxs";
import "../../index.css";
// import style from "./Cart.module.css";

const CartElement = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <section
      className={clxs(
        "pb-10",
        "overflow-hidden",
        "sticky left-0 top-0",
        " bg-lightOrange-50 z-20",
        "w-full text-lightOrange-800 animate-fadeIn",
        props.className,
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
        {/* <CrossIcon className="hover:rotate-90 transition-all duration-150" /> */}
      </div>

      <div className="overflow-y-auto container mx-auto px-8 pt-20">
        <h2 className="text-xl tracking-wide">Shopping Cart</h2>

        <article className="grid grid-cols-12 mt-10">
          <div className=" col-span-3 md:col-span-2 xl:col-span-1">
            <div className="pt-1.5 w-16 sm:w-20 lg:w-24">
              <img
                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                alt="product"
              />
            </div>
          </div>
          <div className=" col-span-9 md:col-span-12 xl:col-span-11 flex flex-col justify-between">
            <div className="flex justify-between  items-stretch">
              <div className="px-2 flex flex-col md:w-full md:flex-row md:justify-between">
                <h3 className="text-base leading-6">
                  Herman Miller Aeron Stool version 2
                </h3>
                <div className="pr-4 flex w-full">
                  <button className="py-1 pr-4 text-base">-</button>
                  <input
                    className="w-full bg-transparent text-center text-base"
                    type="number"
                    value="2"
                  />
                  <button className="py-1 pl-4 text-base">+</button>
                </div>
              </div>

              <div className="pl-2 min-w-max text-base">$ 1788.95</div>
            </div>
            <div className="pl-2">
              <p className="text-xs tracking-wide cursor-pointer">
                Remove Item
              </p>
            </div>
          </div>
        </article>

        <article className="grid grid-cols-12 mt-12">
          <div className=" col-span-3 md:col-span-2 xl:col-span-1">
            <div className="pt-1.5 w-16 sm:w-20 lg:w-24">
              <img
                src="https://images.unsplash.com/photo-1608319294852-d87737e8e46c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="product"
              />
            </div>
          </div>
          <div className=" col-span-9 md:col-span-10 xl:col-span-11 flex flex-col justify-between">
            <div className="flex justify-between  items-stretch">
              <div className="px-2 flex flex-col md:w-full md:flex-row md:justify-between">
                <h3 className="text-base">Nike Air Force Low</h3>
                <div className="pr-4 flex w-full">
                  <button className="py-1 pr-4 text-base">-</button>
                  <input
                    className="w-full bg-transparent text-center text-base"
                    type="number"
                    value="1"
                  />
                  <button className="py-1 pl-4 text-base">+</button>
                </div>
              </div>

              <div className="pl-2 min-w-max text-base">$ 139.99</div>
            </div>
            <div className="pl-2">
              <p className="text-xs tracking-wide cursor-pointer">
                Remove Item
              </p>
            </div>
          </div>
        </article>

        <article className="grid grid-cols-12 mt-10">
          <div className=" col-span-3 md:col-span-2 xl:col-span-1">
            <div className="pt-1.5 w-16 sm:w-20 lg:w-24">
              <img
                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                alt="product"
              />
            </div>
          </div>
          <div className=" col-span-9 md:col-span-12 xl:col-span-11 flex flex-col justify-between">
            <div className="flex justify-between  items-stretch">
              <div className="px-2 flex flex-col md:w-full md:flex-row md:justify-between">
                <h3 className="text-base leading-6">
                  Herman Miller Aeron Stool version 2
                </h3>
                <div className="pr-4 flex w-full">
                  <button className="py-1 pr-4 text-base">-</button>
                  <input
                    className="w-full bg-transparent text-center text-base"
                    type="number"
                    value="2"
                  />
                  <button className="py-1 pl-4 text-base">+</button>
                </div>
              </div>

              <div className="pl-2 min-w-max text-base">$ 1788.95</div>
            </div>
            <div className="pl-2">
              <p className="text-xs tracking-wide cursor-pointer">
                Remove Item
              </p>
            </div>
          </div>
        </article>

        <article className="grid grid-cols-12 mt-12">
          <div className=" col-span-3 md:col-span-2 xl:col-span-1">
            <div className="pt-1.5 w-16 sm:w-20 lg:w-24">
              <img
                src="https://images.unsplash.com/photo-1608319294852-d87737e8e46c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="product"
              />
            </div>
          </div>
          <div className=" col-span-9 md:col-span-10 xl:col-span-11 flex flex-col justify-between">
            <div className="flex justify-between  items-stretch">
              <div className="px-2 flex flex-col md:w-full md:flex-row md:justify-between">
                <h3 className="text-base">Nike Air Force Low</h3>
                <div className="pr-4 flex w-full">
                  <button className="py-1 pr-4 text-base">-</button>
                  <input
                    className="w-full bg-transparent text-center text-base"
                    type="number"
                    value="1"
                  />
                  <button className="py-1 pl-4 text-base">+</button>
                </div>
              </div>

              <div className="pl-2 min-w-max text-base">$ 139.99</div>
            </div>
            <div className="pl-2">
              <p className="text-xs tracking-wide cursor-pointer">
                Remove Item
              </p>
            </div>
          </div>
        </article>

        <article className="grid grid-cols-12 mt-10">
          <div className=" col-span-3 md:col-span-2 xl:col-span-1">
            <div className="pt-1.5 w-16 sm:w-20 lg:w-24">
              <img
                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                alt="product"
              />
            </div>
          </div>
          <div className=" col-span-9 md:col-span-12 xl:col-span-11 flex flex-col justify-between">
            <div className="flex justify-between  items-stretch">
              <div className="px-2 flex flex-col md:w-full md:flex-row md:justify-between">
                <h3 className="text-base leading-6">
                  Herman Miller Aeron Stool version 2
                </h3>
                <div className="pr-4 flex w-full">
                  <button className="py-1 pr-4 text-base">-</button>
                  <input
                    className="w-full bg-transparent text-center text-base"
                    type="number"
                    value="2"
                  />
                  <button className="py-1 pl-4 text-base">+</button>
                </div>
              </div>

              <div className="pl-2 min-w-max text-base">$ 1788.95</div>
            </div>
            <div className="pl-2">
              <p className="text-xs tracking-wide cursor-pointer">
                Remove Item
              </p>
            </div>
          </div>
        </article>

        <div className="my-10 w-full border-t border-lightOrange-800" />

        <div>
          <p className="text-sm">Special instructions for seller</p>
          <textarea
            className="w-full mt-2 bg-transparent border border-lightOrange-800"
            rows="3"
          />
        </div>

        <div className="mt-10 flex justify-between">
          <h3>Subtotal</h3>
          <h3>$ 234.56</h3>
        </div>
        <p className="mt-6 text-xs">Shipping & taxes calculated at checkout</p>

        <button className="mt-3 py-2 w-full bg-lightOrange-800 text-sm tracking-wider text-white text-center">
          Check Out
        </button>
      </div>
    </section>
  );
};

const CartTwo = () => {
  // const portalElement = document.getElementById("overlay");

  return (
    <>
      <CartElement />
    </>
  );
};

export default CartTwo;
