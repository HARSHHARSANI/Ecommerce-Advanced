import express from "express";
import { authCheck } from "../middleware/authMiddleware.js";
import {
  deleteUserCartController,
  getUserCartController,
  postUserCartDetailsController,
} from "../Controller/userController.js";

const router = express.Router();

router.post("/user/cart", authCheck, postUserCartDetailsController);
router.get("/user/cart", authCheck, getUserCartController);
router.delete("/user/cart", authCheck, deleteUserCartController);

export default router;
