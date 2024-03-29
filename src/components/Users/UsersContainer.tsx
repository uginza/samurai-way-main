import {connect} from "react-redux";
import React from "react";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/reduxStore";

import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToPropsType={
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}

type MapDispatchToPropsType={
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
}


export type UsersPropsType=MapStateToPropsType &  MapDispatchToPropsType

export class UserListAPIComponent extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
    onClickHandler=(pageNumber:number)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onClickHandler={this.onClickHandler}
        />
            </>
    }
}

const mapStateToProps=(state: AppRootStateType):MapStateToPropsType=>{
    return{
        users :state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

/*const mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
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
        },
        toggleIsFetching:(isFetching:boolean)=>{
            dispatch(toggleisFetchingAC(isFetching))
        }
    }
}*/
/*const connect1 = (arg1: any, arg2: any) => innerConnect

const innerConnect = (component: JSX.Element) => ({some: 1})
connect1(1, 2)(<div/>)*/

export const UsersContainer= connect (mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching})(UserListAPIComponent)


/*
const users = [{id: 1, n: 5}]
const f = (payload: any) =>(n: number) => {}

const C = () => {
    const a = 5
    return () => (
        <div>
            {users.map(u => {
                const onCLick = f(u.id)(a)
                return (
                    <div onClick={onCLick}>

                    </div>
                )
            })}
        </div>
    )
}*/
