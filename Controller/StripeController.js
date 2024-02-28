import Stripe from "stripe";
import userModel from "../Models/userModel.js";
import cartModel from "../Models/cartModel.js";
import couponModel from "../Models/couponModel.js";
import ProductModel from "../Models/ProductModel.js";

const stripe = Stripe(process.env.STRIPE_SECRET);

export const createPaymentIntentController = async (req, res) => {
  try {
    console.log("inside createPaymentIntentController");
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
      payment_method: "pm_card_visa",
      confirm: true,
      // payment_method_options: {
      //   card: {
      //     return_url: "http://localhost:3000",
      //   },
      // },
      return_url: "http://localhost:3000",
    });
    console.log("paymentIntent", paymentIntent);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({ error: "Failed to create payment intent" });
  }
};
