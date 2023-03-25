import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useForm } from "../utilities/use-form";
import notesService from "../services/notes";
import { GiScrollQuill } from "react-icons/gi";

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
      <h1 className="m-3 font-serif text-">Login</h1>
      <div>
        <form className="grid grid-cols-1 p-2 m-10 border rounded-lg lg:w-1/2 w-100 bg-secondary border-bordercolor">
          <label className="label label-primary">
            <span className="font-extrabold label-text text-warning ">Write it Down, Again</span>
          </label>
          <textarea
            name="body"
            value={values.body}
            rows={20}
            onChange={handleChanges}
            className="block w-full p-3 mt-1 bg-[url(../../../pictures/greyParchment.jpg)] text-secondary notefont border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <div className="flex justify-center p-3">
            <button type="button" className="w-1/3 btnfont btn" onClick={handleUpdate}>
              Update Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;

<GiScrollQuill className="text-2xl" />;
