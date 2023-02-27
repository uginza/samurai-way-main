import React, {useRef} from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";
import {ActionType, MyProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    myPosts: MyProfilePageType
    newPostText: string
    dispatch:(action: ActionType)=>void

}

export function MyPostList(props: MyPostsPropsType) {

    let myPostsElements = props.myPosts.myPosts.map(p => <MyPost id={p.id} value={p.value} likeCount={p.likeCount}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        props.dispatch({type:"ADD-POST",text:""})
    }

    const onPostChange = () => {
        if (newPostEl.current !== null) {
            props.dispatch({type:"UPDATE-NEW-POST-TEXT", text:newPostEl.current.value})
        }
    }

    return (
        <div className={s.post}>
            <div>My posts</div>
            <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
            <button onClick={addPost}>Add</button>
            <div>Send Message</div>
            {myPostsElements}
        </div>
    )
}