import express from "express";
import { adminCheck, authCheck } from "../middleware/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductsLimitWiseController,
  getSingleProductController,
  listOfProductsWithSortOrdersAndLimitController,
  updateProductController,
} from "../Controller/ProductController.js";

const router = express.Router();

///routes
router.post("/product", authCheck, adminCheck, createProductController);
router.get("/products", getAllProductsController);
router.get("/products/:count", getProductsLimitWiseController);
router.get("/product/:slug", getSingleProductController);
router.put("/product/:slug", authCheck, adminCheck, updateProductController);
router.delete("/product/:slug", authCheck, adminCheck, deleteProductController);
router.post("/productss", listOfProductsWithSortOrdersAndLimitController);

export default router;
