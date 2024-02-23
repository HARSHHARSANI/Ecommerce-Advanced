import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentIntent } from "../functions/StripeFunction";
import styles from "../Stripe.module.css";

const StripeCheckout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSuceedded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    createPaymentIntent(user.token).then((response) => {
      console.log("create payment intent", response.data);
      setClientSecret(response.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (e) => {};
  const handleChange = async (e) => {};

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
      {JSON.stringify(clientSecret)}
      <form id="payment-form" className={styles.form} onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cartStyle}
          onChange={handleChange}
        />
        <button
          className={styles["stripe-button"]}
          disabled={processing || disabled || succeeded}
        >
          <span id="button-text">
            {" "}
            {processing ? <div id="spinner" className="spinner"></div> : "Pay"}
          </span>
        </button>
      </form>
    </>
  );
};

export default StripeCheckout;
