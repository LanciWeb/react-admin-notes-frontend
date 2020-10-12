import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import NotesList from './components/NotesList';

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="notes" list={NotesList} />
    </Admin>
  );
}

export default App;
