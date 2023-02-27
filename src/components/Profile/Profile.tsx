import React from "react";
import s from './Profile.module.css';
import {MyPostList} from "./MyPosts/MyPostList";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyProfilePageType} from "../../redux/state";

type ProfilePropsType={
    profilePage:MyProfilePageType
    addPost:()=>void
    updateNewPost:(newPostText:string)=>void
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={s.content}>
           <ProfileInfo/>
                <MyPostList myPosts={props.profilePage}
                            newPostText={props.profilePage.newPostText}
                            addPost={props.addPost}
                            updateNewPost={props.updateNewPost}/>
        </div>
    )
}