import {UsersActionType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


export type UserType={
    id: number
    photos:UserPhotoType
    followed:boolean
    name: string
    status:string
    location:UserLocationType
}

type UserPhotoType={
    "small": string
    "large": string
}

type UserLocationType={
    city:string
    country:string
}

const initialState:InitialStateType= {
    users:[],
    pageSize:5,
    totalUsersCount:19,
    currentPage:1
};

export type InitialStateType={
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

export const usersReducer = (state:InitialStateType=initialState, action: UsersActionType):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return(
                {...state,users:state.users.map(u=> {
                if(u.id===action.userId){
                    return{...u,followed:true}
                }
                return u
                })}
            )

        case UNFOLLOW:
            return(
                {...state,users:state.users.map(u=> {
                        if(u.id===action.userId){
                            return{...u,followed:false}
                        }
                        return u
                    })}
            )
        case SET_USERS:
            return(
                {...state,users:[...state.users,...action.users]}
            )
        default:return state;
    }
}
export const followAC = (userId:number) => (
    {type:FOLLOW,userId} as const
)
export const unfollowAC = (userId:number) => (
    {type: UNFOLLOW,userId} as const
)
export const setUsersAC = (users:Array<UserType>) => (
    {type: SET_USERS,users} as const
)