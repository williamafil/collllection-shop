import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="h-full w-full">
      <div className="w-full text-center">
        <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl leading-5">
          collllect
        </h1>
        <h2 className="w-full text-2xs md:text-xs lg:text-sm">Mine & Yours</h2>
      </div>
    </Link>
  );
};

export default HeaderLogo;
