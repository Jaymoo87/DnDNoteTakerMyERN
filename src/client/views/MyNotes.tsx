import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../utilities/use-auth';
import notesService from '../services/notes';
import { GiScrollUnfurled, GiTiedScroll } from 'react-icons/gi';

interface MyNotesProps {}

const MyNotes = () => {
  const nav = useNavigate();
  const { userid } = useParams();
  const { authenticated, logout } = useAuth();
  const [userNotes, setUserNotes] = useState<{ [key: string]: any }[]>(null);

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
        <h1 className="font-extrabold dndfont text-warning">My Notes</h1>
      </div>
      <button onClick={() => logout()}>Logout</button>

      {userNotes?.map((notes) => (
        <div
          className="p-4 m-2 border shadow h-52 border-warning bg-[url(../../../pictures/greyParchment.png)] shadow-slate-800 rounded-xl"
          key={`note-key-${notes.id}`}
        >
          <h2 className="pb-3 text-secondary namefont">{notes.first_name}'s Note</h2>

          <p className="flex justify-center px-5 notefont text-warning">{notes.body.slice(0, 125)} ... </p>
          <Link to={`/notes/${notes.id}`} className="flex justify-end">
            <GiTiedScroll className="m-2 mt-2 text-2xl text-secondary" />
          </Link>
        </div>
      ))}

      {userNotes?.length === 0 && <div>No notes found.</div>}
    </div>
  );
};

export default MyNotes;
