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
  pgdb: {
    host: process.env.PGDB_HOST,
    user: process.env.PGDB_USER,
    password: process.env.PGDB_PASSWORD,
    database: process.env.PGDB_DATABASE,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expires: process.env.JWT_EXPIRES,
  },
};
