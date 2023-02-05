import React,{useContext} from 'react';

import {TodoContext} from '../context/GlobalContext';

import Task from './Task';
export default function TodoList(){
   const {todos} = useContext(TodoContext);

    return (
        <div>
          {todos.map((todo)=>
              <Task  key={todo.id} todo={todo}/>   
           )} 
          </div>
           
    );
}