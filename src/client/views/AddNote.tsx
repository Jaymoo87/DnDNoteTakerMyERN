import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../utilities/use-form";
import notesService from "../services/notes";
import { Toast } from "../components";
import TextArea from "../components/TextArea";

interface AddNoteProps {}

const AddNote = (props: AddNoteProps) => {
  const nav = useNavigate();
  const { values, handleChanges } = useForm<{ body: string }>({ body: "" });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    notesService
      .addNewNote(values)
      .then((id) => {
        Toast.success("Note added, now contemplate on your choices");
        console.log(id);
        nav(`/notes/${id}`);
      })
      .catch((e) => {
        Toast.error("This note was not worthy");
        console.log(e.message);
      });
  };

  return (
    <div>
      <div>
        <form className="grid grid-cols-1 p-4 m-10 bg-opacity-50 border border-gray-300 rounded-lg lg:w-1/2 w-100 bg-secondary">
          <label className="label label-primary">
            <span className="font-extrabold label-text text-warning ">Write it Down</span>
          </label>
          <TextArea name="body" value={values.body} rows={20} onChange={handleChanges} />

          <button onClick={handleSubmit} type="button" className="mx-8 my-4 shadow-md namefont btn btn-info">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
