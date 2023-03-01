import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostListContainer} from "./MyPosts/MyPostListContainer";

type ProfilePropsType={
    store:StoreType
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={s.content}>
           <ProfileInfo/>
                <MyPostListContainer store={props.store}
                            />
        </div>
    )
}