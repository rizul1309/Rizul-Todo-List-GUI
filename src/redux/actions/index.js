import axios from 'axios'
import { ADDNEW_TODO, GETALL_TODO,TOGGLE_TODO ,UPDATE_TODO,DELETE_TODO,TOGGLE_TAB} from './type';
const API_URL = 'https://rizul-todo-list.vercel.app/';    

export const addnewTodo = (data) =>async(dispatch)=>{
    try{
        const res = await axios.post(`${API_URL}/todos`,{data})
        dispatch({type: ADDNEW_TODO,payload:res.data})
    }
    catch(error){
        console.log('Error while calling addnewTodo API ', error.message)
    }
}

export const getallTodo = (data) =>async(dispatch)=>{
    try{
        const res = await axios.get(`${API_URL}/todos`)
        dispatch({type: GETALL_TODO,payload:res.data})
    }
    catch(error){
        console.log('Error while calling getallTodo API ', error.message)
    }
}


export const toggletodo = (id) =>async(dispatch)=>{
    try{
        const res = await axios.get(`${API_URL}/todos/${id}`)
        dispatch({type: TOGGLE_TODO,payload:res.data})
    }
    catch(error){
        console.log('Error while calling toggletodo API ', error.message)
    }
}
export const updateTodo = (id,data) =>async(dispatch)=>{
    try{
        const res = await axios.put(`${API_URL}/todos/${id}`,{data})
        dispatch({type: UPDATE_TODO,payload:res.data})
    }
    catch(error){
        console.log('Error while calling updateTodo API ', error.message)
    }
}
export const deletetodo = (id) =>async(dispatch)=>{
    try{
        const res = await axios.delete(`${API_URL}/todos/${id}`)
        dispatch({type: DELETE_TODO,payload:res.data})
    }
    catch(error){
        console.log('Error while calling deletetodo API ', error.message)
    }
}
export const toggletab = (tab) =>async(dispatch)=>{
    try{
        dispatch({type: TOGGLE_TAB,selected:tab})
    }
    catch(error){
        console.log('Error while calling toggletab API ', error.message)
    }
}