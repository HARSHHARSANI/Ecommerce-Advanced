import stripeLibrary from "stripe";
import userModel from "../Models/userModel.js";
import cartModel from "../Models/cartModel.js";
import couponModel from "../Models/couponModel.js";
import ProductModel from "../Models/ProductModel.js";

const stripe = stripeLibrary(process.env.STRIPE_SECRET);

export const createPaymentIntentController = async (req, res) => {
  try {
    console.log("inside createPaymentIntentController");
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "usd",
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({ error: "Failed to create payment intent" });
  }
};
