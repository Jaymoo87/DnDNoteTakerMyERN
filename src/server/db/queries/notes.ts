import { Query } from "../pool";
import type { UsersTable } from "./user";

export interface NotesTable {
  id?: string;
  userid?: string;
  body?: string;
  created_at?: string;
}

const getAllNotes = () =>
  Query<(NotesTable & UsersTable)[]>(
    "SELECT notes.*, users.first_name FROM notes JOIN users ON users.id = notes.userid ;"
  );
const getOneNote = (id: string) =>
  Query<(NotesTable & UsersTable)[]>(
    "SELECT notes.*, users.first_name FROM notes JOIN users ON users.id = notes.userid WHERE notes.id=?",
    [id]
  );
const insertNote = (values: NotesTable) => Query("INSERT INTO notes SET ?", [values]);
const deleteNote = (id: string, userid: string) => Query("DELETE FROM Notes WHERE id=? AND userid=?", [id, userid]);
const updateNote = (editedNote: NotesTable, id: string, userid: string) =>
  Query<(NotesTable & UsersTable)[]>("UPDATE Notes SET ? WHERE id=? AND userid=?", [editedNote, id, userid]);
const getUserNotes = (userid: string) =>
  Query<(NotesTable & UsersTable)[]>(
    "SELECT notes.*, users.first_name FROM notes JOIN users ON users.id = notes.userid WHERE userid=?",
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
