import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import { useForm } from '../utilities/use-form';
import noteService from '../services/notes';
import { Button, Container, Textarea, Toast } from '../components';

interface UpdateNoteProps {}

const UpdateNote = (props: UpdateNoteProps) => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const { values, handleChanges, setValues } = useForm<{ body: string }>((state && { body: state }) || { body: '' });
  useEffect(() => {
    if (!state) {
      noteService
        .getOneNote(id)
        .then((data) => setValues({ body: data.body }))
        .catch((e) => Toast.error(e.message));
    }
  }, [id]);

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    noteService
      .updateNote(id, values)
      .then(() => navigate(`/notes/${id}`))
      .catch((e) => Toast.error(e.message));
  };

  return (
    <Container className="pt-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-primary">Update your note</h1>
      <p className="mb-8 text-lg text-secondary">Edit an existing note for your campaign.</p>
      <form className="flex flex-col items-center justify-center">
        <div className="w-full md:max-w-2xl form-control">
          <Textarea
            rows={15}
            name="body"
            value={values.body}
            onChange={handleChanges}
            placeholder="Edit your note..."
            className="w-full p-2 border-gray-200 rounded resize-y"
          />
        </div>
        <div className="flex justify-between w-full mt-5 md:max-w-md">
          <Link to={`/notes/${id}`} className="btn btn-ghost">
            Go Back
          </Link>
          <Button color="primary" onClick={handleUpdate}>
            Change it up!
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default UpdateNote;
