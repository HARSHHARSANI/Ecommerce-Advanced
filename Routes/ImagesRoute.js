import express from "express";
import { allimagesController } from "../Controller/ImageController";
const router = express.Router();

router.get("/allimages", allimagesController);
export default router;
