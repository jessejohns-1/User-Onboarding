//importing everything
import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form'
import { Schema } from 'yup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
      </header>
    </div>
  );
}

export default App;
