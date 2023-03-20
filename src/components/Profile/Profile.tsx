import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostListContainer} from "./MyPosts/MyPostListContainer";
import {MapStateToPropsType} from "./ProfileContainer";

/*type ProfilePropsType={
    store:StoreType
}*/

export function Profile(props:MapStateToPropsType) {
    return (
        <div className={s.content}>
           <ProfileInfo profile={props.profile}/>
                <MyPostListContainer/>
        </div>
    )
}