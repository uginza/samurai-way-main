import {ActionType, MyProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state: MyProfilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                value: state.newPostText,
                likeCount: 44
            }
            state.myPosts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
        default:return state
    }
}
export const addPostActionCreater = () => ({type: ADD_POST, text: ""})
export const updateNewPostTextActionCreater = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text})