import { ADD_TODO,DELETE_TODO,UPDATE_STATUS } from "./actionTypes";

export const addTodo = (data) =>{
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const deleteTodo = (data) =>{
    return {
        type: DELETE_TODO,
        payload: data
    }
}

export const updateStatus = (data) =>{
    return {
        type: UPDATE_STATUS,
        payload: data
    }
}