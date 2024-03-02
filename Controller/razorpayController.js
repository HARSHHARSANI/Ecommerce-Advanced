import Stripe from "stripe";
import userModel from "../Models/userModel.js";
import cartModel from "../Models/cartModel.js";
import couponModel from "../Models/couponModel.js";
import ProductModel from "../Models/ProductModel.js";
import Razorpay from "razorpay";
import orderModel from "../Models/orderModel.js";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

// Define the hmac_sha256 function
function hmac_sha256(data, key) {
  return crypto.createHmac("sha256", key).update(data).digest("hex");
}

export const createPaymentIntentController = async (req, res) => {
  try {
    console.log("inside createPaymentIntentController");

    const userEmail = req.user.email;
    const user = await userModel.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cart = await cartModel.findOne({ orderdBy: user._id });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const options = {
      amount: Math.round((cart.totalAfterDiscount || cart.cartTotal) * 100),
      currency: "INR",
    };

    instance.orders.create(options, async (err, razorpayOrder) => {
      if (err) {
        console.error("Error creating Razorpay order:", err);
        return res
          .status(500)
          .json({ error: "Failed to create Razorpay order" });
      } else {
        console.log("Razorpay order created:", razorpayOrder);

        // Map the products in the cart to the required format
        const productsInOrder = cart.products.map((product) => ({
          product: product.product,
          count: product.count,
          color: product.color,
          price: product.price,
        }));

        const order = new orderModel({
          orderdBy: user._id,
          products: productsInOrder,
          totalPrice: Math.round(
            (cart.totalAfterDiscount || cart.cartTotal) * 100
          ),
          razorpay_order_id: razorpayOrder.id,
        });

        /// to decrease the quantity from store and increase the sold quantity
        const bulkOption = order.products.map((item) => {
          return {
            updateOne: {
              filter: { _id: item.product },
              update: { $inc: { quantity: -item.count, sold: +item.count } },
            },
          };
        });

        let updated = await ProductModel.bulkWrite(bulkOption, {});
        console.log(
          "Product Quantity decreased and Sold Quantity Increased",
          updated
        );

        await order.save();

        console.log("New Order Saved", order);

        const userCart = await cartModel.findOneAndDelete({
          orderdBy: user._id,
        });

        console.log(userCart, "userCart");

        res.status(200).json({ success: true, order: razorpayOrder });
      }
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
};

export const paymentVerification = async (req, res) => {
  console.log("im inside paymentVerification");
  console.log(req.body);

  const secret = `${process.env.RAZORPAY_API_SECRET}`;

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const requiredOrderId = await orderModel.find({ razorpay_order_id });

  if (!requiredOrderId) {
    return res.status(404).json({ error: "Order not found" });
  }

  const generated_signature = hmac_sha256(
    razorpay_order_id + "|" + razorpay_payment_id,
    secret
  );

  if (generated_signature === razorpay_signature) {
    return res.redirect("/success");
  } else {
    return res.status(400).json({ error: "Signature verification failed" });
  }
};
