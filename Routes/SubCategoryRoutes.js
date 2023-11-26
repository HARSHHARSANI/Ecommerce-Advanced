import express from "express";
import { authCheck, adminCheck } from "../middleware/authMiddleware.js";
import {
  createSubCategoryController,
  deleteSubCategoryController,
  getAllSubCategoryController,
  getSingleSubCategoryController,
  updateSubCategoryController,
} from "../Controller/SubCategoryController.js";

const router = express.Router();

///routes
router.post("/subcategory", authCheck, adminCheck, createSubCategoryController);
router.get("/subcategory/:slug", getSingleSubCategoryController);
router.get("/subcategory", getAllSubCategoryController);
router.put(
  "/subcategory/:slug",
  authCheck,
  adminCheck,
  updateSubCategoryController
);
router.delete(
  "/subcategory/:slug",
  authCheck,
  adminCheck,
  deleteSubCategoryController
);

export default router;
