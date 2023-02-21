import React from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";

export function MyPosts() {
    const myPosts=[
        {id:1,value:"Hi.How are you",likeCount:35},
        {id:2,value:"Putin put out",likeCount:335}
    ]

    let myPostsElements= myPosts.map(p=><MyPost id={p.id} value={p.value} likeCount={p.likeCount}/>)
    return (
        <div>
            <div>My posts</div>
            <textarea></textarea>
            <button>Add</button>
            <div>Send Message</div>
            {myPostsElements}
        </div>
    )
}