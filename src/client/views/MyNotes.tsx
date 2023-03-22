import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../utilities/use-auth";
import notesService from "../services/notes";
import { GiScrollUnfurled, GiTiedScroll } from "react-icons/gi";

interface MyNotesProps {}

const MyNotes = (props: MyNotesProps) => {
  const nav = useNavigate();
  const { userid } = useParams();
  const { authenticated, logout } = useAuth();
  const [userNotes, setUserNotes] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    notesService
      .getUserNotes(userid)
      .then((data) => setUserNotes(data))
      .catch((e) => console.log(e));
  }, [userid]);

  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return (
    <div className="container p-4 mx-auto rounded-lg shadow-xl bg-secondary">
      <div>
        <span className="flex justify-end">
          <GiScrollUnfurled className="text-2xl text-warning" />
        </span>
        <h1 className="font-extrabold dndfont text-warning">Note Details</h1>
      </div>
      <button onClick={() => logout()}>Logout</button>

      {userNotes.map((note) => (
        <div
          className="p-4 m-2 border shadow h-52 border-warning bg-neutral shadow-slate-800 rounded-xl"
          key={`note-key-${note.id}`}
        >
          <h2 className="pb-3 text-warning ">{note.first_name}'s Note</h2>

          <p className="flex justify-center px-5 notefont text-warning">{note.body.slice(0, 125)} ... </p>
          <Link to={`/notes/${note.id}`} className="flex justify-end">
            <GiTiedScroll className="m-2 mt-2 text-2xl text-warning" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyNotes;
