import { Query } from "../pool";

interface UsersTable {
  id?: string;
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  created_at?: string;
}

const find = (column: string, value: string) =>
  Query<UsersTable[]>(`SELECT * FROM Users WHERE ?? = ?`, [column, value]);

export default {
  find,
};
