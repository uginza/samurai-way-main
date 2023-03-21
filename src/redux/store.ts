import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {UserType} from "./usersReducer";

export type MyPostType = {
    id: number,
    value: string;
    likeCount: number;
}

export type DialogItemType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string
}

export type MyProfilePageType = {
    myPosts: Array<MyPostType>
    newPostText: string
    profile:ProfileType
}

export type ProfileType={
        photos:{
            small: string| undefined
            large: string| undefined
        }

}

export type dialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText:string
}

export type RootStateType = {
    myProfilePage: MyProfilePageType
    dialogsPage: dialogsPageType

}

export type ActionType = {
    type: string;
    text: string;
    profile?: ProfileType
}

export type ProfileActionType={
    type: string;
    text: string;
    profile: ProfileType
}

export type UsersActionType = {
    type: string;
    userId:number
    users:UserType[]
    currentPage:number
    totalUsersCount:number
    isFetching:boolean
}

export type authReducerActionType={
    type:string,
    data:AuthReducerType
    isFetching:boolean
}
export type AuthReducerType={
    userId: number,
    email: string,
    login: string,
}

export type StoreType={
    _state:RootStateType
    _callSubscriber:(state:RootStateType)=>void
    getState:()=>void
    subscribe:(observer: (state: RootStateType) => void)=>void
    dispatch:(action:ActionType)=>void
}

/*
export let store = {
    _state: {
        myProfilePage: {
            myPosts: [
                {id: 1, value: "Hi.How are you", likeCount: 35},
                {id: 2, value: "Putin put out", likeCount: 335}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Valera"},
                {id: 2, name: "Katya"},
                {id: 3, name: "Kamilla"},
                {id: 4, name: "Lucreciy"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Yo"},
                {id: 3, message: "How are you"},
            ],
            newMessageText: ""
        }
    },
    _callSubscriber(state:RootStateType) {
    },
    getState(){
        return this._state
    },
    subscribe (observer: (state: RootStateType) => void){
        this._callSubscriber = observer
    },
    dispatch (action:ActionType) {

        this._state.myProfilePage=profileReducer(this._state.myProfilePage,action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state)
    }
}*/
