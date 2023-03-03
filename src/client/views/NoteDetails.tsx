import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import noteService from "../services/notes";

interface NoteDetailsProps {}

const NoteDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<{ [key: string]: any }>(null);

  useEffect(() => {
    noteService
      .getOneNote(id)
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <div>
        <h1>Note Details</h1>
        {details && (
          <div>
            <h2>{details.first_name}</h2>
            <small>{details.created_at}</small>
            <p>{details.body}</p>
          </div>
        )}

        <Link to={"/notes"}></Link>
      </div>
    </div>
  );
};

export default NoteDetails;
