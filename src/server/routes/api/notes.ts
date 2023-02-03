import { Router } from "express";
import db from "../../db";
import { checkToken } from "../../middlewares/auth.mw";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const results = await db.notes.getAllNotes();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "" });
  }
});

router.get("/private", checkToken, async (req, res, next) => {
  try {
    res.json("private enpoint");
  } catch (error) {
    next(error);
  }
});

export default router;
