import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Login } from './Login'
import { NotFound } from './NotFound'
import { OneTodo } from './OneTodo'
import { Todo } from './Todo'

export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Todo />} />
            <Route path='/todo:id' element={<OneTodo />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}
