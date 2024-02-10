import mongoose, { mongo } from "mongoose";
const { objectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: objectId,
          ref: "products",
        },

        count: Number,
        color: String,
        price: Number,
      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    orderdBy: { type: objectId, ref: "Users" },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
