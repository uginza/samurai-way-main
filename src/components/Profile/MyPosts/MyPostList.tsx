import React, {useRef} from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";
import {MyProfilePageType} from "../../../redux/state";

type MyPostsPropsType={
    myPosts:MyProfilePageType
}
export function MyPostList(props: MyPostsPropsType) {

    let myPostsElements = props.myPosts.myPosts.map(p => <MyPost id={p.id} value={p.value} likeCount={p.likeCount}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            alert(newPostEl.current.value)
        }
    }

    return (
        <div className={s.post}>
            <div>My posts</div>
            <textarea ref={newPostEl}></textarea>
            <button onClick={addPost}>Add</button>
            <div>Send Message</div>
            {myPostsElements}
        </div>
    )
}