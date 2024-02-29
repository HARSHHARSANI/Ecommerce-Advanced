import express from "express";
import { authCheck } from "../middleware/authMiddleware.js";
import {
  createPaymentIntentController,
  paymentVerification,
} from "../Controller/razorpayController.js";

const router = express.Router();

router.post("/create-payment-intent", authCheck, createPaymentIntentController);
router.post("/paymentVerification", authCheck, paymentVerification);

export default router;
