import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import noteService from '../services/notes';

import { GiReturnArrow, GiQuillInk, GiTrashCan } from 'react-icons/gi';
import { Button, Container, Toast } from '../components';

//test
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';

const modalRoot = document.getElementById('modal-root');

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg">
        <button className="absolute top-0 right-0 m-2 text-lg leading-none hover:text-red-500" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    el
  );
};

interface NoteDetailsProps {}

const NoteDetails = (props: NoteDetailsProps) => {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState<{ [key: string]: string }>(null);
  useEffect(() => {
    noteService
      .getOneNote(id)
      .then((data) => setDetails(data))
      .catch((e) => Toast.error(e.message));
  }, [id]);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    noteService
      .deleteNote(id)
      .then(() => navigate('/notes'))
      .catch((e) => Toast.error(e.message));
  };

  return (
    <>
      <Container className="py-16">
        <h1 className="mb-4 text-4xl font-bold text-primary">Note Details</h1>
        {details && (
          <div className="mb-8 text-lg">
            <h2 className="mb-2 text-2xl font-semibold text-primary">{details.first_name}</h2>
            <small className="text-secondary">{dayjs(details.created_at).format('MMMM D, YYYY')}</small>
            <div className="mt-4 text-secondary">
              {details.body.split('\n').map((para, idx) => (
                <p key={`para-idx-${idx}`}>
                  {para}
                  <br />
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col mt-4 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
          <Link className="flex items-center justify-center w-full text-center btn btn-ghost lg:w-auto" to="/notes">
            <GiReturnArrow className="mr-2" />
            Go Back
          </Link>
          <Link
            className="flex items-center justify-center w-full text-center btn btn-ghost lg:w-auto"
            to={`/notes/${id}/update`}
            state={details?.body}
          >
            <GiQuillInk className="mr-2" />
            Edit Note
          </Link>
          <Button color="ghost" onClick={handleDelete} className="flex items-center justify-center w-full lg:w-auto">
            <GiTrashCan className="mr-2" />
            This note stinks
          </Button>
        </div>
      </Container>
    </>
  );
};

export default NoteDetails;
