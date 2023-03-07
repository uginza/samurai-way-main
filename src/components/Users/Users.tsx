import s from "./Users.module.css";
import React from "react";
import {UsersPropsType} from "./UsersContainer";


export function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
                followed: true,
                name: "Valera",
                status: "I'm the boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
                followed: false,
                name: "Katya",
                status: "I'm the boss",
                location: {city: "SPB", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
                followed: false,
                name: "Kamilla",
                status: "I'm the boss",
                location: {city: "Kiev", country: "Ukraine"}
            },
            {
                id: 4,
                photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
                followed: false,
                name: "Lucreciy",
                status: "I'm the boss",
                location: {city: "New-York", country: "USA"}
            }
        ])
    }

    return (
        <div className={s.users}>
            {props.users.map((u) => {
                return (
                    <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
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
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
                    </div>
                )
            })}
        </div>
    )
}