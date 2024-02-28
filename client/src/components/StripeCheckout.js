import React, { useEffect, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentIntent } from "../functions/StripeFunction";
import "../stripe.css";
import { Link } from "react-router-dom";

const StripeCheckout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    createPaymentIntent(user.token).then((response) => {
      console.log("create payment intent", response);
      setClientSecret(response.data.clientSecret);
    });
  }, []);

 const handleSubmit = async (e) => {
   e.preventDefault();
   setProcessing(true);

   const payload = await stripe.confirmCardPayment(clientSecret, {
     payment_method: {
       card: elements.getElement(CardElement),
       billing_details: {
         name: e.target.name.value,
       },
     },
   });

   if (payload.error) {
     setError(`Payment Failed ${payload.error.message}`);
     setProcessing(false);
   } else if (
     payload.paymentIntent &&
     payload.paymentIntent.status === "requires_action"
   ) {
     // Redirect the customer to the provided URL
     window.location.replace(
       payload.paymentIntent.next_action.redirect_to_url.url
     );
   } else if (
     payload.paymentIntent &&
     payload.paymentIntent.status === "requires_payment_method"
   ) {
     // Handle payment method required, prompt user to provide payment method
     // Display an error message or UI prompt to collect payment method
     setError("Payment method required");
     setProcessing(false);
   } else {
     console.log(JSON.stringify(payload, null, 4));
     setError(null);
     setProcessing(false);
     setSucceeded(true);
   }
 };

  const handleChange = async (e) => {
    setDisabled(e.empty); ///disable button if error
    setError(e.error ? e.error.message : "");
  };

  const cartStyle = {
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

  return (
    <>
      {/* {JSON.stringify(clientSecret)} */}
      {/* <PaymentElement id="payment-element" options={paymentElementOptions} /> */}

      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment Successfull
        <Link to={"/user/history"}>See it in your history</Link>
      </p>
      <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cartStyle}
          onChange={handleChange}
        />
        <button
          className="stripe-button"
          disabled={processing || disabled || succeeded}
        >
          <span id="button-text">
            {processing ? <div id="spinner" className="spinner"></div> : "Pay"}
          </span>
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}{" "}
      </form>
      <br />
    </>
  );
};

export default StripeCheckout;
