import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { useHistory } from "react-router";

import FormButton from "../components/Form/FormButton";
import HeaderLogo from "../components/Header/HeaderLogo";
import { ReactComponent as NavArrowRight } from "../images/nav-arrow-right.svg";
import { ReactComponent as AvatarIcon } from "../images/avatar.svg";
import clxs from "../utils/clxs";

const Checkout = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.currentUser);
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
  const [cartTotal, setCartTotal] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsgs, setErrorMsgs] = useState([]);

  const selectProvinceHandler = (event) => {
    const value = event.target.value;
    const selectedProvince = provinces.find((item) => item.value === value);
    setProvince(event.target.value);

    const calcTax = (
      (cartSubtotal + cartShipping) *
      selectedProvince.rate
    ).toFixed(2);

    setTax(parseFloat(calcTax));

    const calcTotal = (
      cartSubtotal +
      cartShipping +
      parseFloat(calcTax)
    ).toFixed(2);

    setCartTotal(parseFloat(calcTotal));
  };

  // check if user is logged in
  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser.id);
      setEmail(currentUser.email);
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
    }
  }, [currentUser]);

  const onSubmitHandler = async (event) => {
    // TODO:
    // 1. blank field check
    // 2. write data to firestore, create a new order record

    // {
    //    shipping: {
    //      user_id: '',
    //      firstName,
    //      lastName,
    //      address,
    //      city,
    //      province,
    //      postalCode,
    //      phone,
    //    },
    //    items: [],
    //    subtotal: 123,
    //    freight: 10,
    //    tax: 23,
    //    total: 156
    //    isPaid: false
    //    createdAt: timestamp
    //    paidAt: timestamp
    // }

    // 3. get order id
    // 4. redirect to /checkout/:order_id       /checkout/sEda7DE96aed2d3
    console.log("submit");
    event.preventDefault();
    setErrorMsgs([]);
    let isError = false;
    setIsSubmit(true);

    if (email.trim() === "") {
      setErrorMsgs((prev) => [...prev, "Email can't be blank."]);
      isError = true;
    }
    if (firstName.trim() === "") {
      setErrorMsgs((prev) => [...prev, "First name can't be blank."]);
      isError = true;
    }
    if (!lastName.trim()) {
      setErrorMsgs((prev) => [...prev, "Last name can't be blank."]);
      isError = true;
    }
    if (!address.trim()) {
      setErrorMsgs((prev) => [...prev, "Address can't be blank."]);
      isError = true;
    }
    if (!city.trim()) {
      setErrorMsgs((prev) => [...prev, "City can't be blank."]);
      isError = true;
    }
    if (!province.trim()) {
      setErrorMsgs((prev) => [...prev, "Province can't be blank."]);
      isError = true;
    }
    if (!postalCode.trim()) {
      setErrorMsgs((prev) => [...prev, "Postal code can't be blank."]);
      isError = true;
    }
    if (!phone.trim()) {
      setErrorMsgs((prev) => [...prev, "Phone number can't be blank."]);
      isError = true;
    }

    if (isError) {
      setIsSubmit(false);
      return;
    }

    try {
      const docData = {
        shipping: {
          userId: userId,
          firstName,
          lastName,
          address,
          city,
          province,
          postalCode,
          phone,
        },
        items: [...cartItems],
        subtotal: cartSubtotal,
        freight: cartShipping,
        tax: tax,
        total: cartTotal,
        isPaid: false,
        createdAt: Timestamp.now(),
        paidAt: "",
      };

      const docRef = await doc(collection(db, "orders"));
      await setDoc(docRef, docData);

      setIsSubmit(false);
      console.log("path: ", `/payment/${docRef.id}`);
      history.push(`/payment/${docRef.id}`);
    } catch (error) {
      console.error("ERROR CREATING ORDER: ", error);
      setIsSubmit(false);
    }
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

          {errorMsgs.length !== 0 && (
            <ul className="p-2.5 bg-lightOrange-800">
              {errorMsgs.map((error, index) => (
                <li key={`error-${index}`}>{error}</li>
              ))}
            </ul>
          )}

          <h2 className="my-2 pb-1">Contact Information</h2>
          {currentUser ? (
            <div className="mb-6 flex space-x-4">
              <div>
                <div className="w-12 h-12 rounded-md bg-gray-200 flex justify-center items-center">
                  <AvatarIcon className="w-10 h-10 text-gray-400" />
                </div>
              </div>
              <div>
                <h3>
                  <b>
                    {currentUser.firstName} {currentUser.lastName}
                  </b>{" "}
                  ({email})
                </h3>
                <span className="text-sm">Log out</span>
              </div>
            </div>
          ) : (
            <form className="mb-4 space-y-3 text-sm tracking-wide">
              <legend className="w-full">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail address (for order notification)"
                  className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                  onInput={() => setEmail(event.target.value)}
                  value={email}
                />
              </legend>
            </form>
          )}

          <h2 className="my-2 pb-1">Shipping Information</h2>
          <form
            onSubmit={onSubmitHandler}
            className="mb-4 space-y-3 text-sm tracking-wide"
          >
            <div className="space-y-3 lg:space-y-0 lg:space-x-3 flex flex-col lg:flex-row">
              <legend className="w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                  onInput={() => setFirstName(event.target.value)}
                  defaultValue={firstName}
                />
              </legend>

              <legend className="w-full">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                  onInput={() => setLastName(event.target.value)}
                  defaultValue={lastName}
                />
              </legend>
            </div>
            <legend className="w-full">
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                onInput={() => setAddress(event.target.value)}
                value={address}
              />
            </legend>
            <legend className="w-full">
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                onInput={() => setCity(event.target.value)}
                value={city}
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
                  onInput={() => setPostalCode(event.target.value)}
                  value={postalCode}
                />
              </legend>
            </div>

            <legend className="w-full">
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 rounded-md border border-gray-200 drop-shadow-sm"
                onInput={() => setPhone(event.target.value)}
                value={phone}
              />
            </legend>
            <FormButton
              className="w-full bg-lightOrange-800 py-4 rounded-md text-sm tracking-wide hover:bg-black hover:text-white"
              disabled={isSubmit}
            >
              Continue to payment
            </FormButton>
            {/* <button className="w-full bg-lightOrange-800 py-4 rounded-md text-sm tracking-wide hover:bg-black hover:text-white">
              Continue to payment
            </button> */}
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
