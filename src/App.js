import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import NotesList from './components/NotesList';
import NotesEdit from './components/NotesEdit';

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="notes" list={NotesList} edit={NotesEdit} />
    </Admin>
  );
}

export default App;
