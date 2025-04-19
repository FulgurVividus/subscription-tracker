import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // If we have token, we must verify it
    const decoded = jwt.verify(token, JWT_SECRET);

    // Once decoded, we can check if the user still exists
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // If user exists, we attach the user to the request that is being made
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

export default authorize;
