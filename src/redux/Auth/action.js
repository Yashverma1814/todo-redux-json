import { LOGIN } from "./actionTypes";

export const login = (data) =>{
    return {
        type:LOGIN,
        payload:data
    }
}