import express from "express";
import { createSubCategoryController } from "../Controller/SubCategoryController";

const router = express.Router();

router.get("/", createSubCategoryController);

export default router;
