import s from "./Users/Users.module.css";
import React from "react";
import {UsersPropsType} from "./UsersContainer";


export function Users(props: UsersPropsType) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vokrug.tv%2Fperson%2Fshow%2Fzhenya_kanikuly%2F&psig=AOvVaw0O_MObagKwqWOtcOry69x7&ust=1678197356259000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjCtuC6x_0CFQAAAAAdAAAAABAD',
                followed: true,
                name: "Valera",
                status: "I'm the boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vokrug.tv%2Fperson%2Fshow%2Fzhenya_kanikuly%2F&psig=AOvVaw0O_MObagKwqWOtcOry69x7&ust=1678197356259000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjCtuC6x_0CFQAAAAAdAAAAABAD',
                followed: false,
                name: "Katya",
                status: "I'm the boss",
                location: {city: "SPB", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vokrug.tv%2Fperson%2Fshow%2Fzhenya_kanikuly%2F&psig=AOvVaw0O_MObagKwqWOtcOry69x7&ust=1678197356259000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjCtuC6x_0CFQAAAAAdAAAAABAD',
                followed: false,
                name: "Kamilla",
                status: "I'm the boss",
                location: {city: "Kiev", country: "Ukraine"}
            },
            {
                id: 4,
                photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vokrug.tv%2Fperson%2Fshow%2Fzhenya_kanikuly%2F&psig=AOvVaw0O_MObagKwqWOtcOry69x7&ust=1678197356259000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjCtuC6x_0CFQAAAAAdAAAAABAD',
                followed: false,
                name: "Lucreciy",
                status: "I'm the boss",
                location: {city: "New-York", country: "USA"}
            }
        ])
    }

    return (
        <div className={s.users}>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button
                                onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            : <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>}

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
            </div>)}
        </div>
    )
}