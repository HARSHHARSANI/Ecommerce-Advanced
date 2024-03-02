import express from "express";
import { adminCheck, authCheck } from "../middleware/authMiddleware.js";
import { getAllOrderController } from "../Controller/orderController.js";
const router = express.Router();

// router.post("/createOrder", authCheck, createOrderController);
router.get("/allOrders", authCheck, getAllOrderController);

export default router;
