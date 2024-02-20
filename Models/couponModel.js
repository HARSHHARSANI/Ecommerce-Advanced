import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      uppercase: true,
      required: "Name Is Requied",
      minlength: [6, "Too Short"],
      maxlength: [12, "Too Long"],
    },
    expiry: {
      type: Date,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      // default: new Date(),
    },
  },
  { timestamps: true }
);

export default mongoose.model("Coupon", couponSchema);
