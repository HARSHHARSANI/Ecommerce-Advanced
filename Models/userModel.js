import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    address: {
      type: String,
    },

    role: {
      type: String,
      default: "Subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    // wishlist: {
    //   type: ObjectId,
    //   ref: "Product",
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);
