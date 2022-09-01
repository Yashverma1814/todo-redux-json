import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { NotFound } from './NotFound'
import { OneTodo } from './OneTodo'
import { Todo } from './Todo'

export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/todo:id' element={<OneTodo />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}
