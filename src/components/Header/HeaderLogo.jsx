import React from "react";
import { Link } from "react-router-dom";
import { pathToHome } from "../../router";

const HeaderLogo = () => {
  return (
    <Link to={pathToHome}>
      <div className="relative">
        <h1 className="flex justify-center items-center uppercase text-3xl md:text-4xl lg:text-5xl leading-5">
          <span className="text-4xl md:text-5xl lg:text-6xl">c</span>
          ollllec
          <span className="text-4xl md:text-5xl lg:text-6xl">t</span>
        </h1>
        <h2 className="absolute -bottom-2 w-full text-2xs md:text-xs lg:text-sm text-center">
          Mine & Yours
        </h2>
      </div>
    </Link>
  );
};

export default HeaderLogo;
