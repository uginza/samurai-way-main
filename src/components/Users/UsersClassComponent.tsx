import s from "./Users.module.css";
import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import UserPhoto from "../../assets/images/image.png"


export class Users extends React.Component<UsersPropsType, any>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    getUsers=()=> {
        if (this.props.users.length === 0) {




        }
    }

    render(){return(<div className={s.users}>
            <button onClick={this.getUsers}>Get Users</button>
            {this.props.users.map((u) => {
                return (
                    <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photos.small !== null ? u.photos.small : UserPhoto } className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button
                                onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}