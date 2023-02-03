import type { UsersTable } from "../db/queries/user";

declare global {
  namespace Express {
    export interface Request {
      currentUser?: UsersTable;
      payload?: { id: string };
    }
  }
}
