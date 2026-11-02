import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async function protect(req, _res, next) {
  try {
    const header = req.get("Authorization");
    if (!header?.startsWith("Bearer ")) {
      const error = new Error("Authentication required. Send Authorization: Bearer <token>.");
      error.statusCode = 401;
      throw error;
    }
    const payload = jwt.verify(header.slice(7).trim(), process.env.JWT_SECRET);
    const user = await User.findById(payload.sub).select("_id name email education");
    if (!user) {
      const error = new Error("Account not found.");
      error.statusCode = 401;
      throw error;
    }
    req.user = user;
    next();
  } catch (error) {
    if (["JsonWebTokenError", "TokenExpiredError"].includes(error.name)) {
      error.statusCode = 401;
      error.message = "Invalid or expired token. Please sign in again.";
    }
    next(error);
  }
}
