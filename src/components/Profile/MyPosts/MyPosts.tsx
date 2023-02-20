import React from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";

export function MyPosts() {
    return (
        <div>
            <div>My posts</div>
            <textarea></textarea>
            <button>Add</button>
            <div>Send Message</div>
            <MyPost value="Hi.How are you" likeCount={34}/>
            <MyPost value="Putin put out" likeCount={12}/>
        </div>
    )
}