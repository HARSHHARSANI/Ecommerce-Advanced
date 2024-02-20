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
// app.use("/api", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/subcategory", SubCategoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/cloudinary", cloudinaryRoutes);
app.use("/api/v1/coupon", couponRoutes);

// app.use("/api/v1/products", ProductRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server Running on mode ${process.env.DEV_MODE} on port ${port}`.bgCyan
      .white
  );
});
