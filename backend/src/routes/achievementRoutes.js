import { Router } from "express";
import {
  createAchievement, getAchievements, getAchievement, updateAchievement, deleteAchievement
} from "../controllers/achievementController.js";
import protect from "../middleware/auth.js";
const router = Router();
router.use(protect);
router.route("/").post(createAchievement).get(getAchievements);
router.route("/:id").get(getAchievement).put(updateAchievement).patch(updateAchievement).delete(deleteAchievement);
export default router;
