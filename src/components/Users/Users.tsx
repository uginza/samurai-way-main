import s from "./Users.module.css";
import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import UserPhoto from "../../assets/images/image.png"


export function Users(props: UsersPropsType) {

    const getUsers=()=> {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })


        }
    }
    return (
        <div className={s.users}>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map((u) => {
                return (
                    <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photos.small !== null ? u.photos.small : UserPhoto } className={s.userPhoto}/>
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
        </div>
    )
}