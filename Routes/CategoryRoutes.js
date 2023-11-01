import express from "express";
import { authCheck, adminCheck } from "../middleware/authMiddleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getSingleCategoryController,
  updateCategoryConrtoller,
} from "../Controller/CategoryController.js";

const router = express.Router();

///routes
router.post("/category", authCheck, adminCheck, createCategoryController);
router.get(
  "/category/:slug",
  authCheck,
  adminCheck,
  getSingleCategoryController
);
router.get("/categories", getAllCategoryController);
router.put("/category/:slug", authCheck, adminCheck, updateCategoryConrtoller);
router.delete(
  "/category/:slug",
  authCheck,
  adminCheck,
  deleteCategoryController
);

export default router;
