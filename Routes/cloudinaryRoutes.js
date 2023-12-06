import express from "express";
import { adminCheck, authCheck } from "../middleware/authMiddleware.js";
import {
  removeController,
  uploadController,
} from "../Controller/CloudinaryController.js";

const router = express.Router();

router.post("/uploadimages", authCheck, adminCheck, uploadController);
router.post("/removeimages", authCheck, adminCheck, removeController);

export default router;
