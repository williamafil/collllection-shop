import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../components/Header/HeaderLogo";
import clxs from "../utils/clxs";

const Checkout = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <header className="my-6 lg:hidden w-full flex justify-center">
        <HeaderLogo />
      </header>

      <aside className="lg:order-2 w-full bg-gray-50 h-full lg:pt-10">
        <header className="mb-3 container mx-auto px-6 bg-gray-50 border-t border-b border-gray-200 py-3 lg:hidden">
          <div className="flex justify-between">
            <h2 className="text-lg">Order Summery</h2>
            <h2 className="text-lg font-bold">$ 283.95</h2>
          </div>
        </header>

        <main className="container mx-auto px-6 lg:px-10">
          <ul className="order-items my-4">
            <li className="w-full h-20 flex">
              <div className="w-9/12 flex items-center">
                <div className="relative w-16 h-16">
                  <img
                    className="object-cover rounded-xl border border-gray-200"
                    src="//cdn.shopify.com/s/files/1/0180/2353/products/SmokedWoodServingBowl_small.jpg?v=1633090196"
                    alt="pic"
                  />
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 rounded-full text-white text-sm flex justify-center items-center">
                    <span>3</span>
                  </div>
                </div>
                <h2 className="ml-3 text-sm tracking-wide">
                  Smoked Wood Serving Bowl
                </h2>
              </div>
              <div className="w-3/12 h-full flex justify-end items-center ">
                <span className="">$ 422.99</span>
              </div>
            </li>
            <li className="w-full h-20 flex">
              <div className="w-9/12 flex items-center">
                <div className="relative w-16 h-16">
                  <img
                    className="object-cover rounded-xl border border-gray-200"
                    src="//cdn.shopify.com/s/files/1/0180/2353/products/SmokedWoodServingBowl_small.jpg?v=1633090196"
                    alt="pic"
                  />
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 rounded-full text-white text-sm flex justify-center items-center">
                    <span>3</span>
                  </div>
                </div>
                <h2 className="ml-3 text-sm tracking-wide">
                  Smoked Wood Serving Bowl
                </h2>
              </div>
              <div className="w-3/12 h-full flex justify-end items-center ">
                <span className="">$ 422.99</span>
              </div>
            </li>
            <li className="w-full h-20 flex">
              <div className="w-9/12 flex items-center">
                <div className="relative w-16 h-16">
                  <img
                    className="object-cover rounded-xl border border-gray-200"
                    src="//cdn.shopify.com/s/files/1/0180/2353/products/SmokedWoodServingBowl_small.jpg?v=1633090196"
                    alt="pic"
                  />
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 rounded-full text-white text-sm flex justify-center items-center">
                    <span>3</span>
                  </div>
                </div>
                <h2 className="ml-3 text-sm tracking-wide">
                  Smoked Wood Serving Bowl
                </h2>
              </div>
              <div className="w-3/12 h-full flex justify-end items-center ">
                <span className="">$ 422.99</span>
              </div>
            </li>
          </ul>
        </main>
        <footer className="border-b border-gray-200">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="w-full  border-t border-gray-300"></div>
            <div className="py-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <p>$ 456.78</p>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <p>$ 28.00</p>
              </div>
            </div>
            <div className="w-full  border-t border-gray-300"></div>
            <div className="flex justify-between items-center bg-gray-50 py-3">
              <span>Total</span>
              <p className="text-2xl">
                <span className="text-sm text-gray-600 pr-2">CAD</span>$328.99
              </p>
            </div>
          </div>
        </footer>
      </aside>

      <main className="lg:order-1 w-full lg:pt-14">
        <div className="hidden lg:block container mx-auto px-6">
          <HeaderLogo />
        </div>
        <footer className="container mx-auto px-6 bg-white">
          <div className="w-full my-6 border-t border-gray-600"></div>
          <ul className="text-xs text-gray-700 tracking-wide flex space-x-4">
            <li>Refund policy</li>
            <li>Privacy policy</li>
            <li>Terms of service</li>
          </ul>
        </footer>
      </main>
    </div>
  );
};

export default Checkout;
