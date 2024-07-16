import React,{useState} from 'react';
import TodoList from './Components/TodoList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
  const[task,setTask]=useState("");
  const[todos,setTodos]=useState([]);
  const changeHandler=(e)=>{
    setTask(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    //console.log(task);
    const newTodos=[...todos, task];
    setTodos(newTodos); //assigned this to todos using settodos
    setTask("");//To empty the input after submit

  }
const deleteHandler=(indexvalue)=>{
   const newTodos = todos.filter((todo,index)=> index !== indexvalue);
   setTodos(newTodos);
}

  return(
    <div className="container mt-5">
    <center>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Todo Management Application</h5>
          <form onSubmit={submitHandler} className="form-inline">
            <input
              type="text"
              name="task"
              value={task}
              onChange={changeHandler}
              className="form-control mb-2 mr-sm-2"
              placeholder="Enter a task"
            />
            <button type="submit" className="btn btn-primary mb-2">Add</button>
          </form>
          <TodoList todoslist={todos} deleteHandler={deleteHandler} />
        </div>
      </div>
    </center>
  </div>
  );
}

export default App;