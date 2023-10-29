import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import authRoutes from "./Routes/AuthRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

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
app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/products", ProductRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server Running on mode ${process.env.DEV_MODE} on port ${port}`.bgCyan
      .white
  );
});
