import React from "react";
import OrderHistory from "../../components/Account/OrderHistory";
import AccountPageWrapper from "../../components/UI/AccountPageWrapper";

const Account = () => {
  return (
    <section className="Account py-14">
      <AccountPageWrapper>
        <OrderHistory />
      </AccountPageWrapper>
    </section>
  );
};

export default Account;
