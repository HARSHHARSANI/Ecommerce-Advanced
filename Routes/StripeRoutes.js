import express from "express";
import { authCheck } from "../middleware/authMiddleware.js";
import { createPaymentIntentController } from "../Controller/StripeController.js";

const router = express.Router();

router.post("/create-payment-intent", authCheck, createPaymentIntentController);

export default router;
