import React from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";

export function MyPosts() {
    const myPostData=[
        {id:1,value:"Hi.How are you",likeCount:35},
        {id:2,value:"Putin put out",likeCount:335}
    ]
    return (
        <div>
            <div>My posts</div>
            <textarea></textarea>
            <button>Add</button>
            <div>Send Message</div>
            <MyPost id={myPostData[0].id} value={myPostData[0].value} likeCount={myPostData[0].likeCount}/>
            <MyPost id={myPostData[1].id} value={myPostData[1].value} likeCount={myPostData[1].likeCount}/>
        </div>
    )
}