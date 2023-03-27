import mysql from "mysql";
import config from "../config";
import pg from "pg";
import { pg_results } from "../types";

const pool = mysql.createPool(config.db);

export const Query = <T = mysql.OkPacket>(sql: string, values?: any) => {
  return new Promise<T>((resolve, reject) => {
    const formatted = mysql.format(sql, values);
    pool.query(formatted, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

const pgPool = new pg.Pool({
  user: "noteadmin",
  password: "password",
  database: "dndnotes",
  host: "localhost",
});

const pgQuery = (sql: string, values: unknown[] = []) => {
  return new Promise((resolve, reject) => {
    pgPool.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.command === "SELECT") {
          resolve(results.rows);
        } else if (results.command === "INSERT") {
          const id: number = results.rows[0].id;
          const insertData: pg_results = { ...results, insertId: id };
          resolve(insertData);
        } else {
          resolve(results);
        }
      }
      console.log(results);
    });
  });
};

// pool.query("SELECT 1 + 1;", (err, results) => {
//   if (err) {
//     console.log("error", err.message);
//   }
//   console.log(results);
// });
