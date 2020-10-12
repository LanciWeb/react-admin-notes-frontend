import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const NotesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="text" />
        <EditButton label="Edit" basePath="/notes" />
        <DeleteButton label="Delete" basePath="/notes" />
      </Datagrid>
    </List>
  );
};

export default NotesList;
