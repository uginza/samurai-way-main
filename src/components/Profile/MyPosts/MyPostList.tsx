import React from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";
import {MyProfilePageType} from "../../../redux/state";

type MyPostsPropsType={
    myPosts:MyProfilePageType
}
export function MyPostList(props: MyPostsPropsType) {

    let myPostsElements = props.myPosts.myPosts.map(p => <MyPost id={p.id} value={p.value} likeCount={p.likeCount}/>)


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