import {ActionType, MyProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState={
    myPosts: [
        {id: 1, value: "Hi.How are you", likeCount: 35},
        {id: 2, value: "Putin put out", likeCount: 335}
    ],
    newPostText: ""
}

export const profileReducer = (state: MyProfilePageType=initialState, action: ActionType): MyProfilePageType => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                value: state.newPostText,
                likeCount: 44
            }
            return {...state,
                myPosts:[...state.myPosts,newPost],
                newPostText: ""}
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state,newPostText : action.text}
        }
        default:return state
    }
}
export const addPostActionCreater = () => ({type: ADD_POST, text: ""})
export const updateNewPostTextActionCreater = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text})