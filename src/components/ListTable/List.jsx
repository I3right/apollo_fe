import React from "react";
import TodoProvider from "../../providers/todoProvoder";

const List = ({todo, i, getListTodo}) => {
  const todoProvoder = new TodoProvider;

  const handleDelete = async (data) =>{
    const payload = {id: data._id, value: !data.completed}
    const status = await todoProvoder.deleteTodo(payload)
    if(status === 200) getListTodo()
  }

  const handleFinished = async (data) =>{
    const payload = {id: data._id, value: !data.completed}
    const status = await todoProvoder.updateTodo(payload)
    if(status === 200) getListTodo()
  }

  return (
    <li key={i} className="todo flex justify-between">
      <span>{todo.content}</span>
      <div className="flex">
        <span className={todo.completed ? "text-green-700 " : "text-red-700"}>
          {todo.completed ? "Completed" : "Not compoleted"}
        </span>
        <div className="btn-group">
          <button className="btn-toggle" onClick={() => handleFinished(todo)}>
            Finshd
          </button>
          <button className="btn-delete" onClick={() => handleDelete(todo)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default List;
