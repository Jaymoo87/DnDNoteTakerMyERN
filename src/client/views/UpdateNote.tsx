import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useForm } from "../utilities/use-form";
import notesService from "../services/notes";

interface UpdateNoteProps {}

const UpdateNote = (props: UpdateNoteProps) => {
  const { id } = useParams();
  const nav = useNavigate();
  const { state } = useLocation();
  const { values, handleChanges, setValues } = useForm<{ body: string }>((state && { body: state }) || { body: "" });

  useEffect(() => {
    if (!state) {
      notesService
        .getOneNote(id)
        .then((data) => setValues({ body: data.body }))
        .catch((e) => console.log(e.message));
    }
  }, [id]);

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    notesService
      .updateNote(id, values)
      .then(() => nav(`/notes/${id}`))
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
