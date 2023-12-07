import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },

    category: {
      type: ObjectId,
      ref: "Category",
    },

    subCategory: [
      {
        type: ObjectId,
        ref: "SubCategory",
      },
    ],

    quantity: Number,

    sold: {
      type: Number,
      default: 0,
    },

    images: {
      type: Array,
    },

    Shipping: {
      type: String,
      enum: ["Yes", "No"],
    },

    colors: {
      type: String,
      enum: ["Black", "Brown", "White", "Silver", "Blue"],
    },

    brands: {
      type: String,
      enum: [
        "Apple",
        "Microsoft",
        "Lenovo",
        "Asus",
        "Dell",
        "Hp",
        "Jio",
        "Samsung",
      ],
    },

    // rating: [
    //     {
    //         star: Number,
    //         PostedBy: {
    //             type: ObjectId,
    //             ref:"Users",
    //         }
    //     }
    // ]
  },
  { timestamps: true }
);

export default mongoose.model("products", productSchema);
