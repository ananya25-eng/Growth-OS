import { Router } from "express";
import { createSkill, getSkills, getSkill, updateSkill, deleteSkill } from "../controllers/skillController.js";
import protect from "../middleware/auth.js";
const router = Router();
router.use(protect);
router.route("/").post(createSkill).get(getSkills);
router.route("/:id").get(getSkill).put(updateSkill).patch(updateSkill).delete(deleteSkill);
export default router;
