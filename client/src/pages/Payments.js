import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout.js";
import "../Stripe.module.css";

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const payments = () => {
  return (
    <>
      <Elements stripe={promise}>
        <div className="col-md-8 offset-md-2">
          <h4>Complete Your Purchase</h4>
          <StripeCheckout />
        </div>
      </Elements>
    </>
  );
};

export default payments;
