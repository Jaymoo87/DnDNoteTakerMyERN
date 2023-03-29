import { UsersTable } from "../../../types";
import { pgQuery } from "../pool";

//Queries for PostGress
const find = (email: string) => pgQuery<UsersTable[]>(`SELECT * FROM Users WHERE email=$1`, [email]);

const insert = (id: string, email: string, password: string, first_name: string, last_name: string) =>
  pgQuery<UsersTable[]>(
    "INSERT INTO users (id, email, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING id",
    [id, email, password, first_name, last_name]
  );

export default {
  find,
  insert,
};
