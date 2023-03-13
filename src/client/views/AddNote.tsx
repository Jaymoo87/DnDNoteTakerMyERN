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
      .then((id) => nav(`/notes/${id}`))
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="grid w-auto p-4 m-3 justify-self-center rounded-3xl justify-items-center bg-neutral">
      <h1 className="flex justify-center h-10 p-2 m-3 font-serif font-bold text-black rounded shadow w-44 bg-secondary">
        AddNote
      </h1>
      <div>
        <form className="flex justify-center form-control">
          <textarea
            name="body"
            value={values.body}
            rows={10}
            cols={100}
            onChange={handleChanges}
            className="p-5 border rounded-lg shadow-lg border-primary"
          />
          <button type="button" className="flex w-40 m-3 btn btn-success" onClick={handleSubmit}>
            Jot That Down
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
