import User from "../models/userMode.js";
import Portfolio from "../models/portfolioModel.js";

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
