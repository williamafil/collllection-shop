import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderLogo from "../components/Header/HeaderLogo";
import { ReactComponent as NavArrowRight } from "../images/nav-arrow-right.svg";
import clxs from "../utils/clxs";

const Checkout = () => {
  const cartSubtotal = useSelector((state) => state.cart.subTotal);
  const cartShipping = useSelector((state) => state.cart.shipping);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [provinces] = useState([
    { label: "Alberta", value: "AB", rate: 0.05 },
    { label: "British Columbia", value: "BC", rate: 0.12 },
    { label: "Manitoba", value: "MB", rate: 0.12 },
    { label: "New Brunswick", value: "NB", rate: 0.15 },
    { label: "Newfoundland and Labrador", value: "NL", rate: 0.15 },
    { label: "Northwest Territories", value: "NT", rate: 0.05 },
    { label: "Nova Scotia", value: "NS", rate: 0.15 },
    { label: "Nunavut", value: "NU", rate: 0.05 },
    { label: "Ontario", value: "ON", rate: 0.13 },
    { label: "Prince Edward", value: "PE", rate: 0.15 },
    { label: "Quebec", value: "QC", rate: 0.14975 },
    { label: "Saskatchewan", value: "SK", rate: 0.11 },
    { label: "Yukon Territory", value: "YT", rate: 0.05 },
  ]);

  const [tax, setTax] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [cartTotal, setCartTotal] = useState(null);

  const selectProvinceHandler = (event) => {
    const value = event.target.value;
    const selectedProvince = provinces.find((item) => item.value === value);
    setProvince(event.target.value);
    console.log("selectedProvince.rate", selectedProvince.rate);
    const calcTax = (cartSubtotal + cartShipping) * selectedProvince.rate;
    console.log("tax", calcTax);
    setTax(calcTax);

    const calcTotal = cartSubtotal + cartShipping + calcTax;
    setCartTotal(calcTotal);
  };

  return (
    <div className="bg-gray-50 flex flex-col lg:flex-row lg:h-screen">
      <header className="my-6 lg:hidden w-full flex justify-center">
        <HeaderLogo />
      </header>

      <aside className="lg:order-2 w-full bg-gray-100 h-full lg:pt-10">
        <header className="border-t border-b border-gray-200 py-3 lg:hidden">
          <div className="container mx-auto px-6 flex justify-between">
            <h2 className="text-lg">Order Summery</h2>
            <h2 className="text-lg font-bold">$ {cartSubtotal.toFixed(2)}</h2>
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
            <div className="w-full border-t border-gray-300"></div>
            <div className="py-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <p>$ {cartSubtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <p>$ {cartShipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                {province ? (
                  <>
                    <p>$ {tax.toFixed(2)}</p>
                  </>
                ) : (
                  <>
                    <p>-</p>
                  </>
                )}
              </div>
            </div>
            <div className="w-full  border-t border-gray-300"></div>
            <div className="flex justify-between items-center  py-3">
              <span>Total</span>

              <p className="text-2xl">
                {province ? (
                  <>
                    <span className="text-sm text-gray-600 pr-2">CAD</span>${" "}
                    {cartTotal.toFixed(2)}
                  </>
                ) : (
                  <>
                    <span className="text-sm text-gray-600 pr-2">
                      Please select a province
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </footer>
      </aside>

      <main className="lg:order-1 w-full lg:pt-14">
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
              <li>
                <b>Checkout</b>
              </li>
              <li>
                <NavArrowRight className="w-5 h-5 text-gray-600" />
              </li>
              <li>Payment</li>
            </ul>
          </section>

          <h2 className="my-2 pb-1">Shipping Information</h2>
          <form className="space-y-3 text-sm tracking-wide">
            <div className="space-y-3 lg:space-y-0 lg:space-x-3 flex flex-col lg:flex-row">
              <legend className="w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                />
              </legend>

              <legend className="w-full">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                />
              </legend>
            </div>
            <legend className="w-full">
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
              />
            </legend>
            <legend className="w-full">
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
              />
            </legend>
            <div className="space-y-3 lg:space-y-0 lg:space-x-3 flex flex-col lg:flex-row">
              <legend className="w-full">
                <select
                  id="shipping-province"
                  className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                  onChange={selectProvinceHandler}
                  value={province}
                >
                  <option className="text-gray-600" value="" disabled></option>

                  {provinces.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </legend>
              <legend className="w-full">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                />
              </legend>
            </div>

            <legend className="w-full">
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
              />
            </legend>
            <button className="w-full bg-lightOrange-800 py-4 rounded-md text-sm tracking-wide hover:bg-black hover:text-white">
              Continue to payment
            </button>
          </form>

          <footer className="mb-8">
            <div className="w-full my-4 border-t border-gray-600"></div>
            <ul className="text-xs text-gray-700 tracking-wide flex space-x-4">
              <li className="cursor-pointer">Refund policy</li>
              <li className="cursor-pointer">Privacy policy</li>
              <li className="cursor-pointer">Terms of service</li>
            </ul>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
