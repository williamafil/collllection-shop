import React from "react";

const Hero = () => {
  return (
    <section className="w-5/12 text-sm leading-7 tracking-wide">
      <p className="mb-4">
        Visit our new shop at 12345 Granville Street, Vancouver.
      </p>
      <p className="mb-4">
        International customers please shop our range at{" "}
        <a href="#" className="pb-0.5 border-b border-dark">
          foobar.com
        </a>
      </p>
    </section>
  );
};

export default Hero;
