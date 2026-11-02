import Skill from "../models/Skill.js";

const allowed = ["name", "category", "proficiency", "level", "notes", "evidence"];
const pick = (body) => Object.fromEntries(Object.entries(body).filter(([key]) => allowed.includes(key)));
const paging = (query) => {
  const page = Math.max(1, Number.parseInt(query.page, 10) || 1);
  const limit = Math.min(50, Math.max(1, Number.parseInt(query.limit, 10) || 20));
  return { page, limit, skip: (page - 1) * limit };
};

export async function createSkill(req, res) {
  const skill = await Skill.create({ ...pick(req.body), user: req.user._id });
  return res.status(201).json({ success: true, message: "Skill created.", skill });
}
export async function getSkills(req, res) {
  const { page, limit, skip } = paging(req.query);
  const filter = { user: req.user._id };
  if (req.query.category) filter.category = req.query.category;
  const [skills, total] = await Promise.all([
    Skill.find(filter).sort({ proficiency: -1, name: 1 }).skip(skip).limit(limit),
    Skill.countDocuments(filter)
  ]);
  return res.json({ success: true, count: skills.length, total, page, pages: Math.ceil(total / limit), skills });
}
export async function getSkill(req, res) {
  const skill = await Skill.findOne({ _id: req.params.id, user: req.user._id });
  if (!skill) return res.status(404).json({ success: false, message: "Skill not found." });
  return res.json({ success: true, skill });
}
export async function updateSkill(req, res) {
  const updates = pick(req.body);
  if (!Object.keys(updates).length) return res.status(400).json({ success: false, message: "Send at least one valid field." });
  const skill = await Skill.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id }, updates, { new: true, runValidators: true }
  );
  if (!skill) return res.status(404).json({ success: false, message: "Skill not found." });
  return res.json({ success: true, message: "Skill updated.", skill });
}
export async function deleteSkill(req, res) {
  const skill = await Skill.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!skill) return res.status(404).json({ success: false, message: "Skill not found." });
  return res.json({ success: true, message: "Skill deleted." });
}
