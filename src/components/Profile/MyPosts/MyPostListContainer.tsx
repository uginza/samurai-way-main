import React, {ChangeEvent, useRef} from "react";
import {
    StoreType
} from "../../../redux/store";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profileReducer";
import {MyPostList} from "./MyPostList";
import {StoreContext} from "../../../StoreContext";

/*type MyPostListContainerPropsType = {
    store: StoreType

}*/


export function MyPostListContainer() {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreater())
                }

                const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    if (e.currentTarget.value !== null) {
                        let action = updateNewPostTextActionCreater(e.currentTarget.value)
                        store.dispatch(action)
                    }
                }
                return (
                    <MyPostList
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={store._state.myProfilePage.myPosts}
                        newPostText={store._state.myProfilePage.newPostText}
                    />)
            }}

        </StoreContext.Consumer>
    )
}