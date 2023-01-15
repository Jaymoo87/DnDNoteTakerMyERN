import { Router } from "express";

const router = Router();

router.post("/", (req, res, next) => {
  res.json(req.body);
});

export default router;
