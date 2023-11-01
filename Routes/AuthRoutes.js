import express from "express";
import {
  createOrUpdateUserController,
  currentUserController,
} from "../Controller/authController.js";
import { authCheck, adminCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-or-update-user", authCheck, createOrUpdateUserController);
router.post("/current-user", authCheck, currentUserController);
router.post("/current-admin", authCheck, adminCheck, currentUserController);

export default router;
