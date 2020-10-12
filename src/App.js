import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import NotesList from './components/NotesList';
import NotesEdit from './components/NotesEdit';
import NotesCreate from './components/NotesCreate';

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="notes"
        list={NotesList}
        edit={NotesEdit}
        create={NotesCreate}
      />
    </Admin>
  );
}

export default App;
