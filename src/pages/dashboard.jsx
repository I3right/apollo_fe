import { useEffect, useState } from "react"
import FormControll from "../components/FormControll"
import ListTable from "../components/ListTable"
import TodoProvider from '../providers/todoProvoder'

const Dashboard = () => {
  const [data,setData] = useState([])
  const todoProvoder = new TodoProvider

  useEffect(()=>{
    getListTodo()
  },[])

  const getListTodo = async () => {
    const res = await todoProvoder.getTodos()
    setData(res)
  }

  return (
    <div id="dashboard" className="flex justify-between w-full px-8">
      <section id="list-group">
        <ListTable data={data} getListTodo={getListTodo} />
      </section>
      <section id="controll-group">
        <FormControll getListTodo={getListTodo} />
      </section>
    </div>
  )
}

export default Dashboard