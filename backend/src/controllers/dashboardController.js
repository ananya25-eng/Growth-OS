import Achievement from "../models/Achievement.js";
import Skill from "../models/Skill.js";

export async function getOverview(req, res) {
  const user = req.user._id;
  const [achievementCount, completedAchievements, skillCount, skillStats, recentAchievements] = await Promise.all([
    Achievement.countDocuments({ user }),
    Achievement.countDocuments({ user, status: "Completed" }),
    Skill.countDocuments({ user }),
    Skill.aggregate([
      { $match: { user } },
      { $group: { _id: null, average: { $avg: "$proficiency" } } }
    ]),
    Achievement.find({ user }).sort({ achievedOn: -1, createdAt: -1 }).limit(5)
      .select("title category achievedOn status")
  ]);
  return res.json({
    success: true,
    overview: {
      achievementCount, completedAchievements, skillCount,
      averageSkillProficiency: skillStats[0] ? Math.round(skillStats[0].average) : 0
    },
    recentAchievements
  });
}
