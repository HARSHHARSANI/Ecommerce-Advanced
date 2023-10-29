import express from "express";
import { createOrUpdateUserController } from "../Controller/authController.js";
import { authCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-or-update-user", authCheck, createOrUpdateUserController);

export default router;
