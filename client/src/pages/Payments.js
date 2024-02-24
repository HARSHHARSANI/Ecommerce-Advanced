import React from "react";
import { Card } from "antd";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout.js";
import "../Stripe.module.css";
import Razorpay from "../components/Razorpay.js";

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const payments = () => {
  return (
    // <>
    //   <Elements stripe={promise}>
    //     <div className="col-md-8 offset-md-2">
    //       <h4>Complete Your Purchase</h4>
    //       {/* <StripeCheckout /> */}
    //       <Razorpay />
    //     </div>
    //   </Elements>
    // </>
    // <>
    //   <div className="container justify-content-center align-items-center ">
    //     <Card
    //       title="Payment Methods"
    //       bordered={false}
    //       style={{
    //         width: 300,
    //       }}
    //     >
    //       <p>Card content</p>
    //       <p>Card content</p>
    //       <p>Card content</p>
    //     </Card>
    //   </div>
    // </>
    <></>
  );
};

export default payments;
