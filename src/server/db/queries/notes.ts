import { pgQuery } from "../pool";
import type { UsersTable } from "../../../types";
import { NotesTable } from "../../../types";

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
  pgQuery("INSERT INTO notes SET id=$1, userid=$2, body=$3;", [id, userid, body]);

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
