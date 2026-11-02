import jwt from "jsonwebtoken";
import User from "../models/User.js";

const signToken = (id) => jwt.sign(
  { sub: id.toString() }, process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
);

export async function register(req, res) {
  const { name, email, password, college, course, year, studentId } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Name, email and password are required." });
  }
  if (typeof password !== "string" || password.length < 8) {
    return res.status(400).json({ success: false, message: "Password must be at least 8 characters." });
  }
  const normalizedEmail = String(email).trim().toLowerCase();
  if (await User.findOne({ email: normalizedEmail })) {
    return res.status(409).json({ success: false, message: "An account with this email already exists." });
  }
  const user = await User.create({
    name, email: normalizedEmail, password,
    education: { college, course, year, studentId }
  });
  return res.status(201).json({
    success: true, message: "Account created successfully.",
    token: signToken(user._id), user
  });
}

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required." });
  }
  const user = await User.findOne({ email: String(email).trim().toLowerCase() }).select("+password");
  if (!user || !(await user.comparePassword(String(password)))) {
    return res.status(401).json({ success: false, message: "Email or password is incorrect." });
  }
  return res.json({ success: true, message: "Signed in successfully.", token: signToken(user._id), user });
}

export async function getMe(req, res) {
  return res.json({ success: true, user: req.user });
}
