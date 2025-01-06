import { Router } from "express";
import {
  register,
  getAll,
  getOne,
  login,
  update,
  deleteOne,
} from "../controllers/user.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", getAll);
router.get("/:id", getOne);
router.patch("/:id", update);
router.delete("/:id", deleteOne);

export default router;
