import mysql from "mysql";
import config from "../config";

const pool = mysql.createPool(config.db);

export const Query = <T = any>(sql: string, values?: any) => {
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

// pool.query("SELECT 1 + 1;", (err, results) => {
//   if (err) {
//     console.log("error", err.message);
//   }
//   console.log(results);
// });
