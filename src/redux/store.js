import { legacy_createStore as createStore } from "redux";
import { Todoreducer } from "./Todo/reducer";
import { combineReducers } from "redux";
import { Authreducer } from "./Auth/reducer";

const rootReducer = combineReducers({
    auth:Authreducer,
    todo:Todoreducer
})

export const store = createStore(rootReducer) 
