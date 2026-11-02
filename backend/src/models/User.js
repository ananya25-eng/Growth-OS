import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
  email: {
    type: String, required: true, unique: true, lowercase: true, trim: true,
    match: /^\S+@\S+\.\S+$/
  },
  password: { type: String, required: true, minlength: 8, select: false },
  education: {
    college: { type: String, trim: true, maxlength: 120, default: "" },
    course: { type: String, trim: true, maxlength: 100, default: "" },
    year: { type: Number, min: 1, max: 8 },
    studentId: { type: String, trim: true, maxlength: 40, default: "" }
  }
}, {
  timestamps: true,
  toJSON: { transform(_doc, value) { delete value.password; delete value.__v; return value; } }
});

userSchema.pre("save", async function hashPassword() {
  if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 12);
});
userSchema.methods.comparePassword = function comparePassword(value) {
  return bcrypt.compare(value, this.password);
};

export default mongoose.model("User", userSchema);
