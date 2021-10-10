import React from "react";

const Subscription = () => {
  return (
    <section>
      <div className="pb-10 flex flex-col lg:flex-row">
        <aside className="lg:w-3/12">
          <h2 className="text-4xl pt-12 lg:pt-0 pb-4 tracking-wide">
            Sign up to our newsletter
          </h2>
        </aside>
        <div className="lg:pl-14">
          <p className="pb-10 text-sm leading-7 tracking-wide">
            Receive special offers and first look at new products.
          </p>
        </div>
        <form className="lg:pl-14 w-full flex">
          <input
            className="w-full h-12 py-2.5 px-5 bg-transparent border border-black tracking-wide"
            placeholder="Enter email"
          />
          <span className="pl-4 h-12">
            <button className="h-full inline-block w-28 bg-black text-white hover:bg-lightOrange-800 hover:text-black">
              Subscribe
            </button>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
