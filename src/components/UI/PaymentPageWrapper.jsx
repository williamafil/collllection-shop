import React from "react";
import clxs from "../../utils/clxs";
import HeaderLogo from "../Header/HeaderLogo";
import { ReactComponent as NavArrowRight } from "../../images/nav-arrow-right.svg";
// import { Link } from "react-router-dom";

const PaymentPageWrapper = ({
  children,
  isPaid,
  cartItems,
  cartSubtotal,
  cartShipping,
  tax,
  cartTotal,
}) => {
  return (
    <div className="bg-gray-50 flex flex-col lg:flex-row lg:h-screen">
      <header className="my-6 lg:hidden w-full flex justify-center">
        <HeaderLogo />
      </header>

      <aside
        className={clxs(
          "lg:order-2 w-full bg-gray-100 h-full lg:pt-10",
          isPaid ? "w-0" : "",
        )}
      >
        {!isPaid && (
          <>
            <header className="border-t border-b border-gray-200 py-3 lg:hidden">
              <div className="container mx-auto px-6 flex justify-between">
                <h2 className="text-lg">Order Summery</h2>
                <h2 className="text-lg font-bold">$ {cartSubtotal}</h2>
              </div>
            </header>

            <main className="container mx-auto my-3">
              <ul className="w-full order-items space-y-2">
                {cartItems.map((product) => (
                  <li
                    key={product.id}
                    className="pt-4 pb-2 px-6 lg:px-10 h-20 flex hover:bg-gray-100"
                  >
                    <div className="w-9/12 flex items-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200">
                          <img
                            className="object-cover rounded-xl"
                            src={product.imageUrl}
                            alt="pic"
                          />
                        </div>
                        <div
                          className={clxs(
                            "pl-0.5 w-5 h-5 bg-gray-500",
                            "absolute -top-2 -right-2 rounded-full",
                            "text-white text-sm ",
                            "flex justify-center items-center",
                          )}
                        >
                          <span className="">{product.quantity}</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <h2 className="text-sm tracking-wide">
                          {product.title}
                        </h2>
                        <h3 className="text-xs tracking-wide">
                          $ {product.price.toFixed(2)}
                        </h3>
                      </div>
                    </div>
                    <div className="w-3/12 h-full flex justify-end items-center ">
                      <span className="">
                        $ {product.totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </main>

            <footer className="border-b border-gray-200">
              <div className="container mx-auto px-6 lg:px-10">
                <div className="w-full border-t border-gray-300"></div>
                <div className="py-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <p>$ {cartSubtotal}</p>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <p>$ {cartShipping}</p>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>

                    <p>$ {tax}</p>
                  </div>
                </div>
                <div className="w-full  border-t border-gray-300"></div>
                <div className="flex justify-between items-center  py-3">
                  <span>Total</span>

                  <p className="text-2xl">
                    <span className="text-sm text-gray-600 pr-2">CAD</span>${" "}
                    {cartTotal}
                  </p>
                </div>
              </div>
            </footer>
          </>
        )}
      </aside>

      <div className="lg:order-1 w-full lg:pt-14">
        <div className="container mx-auto px-6">
          <div className="hidden lg:block ">
            <HeaderLogo />
          </div>

          <section className="my-6 flex justify-center breadcrumb text-xs tracking-wide">
            <ul className="flex items-center">
              <li>Cart</li>
              <li>
                <NavArrowRight className="w-5 h-5 text-gray-600" />
              </li>
              <li>Checkout</li>
              <li>
                <NavArrowRight className="w-5 h-5 text-gray-600" />
              </li>
              <li>
                <b>Payment</b>
              </li>
            </ul>
          </section>

          <main>{children}</main>

          <footer className="mb-8">
            <div className="w-full my-4 border-t border-gray-600"></div>
            <ul className="text-xs text-gray-700 tracking-wide flex space-x-4">
              <li className="cursor-pointer">Refund policy</li>
              <li className="cursor-pointer">Privacy policy</li>
              <li className="cursor-pointer">Terms of service</li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PaymentPageWrapper;
