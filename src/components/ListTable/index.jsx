import List from "./List";

const ListTable = ({data, getListTodo}) => {

  return (
    <>
      <h2 className="list-header font-bold text-2xl">Todo List</h2>
      <ul className="list-container">
        <div  className="flex justify-between font-extrabold">
          <div>
            <span>Content</span>
          </div>
          <div>
            <span>status</span>
          </div>
        </div>
        {data.map((todo,i) => <List todo={todo} i={i} getListTodo={getListTodo} />)}
      </ul>
    </>
  )
}

export default ListTable