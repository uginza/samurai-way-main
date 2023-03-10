import {connect} from "react-redux";
import React from "react";
import {Users} from "./UsersClassComponent";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


type MapStateToPropsType={
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

type MapDispatchToPropsType={
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

export type UsersPropsType=MapStateToPropsType &  MapDispatchToPropsType

const mapStateToProps=(state: AppRootStateType):MapStateToPropsType=>{
    return{
        users :state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        } ,
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer= connect (mapStateToProps,mapDispatchToProps)(Users)
