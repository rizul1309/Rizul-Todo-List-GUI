import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addnewTodo } from '../redux/actions';
const ToDoForm = () => {
    const [text,settext] = useState('   ')
    const dispatch = useDispatch()
    const OnFormSubmit=(e)=>{
        e.preventDefault();
        dispatch(addnewTodo(text));
        settext('')
    }
    const onInputChange=(e)=>{
        settext(e.target.value)
    }
  return (
    <form className='form' onSubmit={OnFormSubmit}>
        <input 
        placeholder='Enter new todo...'
        className='input'
        onChange={onInputChange}
        value={text}
        />
    </form>
  )
}

export default ToDoForm