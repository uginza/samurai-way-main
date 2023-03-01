import React, {ChangeEvent, useRef} from "react";
import {
    StoreType
} from "../../../redux/store";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profileReducer";
import {MyPostList} from "./MyPostList";

type MyPostListContainerPropsType = {
    store:StoreType

}



export function MyPostListContainer(props: MyPostListContainerPropsType) {
    const addPost = () => {
        props.store.dispatch(addPostActionCreater())
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value !== null) {
            let action=updateNewPostTextActionCreater(e.currentTarget.value)
            props.store.dispatch(action)
        }
    }

    return (
       <MyPostList updateNewPostText={onPostChange}
                   addPost={addPost}
                   posts={props.store._state.myProfilePage.myPosts}
                   newPostText={props.store._state.myProfilePage.newPostText}
       />
    )
}