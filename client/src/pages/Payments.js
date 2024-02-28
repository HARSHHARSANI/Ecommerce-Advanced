import React from "react";
import { Card } from "antd";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout.js";
import "../stripe.css";

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const payments = () => {
  return (
    <>
      <div className="container p-5 text-center">
        <h4 className="fw-bold ">Complete Your Purchase</h4>
        <Elements stripe={promise}>
          <div className="col-md-8 offset-md-2">
            <StripeCheckout />
          </div>
        </Elements>
      </div>
    </>
  );
};

export default payments;
