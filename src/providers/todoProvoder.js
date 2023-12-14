import axios from "axios";
import host from '../utils/host'

class TodoProvider {
  testListTodo = async () =>{
    try {
      const url = `${host.api}/test`
      const res = await axios.get(url)
      return res.data.message;
    } catch (error) {
      console.log('error', error)
    }
  }
  
  getTodos  = async () =>{
    try {
      const url = `${host.api}/todo/get/all`
      const res = await axios.get(url)
      return res.data;
    } catch (error) {
      console.log('error', error)
    }
  }
  
  createTodo  = async (payload) =>{
    console.log('payload', payload)
    try {
      const url = `${host.api}/todo/create`
      const res = await axios.post(url, payload)
      return res.status;
    } catch (error) {
      console.log('error', error)
    }
  }

  updateTodo  = async (data) =>{
    const {id, value} = data
    const payload = {value}
    try {
      const url = `${host.api}/todo/update/${id}`
      const res = await axios.put(url, payload)
      return res.status;
    } catch (error) {
      console.log('error', error)
    }
  }

  deleteTodo  = async (data) =>{
    const {id} = data
    try {
      const url = `${host.api}/todo/delete/${id}`
      console.log('url', url)
      const res = await axios.delete(url)
      console.log('res', res)
      return res.status;
    } catch (error) {
      console.log('error', error)
    }
  }


}

export default TodoProvider;