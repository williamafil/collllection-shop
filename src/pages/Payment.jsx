import StripeWrapper from "../components/Payment/StripeWrapper";

const Payment = (props) => {
  return (
    <div className="h-screen bg-gray-50">
      <StripeWrapper />
    </div>
  );
};

export default Payment;
