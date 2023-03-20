import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {MapStateToPropsType} from "../ProfileContainer";

export function ProfileInfo(props:MapStateToPropsType) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <img className={s.img} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"></img>
            <div>
                <img src={props.profile.photos.large}/>
                Ava+description
            </div>
        </div>
    )
}