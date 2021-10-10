import React from "react";

const SendCard = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3348&q=80"
          alt="greeting card"
        />
        <div className="w-full lg:w-6/12 lg:absolute lg:right-0 lg:top-0 lg:p-16">
          <div className="w-10/12">
            <h2 className="text-4xl pt-12 pb-4 tracking-wide">Send a card</h2>
            <p className="py-2 leading-7 tracking-wide">
              Choose a greeting card, tell us what message you'd like written in
              it, we'll pop a stamp on it and send it for you.
            </p>
            <a
              className="inline-block pt-5 pb-1.5 border-b border-dark text-sm tracking-wider"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendCard;
