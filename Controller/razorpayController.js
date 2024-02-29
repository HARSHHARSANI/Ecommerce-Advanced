import Stripe from "stripe";
import userModel from "../Models/userModel.js";
import cartModel from "../Models/cartModel.js";
import couponModel from "../Models/couponModel.js";
import ProductModel from "../Models/ProductModel.js";
import Razorpay from "razorpay";

export const createPaymentIntentController = async (req, res) => {
  try {
    console.log("inside createPaymentIntentController");

    const userEmail = req.user.email;
    const user = await userModel.findOne({ email: userEmail });
    if (!user) {
      return;
    }

    const cart = await cartModel.findOne({ orderdBy: user._id });
    if (!cart) {
      return;
    }
    console.log(cart);

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const options = {
      amount: Math.round((cart.totalAfterDiscount || cart.cartTotal) * 100),
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

export const paymentVerification = async (req, res) => {
  console.log("im inside paymentVerification");
  console.log(req.body);
  res.status(200).json({
    success: true,
  });
};
