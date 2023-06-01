import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GiScrollUnfurled } from 'react-icons/gi';
import dayjs from 'dayjs';

import { UserNoteTable } from '../../types';

import noteService from '../services/notes';

import { Toast } from '../components';

interface NoteDetailsProps {}

const NoteDetails = (props: NoteDetailsProps) => {
  const nav = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState<UserNoteTable>(null);

  useEffect(() => {
    noteService
      .getOneNote(id)
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    noteService
      .deleteNote(id)
      .then(() => {
        Toast.success('the note has been thrown into the abyss');
        nav('/notes');
      })
      .catch((e) => {
        Toast.error('a force denies this destruction');
        console.log(e.message);
      });
  };

  return (
    <div className="container w-11/12 p-4 m-3 mx-auto bg-opacity-50 rounded-lg shadow-xl md:w-5/6 lg:w-1/3 bg-secondary">
      <div>
        <span className="flex justify-end">
          <GiScrollUnfurled className="text-2xl text-warning" />
        </span>
        <h1 className="font-extrabold dndfont text-warning">Note Details</h1>
      </div>
      {details && (
        <div className="p-4 m-2 shadow bg-[url(../../../pictures/greyParchment.png)] shadow-slate-800 rounded-xl">
          <h2 className="dndfont">{details.first_name}'s Note</h2>
          <small className="namefont">{dayjs(details.created_at).format('MM-DD-YYYY')}</small>
          <div className="flex justify-end">
            <Link to={`/notes/${id}/update`} className="m-2 btnfont btn btn-neutral btn-xs" state={details?.body}>
              Edit
            </Link>
          </div>
          <div>
            {details.body.split('\n').map((para, index) => (
              <p className=" notefont" key={`para-index-${index}`}>
                {para}
                <br />
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-end">
        <Link to={'/notes'} className="m-2 btnfont btn btn-info">
          Back
        </Link>
        <button onClick={handleDelete} className="m-2 btnfont btn btn-warning">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteDetails;
