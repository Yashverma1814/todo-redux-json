import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {login} from '../redux/Auth/action'

export const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [token,setToken] = useState('');
    const dispatch = useDispatch();
    
    const handleLogin = (body) => {
        axios({
          method: "post",
          url: "https://reqres.in/api/login",
          data: body
        }).then(res => {
          setToken(res.data)
          console.log(token)
        }).catch(err => console.log(err))

        dispatch(login(token));
        localStorage.setItem('token',token)
    }
    if(token==='QpwL5tke4Pnpja7X4'){
        return <Navigate to={'/'} />
    }

  return (
    <div>
        <h2>Log In</h2>
        <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <Link to={'/'}>
        <button onClick={()=>handleLogin({email,password})}>Log In</button>
        </Link>
    </div>
  )
}
