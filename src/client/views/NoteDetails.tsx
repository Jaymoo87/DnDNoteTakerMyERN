import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GiScrollUnfurled } from "react-icons/gi";

import noteService from "../services/notes";

interface NoteDetailsProps {}

const NoteDetails = (props: NoteDetailsProps) => {
  const nav = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState<{ [key: string]: any }>(null);

  useEffect(() => {
    noteService
      .getOneNote(id)
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    noteService
      .deleteNote(id)
      .then(() => nav("/notes"))
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="container p-4 mx-auto rounded-lg shadow-xl bg-neutral">
      <div>
        <div>
          <span className="flex justify-end">
            <GiScrollUnfurled className="text-2xl" />
          </span>
          <h1 className="dndfont">Note Details</h1>
        </div>
        {details && (
          <div className="p-4 m-2 shadow bg-neutral shadow-slate-800 rounded-xl">
            <h2 className="dndfont">{details.first_name}</h2>
            <small>{details.created_at}</small>
            <div className="flex justify-end">
              <Link to={`/notes/${id}/update`} className="m-2 btnfont btn btn-info btn-xs" state={details?.body}>
                Edit
              </Link>
            </div>
            <div>
              {details.body.split("\n").map((para, index) => (
                <p className="notefont" key={`para-index-${index}`}>
                  {para}
                  <br />
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <Link to={"/notes"} className="m-2 btnfont btn btn-info">
            Back
          </Link>
          <button onClick={handleDelete} className="m-2 btnfont btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;
