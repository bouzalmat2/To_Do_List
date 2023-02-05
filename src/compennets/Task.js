import React,{useContext} from 'react';
import {RiCloseCircleLine} from "react-icons/ri"
import {BiCheckCircle} from "react-icons/bi"

import {TodoContext} from '../context/GlobalContext';

const Task = ({todo}) => {
    const{removeTodo, completeTodo}= useContext(TodoContext);
    return (
        <div className={todo.completed ? "todo-row  compeleted" : "todo-row"}>

            <div className="iconsContainer">
                <RiCloseCircleLine  onClick={()=>removeTodo(todo.id)} />
                <BiCheckCircle onClick={()=> completeTodo(todo.id)}  />
            </div>
         
            {todo.text}
        </div>
    );
}

export default Task;
