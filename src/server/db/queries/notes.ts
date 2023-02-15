import { Query } from "../pool";

export interface NotesTable {
  id?: string;
  userid?: string;
  body?: string;
  created_at?: string | Date;
}

const getAllNotes = () => Query<NotesTable[]>("SELECT * FROM Notes");
const getOneNote = (id: string) => Query<NotesTable[]>("SELECT * FROM Notes WHERE id=?", [id]);
const insertNote = (values: NotesTable) => Query("INSERT INTO Notes SET ?", [values]);
const deleteNote = (id: string, userid: string) => Query("DELETE FROM Notes WHERE id=? AND userid=?", [id, userid]);
const updateNote = (editedNote: NotesTable, id: string, userid: string) =>
  Query<NotesTable[]>("UPDATE Notes SET ? WHERE id=? AND userid=?", [editedNote, id, userid]);

export default {
  getAllNotes,
  getOneNote,
  insertNote,
  deleteNote,
  updateNote,
};
