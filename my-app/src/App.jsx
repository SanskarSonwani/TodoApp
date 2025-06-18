import './App.css';
import React from 'react';
import { useState } from 'react';
import { CreateTodo } from './CreateTodo';
import { Todos } from './Todos';
function App() {

  const [todos, settodos]=useState([]);
 fetch("http://localhost:3002/todos")
 .then(async function (res){
  const json = await res.json();
  settodos(json.todos); 
 })

  return (
    <div> 
    <CreateTodo/>
    <Todos todos={todos}/>
    </div>
  );
}

export default App;
