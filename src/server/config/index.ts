import dotenv from "dotenv";

dotenv.config();

console.log(process.env.TEST);

export default {
  app: {
    port: process.env.PORT,
  },
};
