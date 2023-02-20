import React from "react";
import s from './Profile.module.css';

export function ProfileInfo() {
    return (
        <div className={s.content}>
            <img className={s.img} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"></img>
            <div>Ava+description</div>
        </div>
    )
}