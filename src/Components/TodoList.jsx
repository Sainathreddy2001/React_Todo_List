import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = ({ todoslist, deleteHandler }) => {
  return (
    <div className="mt-3">
      {todoslist.map((todo, index) => (
        <div key={index} className="d-flex justify-content-between align-items-center border p-2 mb-2">
          <h5 className="m-0">{todo}</h5>
          <button className="btn btn-danger" onClick={() => deleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
