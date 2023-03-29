import { Router } from "express";
import { createJWT } from "../../utils/token";
import db from "../../db";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import user from "../../db/queries/user";

const registerRouter = Router();

registerRouter.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !isValidEmail(email)) {
      const error = new Error("invalid email");
      error["status"] = 400;
      throw error;
    }
    const [emailFound] = await db.user.find(email);
    if (emailFound) {
      const error = new Error("email already exists");
      error["status"] = 400;
      throw error;
    }
    const userDTO = {
      id: uuidv4(),
      ...req.body,
    };

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    userDTO.password = hash;

    const result = await db.user.insert(
      userDTO.id,
      userDTO.email,
      userDTO.password,
      userDTO.first_name,
      userDTO.last_name
    );
    delete userDTO.password;

    const token = createJWT(userDTO.id);
    res.json({ token });
  } catch (error) {
    next(error);
  }
});

function isValidEmail(email: string) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

export default registerRouter;
