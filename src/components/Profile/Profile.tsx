import React from "react";
import s from './Profile.module.css';
import {MyPostList} from "./MyPosts/MyPostList";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyProfilePageType} from "../../redux/state";

type ProfilePropsType={
    profilePage:MyProfilePageType
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={s.content}>
           <ProfileInfo/>
                <MyPostList myPosts={props.profilePage}/>
        </div>
    )
}