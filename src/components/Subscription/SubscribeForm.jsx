import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);

  const onInputHandler = (event) => {
    setMsg(null);
    setEmail(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEmail("");
    setMsg("Thank you for your subscription!");
  };

  return (
    <div className="w-full">
      <div>
        <form onSubmit={onSubmitHandler} className=" flex">
          <input
            type="email"
            onInput={onInputHandler}
            value={email}
            className="w-full h-12 py-2.5 px-5 bg-transparent border border-black tracking-wide"
            placeholder="Enter email"
            required
          />
          <span className="pl-4 h-12">
            <button className="h-full inline-block w-28 bg-black text-white hover:bg-lightOrange-800 hover:text-black">
              Subscribe
            </button>
          </span>
        </form>
      </div>
      {msg && (
        <p className="block py-1 text-lightOrange-800 transform animate-fadeIn">
          {msg}
        </p>
      )}
    </div>
  );
};

export default SubscribeForm;
