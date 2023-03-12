import {UsersActionType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_ISFETCHING = "TOGGLE_ISFETCHING";


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
    totalUsersCount:0,
    currentPage:1,
    isFetching:false
};

export type InitialStateType={
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
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
                {...state,users:action.users}
            )
        case SET_CURRENT_PAGE:
            return(
                {...state,currentPage:action.currentPage}
            )
        case SET_TOTAL_USERS_COUNT:
            return(
                {...state,totalUsersCount:action.totalUsersCount}
            )
        case TOGGLE_ISFETCHING:
            return(
                {...state,isFetching:action.isFetching}
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
export const setCurrentPageAC = (currentPage:number) => (
    {type: SET_CURRENT_PAGE,currentPage} as const
)
export const setTotalUsersCountAC = (totalUsersCount:number) => (
    {type: SET_TOTAL_USERS_COUNT,totalUsersCount} as const
)
export const toggleisFetchingAC = (isFetching:boolean) => (
    {type: TOGGLE_ISFETCHING,isFetching} as const
)