import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../utilities/use-form';
import notesService from '../services/notes';

import { Button, Container, Textarea, Toast } from '../components';

interface AddNoteProps {}

const AddNote = (props: AddNoteProps) => {
  const navigate = useNavigate();
  const { values, handleChanges } = useForm<{ body: string }>({ body: '' });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    notesService
      .addNewNote(values)
      .then((id) => navigate(`/notes/${id}`))
      .catch((e) => Toast.error(e.message));
  };

  return (
    <Container className="pt-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-primary">Jot down a new note</h1>
      <p className="mb-8 text-lg text-secondary">Remember an important event or character detail for your campaign.</p>
      <form className="flex flex-col items-center justify-center">
        <div className="w-full md:max-w-2xl form-control">
          <Textarea
            rows={15}
            name="body"
            value={values.body}
            onChange={handleChanges}
            placeholder="Start writing..."
            className="w-full p-2 border-gray-200 rounded resize-y"
          />
        </div>
        <Button color="primary" onClick={handleSubmit} className="mt-5">
          Jot that down!
        </Button>
      </form>
    </Container>
  );
};
export default AddNote;
