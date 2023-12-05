import express from "express";
import { adminCheck, authCheck } from "../middleware/authMiddleware";
import {
  removeController,
  uploadController,
} from "../Controller/CloudinaryController";

const router = express.Router();

router.post("/uploadimages", authCheck, adminCheck, uploadController);
router.delete("/removeimages", authCheck, adminCheck, removeController);

export default router;
