import { Query } from "../pool";

export interface UsersTable {
  id?: string;
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  created_at?: string;
}

const find = (column: string, value: string) =>
  Query<UsersTable[]>(`SELECT * FROM Users WHERE ?? = ?`, [column, value]);

const insert = (values: { id: string; email: string; password: string; first_name: string; last_name: string }) =>
  Query<UsersTable[]>("INSERT INTO users SET ?; ", values);

export default {
  find,
  insert,
};
