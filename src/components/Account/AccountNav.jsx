import React from "react";
import { useSelector } from "react-redux";
import IsLoggedInAs from "./IsLoggedInAs";

const AccountNav = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <ul className="mt-10 space-y-4 text-sm">
      <li>Account Details</li>
      <li>Order History</li>
      {/* <li className="pt-5">Log in as William</li>
      <li>Log out</li> */}

      {currentUser && <IsLoggedInAs currentUser={currentUser} />}
    </ul>
  );
};

export default AccountNav;
