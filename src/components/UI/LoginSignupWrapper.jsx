import React from "react";
import { Link } from "react-router-dom";

const LoginSignupWrapper = ({ children, sectionTitle }) => {
  return (
    <div className="container mx-auto px-5">
      <div className="lg:px-16 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className="mb-4 text-4xl">{sectionTitle}</h2>
          <Link
            to="/"
            className="text-sm tracking-wide hover:text-lightOrange-800"
          >
            Return to Store
          </Link>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">{children}</div>
      </div>
    </div>
  );
};

export default LoginSignupWrapper;
