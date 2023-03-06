import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";
import {
    MyPostType

} from "../../../redux/store";


type MyPostsPropsType = {
    newPostText: string
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
    posts: Array<MyPostType>
}

export function MyPostList(props: MyPostsPropsType) {

    let myPostsElements = props.posts.map(p => <MyPost id={p.id} value={p.value} likeCount={p.likeCount}/>)


    return (
        <div className={s.post}>
            <div>My posts</div>
            <textarea
                onChange={props.updateNewPostText}
                value={props.newPostText}/>
            <button onClick={props.addPost}>Add</button>
            <div>Send Message</div>
            {myPostsElements}
        </div>
    )
}