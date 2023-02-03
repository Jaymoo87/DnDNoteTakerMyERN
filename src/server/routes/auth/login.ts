import { Router } from "express";
import { handleLogin } from "../../middlewares/auth.mw";
import jwt from "jsonwebtoken";
import config from "../../config";
import { createJWT } from "../../utils/token";

const router = Router();

router.post("/", handleLogin, (req, res, next) => {
  try {
    const token = createJWT(req.currentUser.id);
    res.json(token);
  } catch (error) {
    next(error);
  }
});

export default router;
