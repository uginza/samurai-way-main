import React, {ChangeEvent, useRef} from "react";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profileReducer";
import {MyPostList} from "./MyPostList";
import {ActionType, RootStateType} from "../../../redux/store";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/reduxStore";


let mapStateToProps=(state:AppRootStateType)=>{
    return {
        posts:state.profile.myPosts,
        newPostText:state.profile.newPostText
    }
}
let mapDispatchToProps=(dispatch:(action:ActionType)=>void)=>{
    return {
        addPost:()=>{
            dispatch(addPostActionCreater())
        },
        updateNewPostText:(e: ChangeEvent<HTMLTextAreaElement>)=>{
            if (e.currentTarget.value) {
                let action = updateNewPostTextActionCreater(e.currentTarget.value)
                dispatch(action)
            }
        }
    }
}

export const MyPostListContainer=connect(mapStateToProps,mapDispatchToProps)(MyPostList);