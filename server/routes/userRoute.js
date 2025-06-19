import { Router } from "express";
import {
  checkUsername,
  createUser,
  loginUser,
} from "../controllers/userController.js";
import { authorization } from "../middleware/auth.js";

const router = Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/check-username/:username", checkUsername);
router.get("/account", authorization, (req, res) => {
  res.json({ ok: "ok" });
});

export default router;
