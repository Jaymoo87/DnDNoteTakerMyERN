import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Toast } from '../components';
import notesService from '../services/notes';

interface NotesProps {}
const Notes = (props: NotesProps) => {
  const [notes, setNotes] = useState<{ [key: string]: any }[]>([]);
  useEffect(() => {
    notesService
      .getAllNotes()
      .then((data) => setNotes(data))
      .catch((e) => Toast.error(e.message));
  }, []);

  return (
    <Container className="py-16 ">
      <h2 className="mb-4 text-2xl font-bold">Your Notes</h2>
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
        {notes.map((note) => (
          <Card key={`note-id-${note.id}`}>
            <div className="card-body">
              <h2 className="card-title">{note.first_name}</h2>
              <h3 className="text-sm text-gray-500 card-subtitle">{dayjs(note.created_at).format('MMMM D, YYYY')}</h3>
              <p className="h-12 overflow-hidden">{note.body}</p>
              <div className="justify-end card-actions">
                <Link to={`/notes/${note.id}`}>
                  <Button color="primary">View Full Note</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Notes;
