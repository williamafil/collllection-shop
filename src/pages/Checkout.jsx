import React from "react";
import { useSelector } from "react-redux";
import HeaderLogo from "../components/Header/HeaderLogo";
import clxs from "../utils/clxs";

const Checkout = () => {
  const cartSubtotal = useSelector((state) => state.cart.subTotal);
  const cartShipping = useSelector((state) => state.cart.shipping);
  const cartTotal = cartSubtotal + cartShipping;
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <header className="my-6 lg:hidden w-full flex justify-center">
        <HeaderLogo />
      </header>

      <aside className="lg:order-2 w-full bg-gray-50 h-full lg:pt-10">
        <header className="mb-3  bg-gray-50 border-t border-b border-gray-200 py-3 lg:hidden">
          <div className="container mx-auto px-6 flex justify-between">
            <h2 className="text-lg">Order Summery</h2>
            <h2 className="text-lg font-bold">$ {cartTotal.toFixed(2)}</h2>
          </div>
        </header>

        <main className="container mx-auto">
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
                    <div className="pl-0.5 absolute -top-2 -right-2 w-5 h-5 bg-gray-500 rounded-full text-white text-sm flex justify-center items-center">
                      <span className="">{product.quantity}</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h2 className="text-sm tracking-wide">{product.title}</h2>
                    <h3 className="text-xs tracking-wide">
                      $ {product.price.toFixed(2)}
                    </h3>
                  </div>
                </div>
                <div className="w-3/12 h-full flex justify-end items-center ">
                  <span className="">$ {product.totalPrice.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </main>
        <footer className="border-b border-gray-200">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="w-full  border-t border-gray-300"></div>
            <div className="py-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <p>$ {cartSubtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <p>$ {cartShipping.toFixed(2)}</p>
              </div>
            </div>
            <div className="w-full  border-t border-gray-300"></div>
            <div className="flex justify-between items-center bg-gray-50 py-3">
              <span>Total</span>
              <p className="text-2xl">
                <span className="text-sm text-gray-600 pr-2">CAD</span>${" "}
                {cartTotal.toFixed(2)}
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
