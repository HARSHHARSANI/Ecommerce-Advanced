import Stripe from "stripe";
import userModel from "../Models/userModel.js";
import cartModel from "../Models/cartModel.js";
import couponModel from "../Models/couponModel.js";
import ProductModel from "../Models/ProductModel.js";
import Razorpay from "razorpay";

export const createPaymentIntentController = async (req, res) => {
  try {
    console.log("inside createPaymentIntentController");

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const options = {
      amount: 50000,
      currency: "INR",
    };

    instance.orders.create(options, (err, order) => {
      if (err) {
        console.error("Error creating Razorpay order:", err);
        res.status(500).send({ error: "Failed to create Razorpay order" });
      } else {
        console.log("Razorpay order created:", order);
        res.status(200).json({ success: true, order });
      }
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({ error: "Failed to create payment intent" });
  }
};

export const paymentVerification = (req, res) => {
  try {
    console.log("inside paymentVerification");
    console.log(req.body);
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
