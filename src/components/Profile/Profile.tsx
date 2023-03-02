import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostListContainer} from "./MyPosts/MyPostListContainer";

/*type ProfilePropsType={
    store:StoreType
}*/

export function Profile(/*props:ProfilePropsType*/) {
    return (
        <div className={s.content}>
           <ProfileInfo/>
                <MyPostListContainer/>
        </div>
    )
}