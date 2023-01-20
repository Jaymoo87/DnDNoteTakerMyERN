import { Query } from "../pool";

const getAllNotes = () => Query("SELECT * FROM Notes");

export default {
  getAllNotes,
};
