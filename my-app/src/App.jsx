import './App.css';
import React from 'react';
import { useState } from 'react';
import { CreateTodo } from './CreateTodo';
import { Todos } from './Todos';
function App() {
  return (
    <div> 
    <CreateTodo/>
    <Todos todos={[
      {
        title : "afgfa",
        description : "agagedgg",
        completed : false
      }
    ]}/>
    </div>
  );
}

export default App;
