import express from "express";
import { createUser, getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").post(createUser);
router.route("/").get(getAllUsers);

export default router;