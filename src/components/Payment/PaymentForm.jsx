import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";

import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ReactComponent as LoadingIcon } from "../../images/loading.svg";
import styles from "./PaymentForm.module.css";
import "./PaymentForm.css";
import PaymentPageWrapper from "../UI/PaymentPageWrapper";

const PaymentForm = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const orderId = paths[paths.length - 1];

  const currentUser = useSelector((state) => state.user.currentUser);
  const [isOrderExist, setOrderExist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaid, setPaid] = useState(null);
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartShipping, setCartShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // send orderId, total amount in cents, customer email,
  useEffect(async () => {
    const docRef = doc(db, "orders", orderId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setIsLoading(false);
      setOrderExist(true);

      const {
        email,
        freight,
        isPaid,
        items,
        shipping: { userId },
        subtotal,
        tax,
        total,
      } = docSnap.data();

      setCartItems(items);
      setCartSubtotal(subtotal);
      setCartShipping(freight);
      setTax(tax);
      setCartTotal(total);

      if (isPaid) {
        setPaid(true);
      } else {
        setPaid(false);
      }

      axios
        .post(
          "https://infinite-tundra-04643.herokuapp.com/create-payment-intent",
          {
            items,
            order: {
              totalAmount: total * 100,
              email,
              userId,
              orderId,
            },
          },
        )
        .then(({ data }) => {
          console.log(`clientSecret`, data.clientSecret);
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.log(`error`, error.message);
          setError(error.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setOrderExist(false);
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const onSubmitPaymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    setProcessing(true);

    try {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        // update isPaid to true
        const docRef = doc(db, "orders", orderId);
        await updateDoc(docRef, {
          isPaid: true,
          paidAt: Timestamp.now(),
        });
        setError(null);
        setProcessing(false);
        setSucceeded(true);
      }
    } catch (error) {
      console.log(`catch error`, error);
      setProcessing(false);
    }
  };

  const onChangeHandler = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    // console.log("event: ", event);
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <PaymentPageWrapper
      isPaid={isPaid}
      cartItems={cartItems}
      cartSubtotal={cartSubtotal}
      cartShipping={cartShipping}
      tax={tax}
      cartTotal={cartTotal}
    >
      <div className="pt-4 pb-20 max-w-[400px] mx-auto">
        {isLoading && (
          <div className="flex justify-center">
            <LoadingIcon />
          </div>
        )}
        {!isLoading && isOrderExist === false && (
          <div className="flex justify-center">Order does not exist.</div>
        )}

        {isPaid && (
          <div className="flex justify-center">Order has been paid.</div>
        )}

        {!isLoading && isOrderExist && !isPaid && (
          <form id="payment-form" onSubmit={onSubmitPaymentHandler}>
            <fieldset>
              {/* <div className="p-2 border border-black"> */}
              <CardElement
                id="card-element"
                className={styles.cardElement}
                options={cardStyle}
                onChange={onChangeHandler}
              />
              {/* </div> */}
            </fieldset>
            <button
              id="submit"
              disabled={processing || disabled || succeeded}
              className={styles.paymentFormButton}
            >
              <span id="button-text" className="flex justify-center">
                {processing ? (
                  <>
                    {/* <div id="spinner" className="spinner"></div> */}
                    <LoadingIcon />
                  </>
                ) : (
                  "Pay Now"
                )}
              </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
              <div
                className="card-error pt-2 text-red-600 text-sm"
                role="alert"
              >
                {error}
              </div>
            )}
            {/* Show a success message upon completion */}
            <p
              className={succeeded ? "result-message" : "result-message hidden"}
            >
              Payment succeeded!
            </p>
          </form>
        )}
      </div>
    </PaymentPageWrapper>
  );
};

export default PaymentForm;
