import React from 'react';
import { createContext ,useState} from "react";
import { v4 } from 'uuid';


// objet context:
export const TodoContext=createContext();




const TodoProvider = ({children}) => {

  const[todos,setTodos]= useState([]);
  
  const addTodo=(text)=>{
    setTodos([...todos,{id:v4(),text,completed:false}]);

  };
  const removeTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  };

  const completeTodo=(id)=>{
    setTodos(
        todos.map((todo)=>{
            if(todo.id===id){
                todo.completed=!todo.completed;
            }
            return todo;
        })
    )

  }


    return (
        <TodoContext.Provider   value={{todos,addTodo, removeTodo,
            completeTodo}}>
           
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;
