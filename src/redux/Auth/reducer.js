import { LOGIN } from "./actionTypes";

const initState = {
    token : ''
}

export const Authreducer = (state=initState,action) =>{
    switch(action.type){
        case LOGIN:{
            console.log(action.payload)
            return {
                ...state,
                token:action.payload
            }
        }
        default:
            return state
    }
}