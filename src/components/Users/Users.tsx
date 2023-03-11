import s from "./Users.module.css";
import React from "react";
import UserPhoto from "../../assets/images/image.png"
import {UserType} from "../../redux/usersReducer";

export type UsersPropsType={
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,
    onClickHandler:(pageNumber:number)=>void
}

export function Users(props: UsersPropsType) {
    let pageQuantity = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageQuantity; i++) {
        pages.push(i)
    }


    return (<div className={s.users}>
        <div>
            {pages.map(p => <span
                className={props.currentPage === p ? s.selectedPage : ''}
                onClick={(e) => {
                    props.onClickHandler(p)
                }}>{p}</span>)}
        </div>
        {props.users.map((u) => {
            return (
                <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : UserPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button
                                onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>

                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>
            )
        })}
    </div>)
}