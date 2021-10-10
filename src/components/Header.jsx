import React from "react";
import { ReactComponent as BagIcon } from "../images/bag.svg";

const Header = () => {
  return (
    <header className="container mx-auto py-10 px-5">
      <div className="flex justify-between items-center">
        <nav>
          <div className="hamburger-icon w-8 h-8 p-1 flex flex-col justify-around">
            <span className="w-full h-1 block border-b border-dark"></span>
            <span className="w-full h-1 block border-b border-dark"></span>
            <span className="w-full h-1 block border-b border-dark"></span>
          </div>
        </nav>
        <a href="/" className="h-full flex flex-col text-center justify-center">
          <h1 className="uppercase text-3xl leading-5">collllect</h1>
          <h2 className="text-2xs">Mine & Yours</h2>
        </a>
        <div>
          <div className="h-full flex items-center pb-0.5 hover:border-b hover:border-dark">
            {" "}
            <BagIcon className="w-7" />
            <span className="ml-1 text-lg">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
