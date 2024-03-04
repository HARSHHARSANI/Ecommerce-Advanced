import express from "express";
import { authCheck, adminCheck } from "../middleware/authMiddleware.js";
import {
  getAllTheOrdersForAdminController,
  orderStatusController,
} from "../Controller/AdminController.js";
const router = express.Router();

router.get(
  "/allorders",
  authCheck,
  adminCheck,
  getAllTheOrdersForAdminController
);

router.put(
  "/allorders/order-status",
  authCheck,
  adminCheck,
  orderStatusController
);

export default router;
