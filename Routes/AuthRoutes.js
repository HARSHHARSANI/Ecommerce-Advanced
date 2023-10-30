import express from "express";
import { createOrUpdateUserController, currentUserController } from "../Controller/authController.js";
import { authCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-or-update-user", authCheck, createOrUpdateUserController);
router.post("/current-user", authCheck, currentUserController);

export default router;
