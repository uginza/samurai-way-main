import {ActionType, MyProfilePageType, ProfileActionType, ProfileType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";


let initialState={
    myPosts: [
        {id: 1, value: "Hi.How are you", likeCount: 35},
        {id: 2, value: "Putin put out", likeCount: 335}
    ],
    newPostText: "",
    profile:{
        photos:{
            small: undefined,
            large:undefined
        }
    }
}

export const profileReducer = (state: MyProfilePageType=initialState, action: ProfileActionType): MyProfilePageType => {
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
        case SET_USER_PROFILE:{
            return {...state,profile:action.profile}
        }
        default:return state
    }
}
export const addPostActionCreater = () => ({type: ADD_POST, text: ""})
export const updateNewPostTextActionCreater = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const setUserProfile = (profile:ProfileType) => ({type: SET_USER_PROFILE, profile})
