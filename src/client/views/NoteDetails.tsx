import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <h1>Note Details</h1>
        {details && (
          <div>
            <h2>{details.first_name}</h2>
            <small>{details.created_at}</small>
            <button onClick={handleDelete}>Delete</button>
            <div>
              {details.body.split("\n").map((para, index) => (
                <p key={`para-index-${index}`}>
                  {para}
                  <br />
                </p>
              ))}
            </div>
          </div>
        )}

        <Link to={"/notes"}>Go Back</Link>
        <Link to={`/notes/${id}/update`} state={details?.body}>
          Edit Note
        </Link>
      </div>
    </div>
  );
};

export default NoteDetails;
