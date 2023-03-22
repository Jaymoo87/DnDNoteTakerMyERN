import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../utilities/use-form";
import notesService from "../services/notes";
import { Toast } from "../components";

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
        nav(`/notes/${id}`);
      })
      .catch((e) => {
        Toast.error("This note was not worthy");
        console.log(e.message);
      });
  };

  return (
    <div>
      <h1 className="m-3 font-serif text-">Login</h1>
      <div>
        <form className="grid grid-cols-1 p-2 m-10 border rounded-lg lg:w-1/2 w-100 bg-secondary border-bordercolor">
          <label className="label label-primary">
            <span className="font-serif font-extrabold label-text text-warning ">Write it Down</span>
          </label>
          <textarea
            name="body"
            value={values.body}
            rows={20}
            onChange={handleChanges}
            className="block w-full p-3 mt-1 border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <button onClick={handleSubmit} type="button" className="mx-8 my-4 font-serif shadow-md btn btn-info">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
