import Achievement from "../models/Achievement.js";

const allowed = ["title", "category", "description", "issuer", "achievedOn", "status", "credentialUrl", "tags"];
const pick = (body) => Object.fromEntries(Object.entries(body).filter(([key]) => allowed.includes(key)));
const paging = (query) => {
  const page = Math.max(1, Number.parseInt(query.page, 10) || 1);
  const limit = Math.min(50, Math.max(1, Number.parseInt(query.limit, 10) || 20));
  return { page, limit, skip: (page - 1) * limit };
};

export async function createAchievement(req, res) {
  const achievement = await Achievement.create({ ...pick(req.body), user: req.user._id });
  return res.status(201).json({ success: true, message: "Achievement created.", achievement });
}
export async function getAchievements(req, res) {
  const { page, limit, skip } = paging(req.query);
  const filter = { user: req.user._id };
  if (req.query.category) filter.category = req.query.category;
  if (req.query.status) filter.status = req.query.status;
  const [achievements, total] = await Promise.all([
    Achievement.find(filter).sort({ achievedOn: -1, createdAt: -1 }).skip(skip).limit(limit),
    Achievement.countDocuments(filter)
  ]);
  return res.json({ success: true, count: achievements.length, total, page, pages: Math.ceil(total / limit), achievements });
}
export async function getAchievement(req, res) {
  const achievement = await Achievement.findOne({ _id: req.params.id, user: req.user._id });
  if (!achievement) return res.status(404).json({ success: false, message: "Achievement not found." });
  return res.json({ success: true, achievement });
}
export async function updateAchievement(req, res) {
  const updates = pick(req.body);
  if (!Object.keys(updates).length) return res.status(400).json({ success: false, message: "Send at least one valid field." });
  const achievement = await Achievement.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id }, updates, { new: true, runValidators: true }
  );
  if (!achievement) return res.status(404).json({ success: false, message: "Achievement not found." });
  return res.json({ success: true, message: "Achievement updated.", achievement });
}
export async function deleteAchievement(req, res) {
  const achievement = await Achievement.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!achievement) return res.status(404).json({ success: false, message: "Achievement not found." });
  return res.json({ success: true, message: "Achievement deleted." });
}
