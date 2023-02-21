import React from "react";
import s from './MyPosts.module.css';
import {MyPost, MyPostType} from "./Post/MyPost";

type MyPostsPropsType = {
    myPosts: Array<MyPostType>
}

export function MyPosts(props:MyPostsPropsType) {

    let myPostsElements= props.myPosts.map(p=><MyPost id={p.id} value={p.value} likeCount={p.likeCount}/>)
    return (
        <div className={s.post}>
            <div>My posts</div>
            <textarea></textarea>
            <button>Add</button>
            <div>Send Message</div>
            {myPostsElements}
        </div>
    )
}