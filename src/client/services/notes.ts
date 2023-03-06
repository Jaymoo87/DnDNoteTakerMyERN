import baseService from "./base";

const getAllNotes = async () => {
  try {
    const notes = await baseService.get("/api/notes");
    return notes;
  } catch (error) {
    throw error;
  }
};

const getOneNote = async (id: string) => {
  try {
    const note = await baseService.get(`/api/notes/${id}`);
    return note;
  } catch (error) {
    throw error;
  }
};

const addNewNote = async (payload: { [key: string]: string }) => {
  try {
    const { id } = await baseService.post("/api/notes", payload);
    return id;
  } catch (error) {
    throw error;
  }
};

const deleteNote = async (id: string) => {
  try {
    await baseService.destroy(`/api/notes/${id}`);
  } catch (error) {
    throw error;
  }
};

const updateNote = async (id: string, payload: { [key: string]: string }) => {
  try {
    await baseService.update(`/api/notes/${id}`, payload);
  } catch (error) {
    throw error;
  }
};

export default {
  getAllNotes,
  getOneNote,
  addNewNote,
  deleteNote,
  updateNote,
};
