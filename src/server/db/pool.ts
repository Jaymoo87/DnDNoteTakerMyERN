import mysql from "mysql";
import config from "../config";
import pg, { QueryResult } from "pg";
import { Pg_Results } from "../../types";

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

const pgPool = new pg.Pool(config.pgdb);

export const pgQuery = <T = Pg_Results>(sql: string, values: unknown[] = []) => {
  return new Promise<T>((resolve, reject) => {
    pgPool.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.command === "SELECT") {
          resolve(results.rows as T);
        } else if (results.command === "INSERT") {
          const id: number = results.rows[0].id;
          const insertData = { ...results, insertId: id };
          //@ts-ignore
          resolve(insertData);
        } else {
          //@ts-ignore
          resolve(results);
        }
      }
      console.log(results);
    });
  });
};
