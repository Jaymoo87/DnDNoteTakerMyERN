import type { UsersTable } from "../db/queries/user";
import pg, { QueryResult } from "pg";

declare global {
  namespace Express {
    export interface Request {
      currentUser?: UsersTable;
      payload?: { id: string };
    }
  }
}

export interface pg_results extends QueryResult {
  insertId?: number;
}
