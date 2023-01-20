import dotenv from "dotenv";

dotenv.config();

export default {
  app: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
