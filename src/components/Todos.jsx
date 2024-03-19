import React, { useEffect } from 'react'
import { deletetodo, getallTodo } from '../redux/actions'
import { useDispatch,useSelector } from 'react-redux'   
import Todo from './Todo'
import Tabs from './Tabs'
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from '../redux/actions/type'
import Loader from './Loader'

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todos)
    const currentTab = useSelector(state=>state.currentTab)
    useEffect(()=>{
        dispatch(getallTodo())
    },[])
    const getTodos =()=>{
        if(currentTab === ALL_TODOS){
            return todos
        }
        else if(currentTab === ACTIVE_TODOS)
        {
            return todos.filter(todo=>!todo.done)
        }
        else if(currentTab === DONE_TODOS){
            return todos.filter(todo=>todo.done)
        }
    }
    const removedonetodo = () =>{
        todos.forEach(({done,_id}) => {
            if(done){
                dispatch(deletetodo(_id));
            }
        });
    }
    // if(!todos?.length) return <Loader/>;
  return (
    <article>
        <div>
            <Tabs currentTab={currentTab}/>
            {
                todos.some(todo=>todo.done) ? (
                    <button
                    onClick={removedonetodo} className='button clear'>
                        Remove Done Todos
                    </button> 
                ) : null
            }
        </div>
        {
            !todos?.length ? <Loader/> : 
                <ul>
                {
                    getTodos().map(todo=>(
                        <Todo
                        todo={todo}
                        key={todo._id}
                        />
                    ))
                }
                </ul>
        }
        
    </article>
  )
}

export default Todos