import React from "react";
import AccountPageWrapper from "../../components/UI/AccountPageWrapper";

const Account = () => {
  return (
    <section className="Account py-28">
      <AccountPageWrapper>
        <h2 className="text-xl">Order History</h2>
        <p className="pt-2.5">You haven't placed any orders yet.</p>
      </AccountPageWrapper>
    </section>
  );
};

export default Account;
