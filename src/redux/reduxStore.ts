import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

const rootReducer=combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
})


export let store=createStore(rootReducer)
console.log(store.getState())
export type AppRootStateType= ReturnType<typeof rootReducer>