import { Router } from "express";
import {
  changePassword,
  checkUsername,
  createUser,
  forgotPassword,
  loginUser,
  restPassword,
} from "../controllers/userController.js";
import { authorization } from "../middleware/auth.js";

const router = Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/check-username/:username", checkUsername);
router.post("/forgot-password", forgotPassword);
router.get("/reset-password", restPassword );
router.post("/change-password", changePassword );
router.get("/account", authorization, (req, res) => {
  res.json({ ok: "ok" });
});

export default router;
