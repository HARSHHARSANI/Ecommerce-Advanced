// Import mongoose
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  orderdBy: {
    type: ObjectId,
    ref: "Users",
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
  
  
  orderStatus: {
    type: String,
    default: "Not Processed",
    enum: [
      "Not Processed",
      "Processing",
      "Dispatched",
      "Cancelled",
      "Completed",
    ],
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
