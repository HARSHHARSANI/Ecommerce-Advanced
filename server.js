import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import authRoutes from "./Routes/AuthRoutes.js";
import categoryRoutes from "./Routes/CategoryRoutes.js";
import SubCategoryRoutes from "./Routes/SubCategoryRoutes.js";
import productRoutes from "./Routes/ProductRoutes.js";
import cloudinaryRoutes from "./Routes/cloudinaryRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import couponRoutes from "./Routes/CouponRoutes.js";
import stripeRoutes from "./Routes/StripeRoutes.js";
import Razorpay from "razorpay";

dotenv.config();

//app
const app = express();

//database
connectDB();

///middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

///routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/stripe", stripeRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/subcategory", SubCategoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/cloudinary", cloudinaryRoutes);
app.use("/api/v1/coupon", couponRoutes);

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server Running on mode ${process.env.DEV_MODE} on port ${port}`.bgCyan
      .white
  );
});
