import User from "../models/userMode.js";
import Portfolio from "../models/portfolioModel.js";
import crypto from "crypto";
import { sendMail } from "../utils/sendMail.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const newPortfolio = new Portfolio();
    await newPortfolio.save();
    newUser.portfolio = newPortfolio._id;
    await newUser.save();
    const token = await newUser.generateToken();
    res.status(201).json({ user: newUser, token });
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    if (err.code === 11000) {
      return res.status(400).json({ error: "Duplicate key error" });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    user = await User.findOne({ username: email });
  }
  if (!user) return res.status(404).json({ error: "User not found" });
  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
  const token = await user.generateToken();
  return res.status(200).json({ user, token });
};

export const checkUsername = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    return res.status(200).json({ message: "Username is available" });
  } catch (err) {
    console.error(err);
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const verificationToken = user.generateVerificationToken();

    const templet = `<div>
      <h1>Forgot Password</h1>
      <p>Click the link below to reset your password:</p>
      <a href="${
        process.env.DEV === "development"
          ? "http://localhost:5173"
          : "https://bi-folio.vercel.app"
      }/reset-password?verify=${verificationToken}">Reset Password</a>
    </div>`;

    console.log(process.env.DEV);

    if (
      await sendMail(
        email,
        "Forgot Password",
        "Click the link to reset your password",
        templet
      )
    ) {
      await user.save();
      return res.status(200).json({
        message: "Password reset link sent to your email",
      });
    } else {
      return res.status(500).json({ error: "Error sending email" });
    }
  } catch (error) {
    log.error("Error in forgotPassword:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const restPassword = async (req, res) => {
  const { verify } = req.query;
  console.log(verify);
  try {
    const token = crypto.createHash("sha256").update(verify).digest("hex");
    if (!token) {
      return res.status(400).json({ error: "Invalid or missing token" });
    }
    const user = await User.findOne({ verifyToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid or expired token" });
    }
    user.verifyToken = null; // Clear the token after verification
    await user.save();
    return res.status(200).json({
      message: "Token verified successfully",
      user: { email: user.email },
    });
  } catch (error) {
    console.error("Error in verifyToken:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const changePassword = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.password = password;
    await user.save();
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error in changePassword:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
