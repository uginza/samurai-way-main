import {ActionType, dialogsPageType} from "./state";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export const dialogsReducer = (state: dialogsPageType, action: ActionType) => {
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