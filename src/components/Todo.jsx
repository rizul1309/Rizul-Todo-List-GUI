import React, { useState } from 'react'
import { toggletodo,updateTodo,deletetodo} from '../redux/actions'
import { useDispatch } from 'react-redux'

const Todo = ({todo}) => {
    const [editing,setediting] = useState(false)
    const [text,settext]=useState(todo.data)
    const dispatch=  useDispatch()
    const onFormSubmit = (e) =>{
        e.preventDefault()
        setediting(prevstate=>!prevstate)
        dispatch(updateTodo(todo._id,text))
    }
  return (
    <li className='task'onClick={()=> dispatch(toggletodo(todo._id))}
    style={{
    textDecoration: todo.done ? 'line-through': '',
    textDecorationThickness: '2px',
    color: todo.done ? '#bdc3c7':'#34495e'
    }}>
        <span style={{display:editing?'none':''}}>
            {todo.data} 
        </span>
        <form style={{display:editing?'inline':'none'}} onSubmit={onFormSubmit}>
            <input className='edit-todo'type='text' value={text} onChange={(e)=>settext(e.target.value)}/>
        </form>
        <span className='icon' onClick={()=> dispatch(deletetodo(todo._id))}>
            <i className='fas fa-trash'/>
        </span>
        <span className='icon' onClick={()=>setediting(prevstate => !prevstate)}>
            <i className='fas fa-pen'/>
        </span>
    </li>
  )
}

export default Todo