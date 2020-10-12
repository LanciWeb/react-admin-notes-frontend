import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
function App() {
  return <Admin dataProvider={dataProvider}></Admin>;
}

export default App;
