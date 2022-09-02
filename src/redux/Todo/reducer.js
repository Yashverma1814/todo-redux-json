import { ADD_TODO, DELETE_TODO, UPDATE_STATUS } from "./actionTypes";

const initState = {
    todo:[]
}

export const Todoreducer = (state=initState,action) => {
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todo:[...state.todo,action.payload],
            };
        case DELETE_TODO:
            return{
                ...state,
                todo:[...state.todo.filter((el)=>(el.id!==action.payload))]
            }    
        case UPDATE_STATUS:
            return{
                ...state,
                todo:[...state.todo.filter((el)=>{
                    if(el.id===action.payload){
                        el.status = !el.status;
                        return el
                    }
                    else{
                        return el
                    }
                })]
            }    
                
        default:
            return state
    }
}