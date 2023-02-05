import React ,{useState}from 'react';
import { TodoContext } from '../context/GlobalContext';
import { useContext } from 'react';
// import {v4} from 'uuid';

const FormTasks = ( ) => {
   const{addTodo}=useContext(TodoContext);
   const[input,setInput]= useState('');
    
    
    

    let handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(input);
        setInput("");
     
    }
  
    return (


               <div >
                <form onSubmit={handleSubmit}  className="todo-form">
                    <input type="text" value={input}   onChange={(e)=>{setInput(e.target.value)}} className="todo-input" placeholder='Add a todo' />
                    <button type='submit' className="todo-button"  >Add Todo</button>
                </form>
        
                </div>
            

            
        





     
    );
}

export default FormTasks;
