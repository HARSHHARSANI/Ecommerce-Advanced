import express from "express";
import {
  // razorpayPaymentVerification,
  razorpaycontroller,
} from "../Controller/RazorpayController.js";
import { authCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/paymentOptions", authCheck, razorpaycontroller);
// router.post("/paymentVerification", razorpayPaymentVerification);

export default router;
