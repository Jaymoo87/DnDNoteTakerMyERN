import { QueryResult } from "pg";

declare global {
  namespace Express {
    export interface Request {
      currentUser?: UsersTable;
      payload?: { id: string };
    }
  }
}

export interface Pg_Results extends QueryResult {
  insertId?: number;
}

export interface UsersTable {
  id?: string;
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  created_at?: string;
}
export interface NotesTable {
  id?: string;
  userid?: string;
  body?: string;
  created_at?: string | Date;
}

export interface UserNoteTable extends NotesTable {
  first_name?: string;
  last_name?: string;
}
