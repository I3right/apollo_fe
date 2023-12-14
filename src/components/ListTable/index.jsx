import TodoProvider from "../../providers/todoProvoder";

const ListTable = ({data, getListTodo}) => {
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
    <div>
      <h1>Todo List</h1>
      <ul>
        {data.map((todo,i) => (
          <li key={i}>
            <button onClick={()=>handleFinished(todo)}>DONE  ----- </button>
            {todo.content} - 
            <span className={todo.completed? 'text-green-700':'text-red-700'}>
              {todo.completed ? 'Completed' : 'Not compoleted'}
            </span>
            <button onClick={()=>handleDelete(todo)}> --- DEL</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListTable