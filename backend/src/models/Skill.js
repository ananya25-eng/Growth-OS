import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  name: { type: String, required: true, trim: true, maxlength: 80 },
  category: { type: String, enum: ["Technical", "Soft", "Domain", "Other"], default: "Technical" },
  proficiency: { type: Number, min: 0, max: 100, default: 0 },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced", "Expert"], default: "Beginner" },
  notes: { type: String, trim: true, maxlength: 500, default: "" },
  evidence: { type: String, trim: true, maxlength: 300, default: "" }
}, { timestamps: true });

skillSchema.index({ user: 1, name: 1 }, { unique: true });
export default mongoose.model("Skill", skillSchema);
