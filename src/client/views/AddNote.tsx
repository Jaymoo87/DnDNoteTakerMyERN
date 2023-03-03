import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../utilities/use-form";
import notesService from "../services/notes";

interface AddNoteProps {}

const AddNote = (props: AddNoteProps) => {
  const nav = useNavigate();
  const { values, handleChanges } = useForm<{ body: string }>({ body: "" });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    notesService
      .addNewNote(values)
      .then((id) => nav(`/api/notes/${id}`))
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <h1>AddNote</h1>
      <div>
        <form>
          <textarea name="body" value={values.body} rows={10} cols={100} onChange={handleChanges} />
          <button type="button" className="btn" onClick={handleSubmit}>
            Jot That Down
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
