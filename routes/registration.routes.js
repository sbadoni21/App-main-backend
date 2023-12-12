import express from "express";
import { createSignUp, loginUser } from "../controllers/singup.controller.js";

const router = express.Router();

router.route("/signup").post(createSignUp);
router.route("/login").post(loginUser);

export default router;
