import express from "express";
import { authCheck } from "../middleware/authMiddleware.js";
import { postUserCartDetailsController } from "../Controller/userController.js";

const router = express.Router();

router.post("/user/cart", authCheck, postUserCartDetailsController);

export default router;
