import { pgQuery } from "../pool";
import type { UsersTable } from "../../../types";
import { NotesTable } from "../../../types";

// Queries for PostGres
const getAllNotes = () =>
  pgQuery<(NotesTable & UsersTable)[]>(
    "SELECT notes.*, users.first_name FROM notes JOIN users ON users.id = notes.userid"
  );
const getOneNote = (id: string) =>
  pgQuery<(NotesTable & UsersTable)[]>(
    "SELECT notes.*, users.first_name FROM notes JOIN users ON users.id = notes.userid WHERE notes.id=$1;",
    [id]
  );
const insertNote = (id: string, userid: string, body: string) =>
  pgQuery("INSERT INTO notes (id, userid, body) VALUES ($1, $2, $3) RETURNING id", [id, userid, body]);

const deleteNote = (id: string, userid: string) =>
  pgQuery("DELETE FROM Notes WHERE id=$1 AND userid=$2;", [id, userid]);

const updateNote = (body: string, id: string, userid: string) =>
  pgQuery<(NotesTable & UsersTable)[]>("UPDATE Notes SET body=$1 WHERE id=$2 AND userid=$3;", [body, id, userid]);

const getUserNotes = (userid: string) =>
  pgQuery<(NotesTable & UsersTable)[]>(
    "SELECT notes.*, users.first_name FROM notes JOIN users ON users.id = notes.userid WHERE notes.userid=$1;",
    [userid]
  );

export default {
  getAllNotes,
  getOneNote,
  insertNote,
  deleteNote,
  updateNote,
  getUserNotes,
};
