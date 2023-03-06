import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../utilities/use-form";
import notesService from "../services/notes";

interface UpdateNoteProps {}

const UpdateNote = (props: UpdateNoteProps) => {
  const { id } = useParams();
  const nav = useNavigate();
  const { values, handleChanges } = useForm<{ body: string }>({ body: "" });

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    notesService
      .updateNote(id, values)
      .then((id) => nav(`/notes/${id}`))
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <h1>Update Note</h1>
      <div>
        <form>
          <textarea name="body" value={values.body} rows={10} cols={100} onChange={handleChanges}></textarea>
          <button type="button" className="btn" onClick={handleUpdate}>
            Update Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
