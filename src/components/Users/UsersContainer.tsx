import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


type mapStateToProps={
    users:InitialStateType
}

type MapDispatchToPropsType={
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users:Array<UserType>)=>void
}

export type UsersPropsType=mapStateToProps &  MapDispatchToPropsType

const mapStateToProps=(state: AppRootStateType):mapStateToProps=>{
    return{
        users:state.usersPage.users
    }
}

const mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer= connect (mapStateToProps,mapDispatchToProps)(Users)
