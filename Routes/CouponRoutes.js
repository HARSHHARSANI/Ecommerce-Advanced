import express from "express";
import { adminCheck, authCheck } from "../middleware/authMiddleware.js";
import {
  createCouponController,
  deleteCouponController,
  getCouponController,
  getSingleCouponContrller,
  updateCouponController,
} from "../Controller/CouponController.js";

const router = express.Router();

router.post("/coupon", authCheck, adminCheck, createCouponController);
router.get("/coupon", getCouponController);
router.delete("/coupon/:id", authCheck, adminCheck, deleteCouponController);
router.patch("/coupon/:id", authCheck, adminCheck, updateCouponController);
router.get("/coupon/:id", getSingleCouponContrller);
export default router;
