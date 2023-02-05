import './App.css';
import FormTasks from './compennets/FormTasks';
import TodoList from './compennets/TodoList';







const App=()=> {

  
  
  return (

    
   

    <div className='todo-app'>
      
         <h1>ToDo List</h1>

    
        
           <FormTasks />
        
           <TodoList />

        

     
    </div>
  );
}

export default App;
