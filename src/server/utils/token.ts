import config from "../config";
import jwt from "jsonwebtoken";

export const createJWT = (id: string) => {
  try {
    const token = jwt.sign({ id }, config.jwt.secret, { expiresIn: config.jwt.expires });
    return token;
  } catch (error) {
    throw error;
  }
};
