import React, { useState } from 'react'
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateStatus } from '../redux/Todo/action';
import {Link} from 'react-router-dom'

export const TodoItems = () => {

    const [history, setHistory] = useState([]);
    const todoGlobalState = useSelector((state) => state.todo.todo);
    const dispatch = useDispatch();
    const handleRemove = (data) => {
        dispatch(deleteTodo(data));
    }
    const handleToggle = (data) => {
        dispatch(updateStatus(data))
    }
    const fetchAndUpdateData = () => {
        fetch(`http://localhost:8080/todo`)
            .then((res) => res.json())
            .then((res) => setHistory(res))
            .catch((err) => console.log(err))
        console.log(history,todoGlobalState)
    }
    useEffect(()=>{
        fetchAndUpdateData();
    },[])
    return (
        <div>
            {
                todoGlobalState == [] ? (
                    <div>
                        {history.map((el) => {
                            return (<div key={el.id}>
                                <h4>{el.title} {'-->'} {el.status ? 'Completed' : "Incompleted   "}
                                    <button onClick={() => handleToggle(el.id)}> Toggle</button>
                                    <button onClick={() => handleRemove(el.id)}>Remove</button>
                                    <Link to={`/todo${el.id}`}>View</Link>
                                </h4>
                            </div>)
                        })}
                    </div>) : (<div>
                        {todoGlobalState.map((el) => {
                            return (<div key={el.id}>
                                <h4>{el.title} {'-->'} {el.status ? 'Completed' : "Incompleted   "}
                                    <button onClick={() => handleToggle(el.id)}> Toggle</button>
                                    <button onClick={() => handleRemove(el.id)}>Remove</button>
                                    <Link to={`/todo${el.id}`}>View</Link>
                                </h4>
                            </div>)
                        })}
                    </div>)
            }
        </div>
    )
}
