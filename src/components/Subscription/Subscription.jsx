import React from "react";
import SubscribeForm from "./SubscribeForm";

const Subscription = () => {
  return (
    <section>
      <div className="pb-10 flex flex-col lg:flex-row">
        <aside className="lg:w-4/12">
          <h2 className="text-4xl pt-12 lg:pt-0 pb-4 tracking-wide">
            Sign up to our newsletter
          </h2>
        </aside>
        <div className="lg:mx-14 lg:w-5/12">
          <p className="pb-10 text-sm leading-7 tracking-wide">
            Receive special offers and first look at new products.
          </p>
        </div>
        <SubscribeForm />
      </div>
    </section>
  );
};

export default Subscription;
