import User from "../models/userMode.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    if (err.code === 11000) {
      return res.status(400).json({ error: "Duplicate key error" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
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
