import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

const rootReducer=combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    usersPage:usersReducer
})

export let store=createStore(rootReducer)

export type AppRootStateType= ReturnType<typeof rootReducer>