// Import mongoose
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  //   razorpay_signature: {
  //     type: String,
  //     required: true,
  //   },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  //   razorpay_payment_id: {
  //     type: String,
  //     required: true,
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// Create and export the Order model
export default mongoose.model("Order", orderSchema);
