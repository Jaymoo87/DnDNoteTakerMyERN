import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  try {
    res.json("get all notes");
  } catch (error) {
    res.status(500).json({ error: "" });
  }
});

export default router;
