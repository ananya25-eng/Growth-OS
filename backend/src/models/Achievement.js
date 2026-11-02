import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  title: { type: String, required: true, trim: true, maxlength: 120 },
  category: {
    type: String, required: true,
    enum: ["Academic", "Project", "Certification", "Internship", "Competition", "Volunteering", "Other"]
  },
  description: { type: String, trim: true, maxlength: 1000, default: "" },
  issuer: { type: String, trim: true, maxlength: 120, default: "" },
  achievedOn: { type: Date, default: Date.now },
  status: { type: String, enum: ["Completed", "In Progress", "Planned"], default: "Completed" },
  credentialUrl: { type: String, trim: true, default: "" },
  tags: { type: [String], default: [] }
}, { timestamps: true });

achievementSchema.index({ user: 1, achievedOn: -1 });
export default mongoose.model("Achievement", achievementSchema);
