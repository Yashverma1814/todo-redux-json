import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import { addTodo } from '../redux/Todo/action'
import { TodoItems } from './TodoItems'

export const Todo = () => {

    const [title,setTitle]  = useState('');
    const dispatch = useDispatch();
    const localToken = localStorage.getItem('token');
    console.log(localToken)
    const token = useSelector((state)=>state.auth.token);
    const handleAdd = () =>{
        const payload = {
            title,
            status:false,
            id:uuid()
        }
        dispatch(addTodo(payload));
        const dataToPost = JSON.stringify(payload);

        fetch(`http://localhost:8080/todo`,{
            method:'POST',
            body:dataToPost,
            headers :{
                "Content-Type":"application/json"
            }

        }).then(()=>{            
            setTitle('')
        })
    }
    if(token===''&&localToken===null){
        return <Navigate to={'/login'} />
    }

  return (
    <div>
        <h2>TODO</h2>
        <div>
            <input type="text" placeholder='add todo here' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>
        </div>
        <TodoItems />
    </div>
  )
}
