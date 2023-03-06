import baseService from "./base";
import storage from "../utilities/storage";

const loginUser = async (payload: { [key: string]: string }) => {
  try {
    const { token } = await baseService.post("/auth/login", payload);
    storage.setToken(token);
  } catch (error) {
    throw error;
  }
};

const registerUser = async (payload: { [key: string]: string }) => {
  try {
    const { token } = await baseService.post("/auth/register", payload);
    storage.setToken(token);
  } catch (error) {
    throw error;
  }
};

const validateToken = async () => {
  try {
    await baseService.get("/auth/validate/me");
  } catch (error) {
    throw error;
  }
};

export default {
  loginUser,
  validateToken,
  registerUser,
};
