import React from "react";
import AccountNav from "../Account/AccountNav";

const AccountPageWrapper = ({ children }) => {
  return (
    <div className="container mx-auto px-5">
      <div className="lg:px-16 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5">
          <h2 className="mb-4 text-4xl">My Account</h2>
          <AccountNav />
        </div>
        <div className="w-full lg:w-3/5 mt-10 lg:mt-0">{children}</div>
      </div>
    </div>
  );
};

export default AccountPageWrapper;
