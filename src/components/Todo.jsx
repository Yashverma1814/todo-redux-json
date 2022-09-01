import React from 'react'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action'
import { TodoItems } from './TodoItems'
import { useEffect } from 'react'

export const Todo = () => {

    const [title,setTitle]  = useState('');
    const dispatch = useDispatch();

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
