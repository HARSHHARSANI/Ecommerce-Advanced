import express from "express";
import { authCheck } from "../middleware/authMiddleware.js";
import {
  applyCouponToUserCart,
  deleteUserCartController,
  getUserCartController,
  postCouponController,
  postUserAddressController,
  postUserCartDetailsController,
} from "../Controller/userController.js";

const router = express.Router();

router.post("/user/cart", authCheck, postUserCartDetailsController);
router.get("/user/cart", authCheck, getUserCartController);
router.delete("/user/cart", authCheck, deleteUserCartController);
router.post("/user/checkout/address", authCheck, postUserAddressController);
router.post("/user/checkout/coupon", authCheck, postCouponController);
router.post("/user/cart/coupon", authCheck, applyCouponToUserCart);

export default router;
