import { Router } from "express";
import { checkUsername, createUser } from "../controllers/userController.js";

const router = Router();

router.post("/signup", createUser);
router.get("/check-username/:username", checkUsername);

export default router;
