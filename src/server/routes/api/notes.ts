import { Router } from "express";
import db from "../../db";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const results = await db.notes.getAllNotes();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "" });
  }
});

export default router;
