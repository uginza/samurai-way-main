import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let reducers=combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer
})

export let store=createStore(reducers)

export type AppRootStateType= ReturnType<typeof reducers>