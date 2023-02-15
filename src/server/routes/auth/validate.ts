import { Router } from "express";
import { checkToken } from "../../middlewares/auth.mw";

import { createJWT } from "../../utils/token";

const validateRouter = Router();

validateRouter.get("/me", checkToken, (req, res, next) => {
  try {
    res.status(200).json({ message: "you gucci" });
  } catch (error) {
    next(error);
  }
});

export default validateRouter;
