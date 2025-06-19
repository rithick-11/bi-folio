import User from "../models/userMode.js";

export const authorization = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    next();
  } catch (error) {
    console.log(error);
  }
};
