import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostType} from "./MyPosts/Post/MyPost";

type ProfilePropsType={
    myPosts:Array<MyPostType>
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={s.content}>
           <ProfileInfo/>
                <MyPosts myPosts={props.myPosts}/>
        </div>
    )
}