import {ActionType, dialogsPageType} from "./store";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState= {
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


export const dialogsReducer = (state: dialogsPageType=initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state;
        default:return state;
    }
}
export const addMessageActionCreater = () => ({type: ADD_MESSAGE, text: ""})
export const updateNewMessageTextActionCreater = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})