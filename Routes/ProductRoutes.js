import express from "express";
import { adminCheck, authCheck } from "../middleware/authMiddleware.js";
import {
  ProductStarReviewController,
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductsLimitWiseController,
  getSingleProductController,
  listOfProductsWithSortOrdersAndLimitController,
  relatedProductController,
  searchFiltersController,
  totalNoOfProductsController,
  updateProductController,
} from "../Controller/ProductController.js";

const router = express.Router();

///routes
router.post("/product", authCheck, adminCheck, createProductController);
router.get("/products/total", totalNoOfProductsController);
router.get("/products", getAllProductsController);
router.get("/products/:count", getProductsLimitWiseController);
router.get("/product/:slug", getSingleProductController);
router.put("/product/:slug", authCheck, adminCheck, updateProductController);
router.delete("/product/:slug", authCheck, adminCheck, deleteProductController);
router.post("/sortedProducts", listOfProductsWithSortOrdersAndLimitController);
///rating
router.put("/product/star/:productId", authCheck, ProductStarReviewController);
///for related product
router.get("/products/related/:productId", relatedProductController);
///search
router.post("/search/filters", searchFiltersController);

export default router;
