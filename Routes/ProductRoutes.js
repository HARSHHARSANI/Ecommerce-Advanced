import express from "express";
import { adminCheck, authCheck } from "../middleware/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
} from "../Controller/ProductController.js";

const router = express.Router();

///routes
router.post("/product", authCheck, adminCheck, createProductController);
router.get("/products", getAllProductsController);
router.get("/product/:slug", getSingleProductController);
router.put("/product/:slug", authCheck, adminCheck, updateProductController);
router.delete("/product/:slug", authCheck, adminCheck, deleteProductController);

export default router;
