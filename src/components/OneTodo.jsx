import React from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom'
export const OneTodo = () => {

    const {id} = useParams();
    const [data,setData] = useState([]);

    const fetchProduct = () => {
        fetch(`http://localhost:8080/todo/${id}`)
            .then((res) => (res.json()))
            .then((res) => setData(res))

        console.log(data);
    }
    React.useEffect(() => {
        fetchProduct()
    }, [])

  return (
    <div>
        <h3>Title {'=>'} {data.title}</h3>
        <h3>Status {'=>'} {data.status?"completed":"incomplete"}</h3>
    </div>
  )
}
