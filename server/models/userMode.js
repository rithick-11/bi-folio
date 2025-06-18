import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";


const userShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
  },
  verifyTokenExpiration: {
    type: Date,
  },
  portfolio:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Portfolio"
  }
});

userShema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userShema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userShema.methods.generateToken = async function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  return token;
};

userShema.methods.generateVerificationToken = function () {
  const verificationToken = crypto.randomBytes(32).toString("hex");
  this.verifyToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");
  this.verifyTokenExpiration = Date.now() + 60 * 60 * 1000 * 2;
  return verificationToken;
};

userShema.methods.verifyAccount = async function () {
  this.verify = true;
  this.verifyToken = undefined;
  this.verifyTokenExpiration = undefined;
  await this.save();
};

const User = mongoose.model("User", userShema);

export default User