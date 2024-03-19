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
import razorpayRoutes from "./Routes/razorpayRoutes.js";
import Razorpay from "razorpay";
import path from "path";
import orderRoutes from "./Routes/OrderRoutes.js";
import AdminRoutes from "./Routes/AdminRoutes.js";
import imageRoute from "./Routes/ImagesRoute.js";

dotenv.config();

//app
const app = express();

//database
connectDB();

///middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
/// i have made this change for payment verification controller
app.use(express.urlencoded({ extended: false }));

app.use(cors());

///routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/razorpay", razorpayRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/subcategory", SubCategoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", AdminRoutes);
app.use("/api/v1/cloudinary", cloudinaryRoutes);
app.use("/api/v1/coupon", couponRoutes);
app.use("/api/v1/orders", orderRoutes);

app.use("/api/v1/images", imageRoute);
// // Handle the callback from Razorpay
// app.post("/api/v1/razorpay/paymentVerification", (req, res) => {
//   try {
//     // Extract data from the request body
//     const {
//       razorpay_payment_id,
//       razorpay_order_id,
//       razorpay_signature,
//       ...otherData
//     } = req.body;

//     // Log the received data
//     console.log("Received Payment Verification Data:", {
//       payment_id: razorpay_payment_id,
//       order_id: razorpay_order_id,
//       signature: razorpay_signature,
//       otherData, // Other data sent by Razorpay
//     });

//     // Handle the payment verification logic here

//     // Send a success response
//     res.status(200).json({ success: true });
//   } catch (error) {
//     // Handle errors
//     console.error("Error in paymentVerification:", error);
//     res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// });

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/success", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "success.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server Running on mode ${process.env.DEV_MODE} on port ${port}`.bgCyan
      .white
  );
});
