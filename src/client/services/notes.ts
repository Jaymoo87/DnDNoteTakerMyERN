import baseService from "./base";

const getAllNotes = async () => {
  try {
    const notes = await baseService.get("/api/notes");
    return notes;
  } catch (error) {}
};

const getOneNote = async (id: string) => {
  try {
    const note = await baseService.get(`/api/notes/${id}`);
    return note;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllNotes,
  getOneNote,
};
