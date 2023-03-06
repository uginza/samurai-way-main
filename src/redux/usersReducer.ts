import {ActionType, dialogsPageType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


export type UserType={
    id: number
    photoUrl:string
    followed:boolean
    name: string
    status:string
    location:UserLocationType
}

type UserLocationType={
    city:string
    country:string
}

const initialState:InitialStateType= {
    users:[]
};

export type InitialStateType={
    users: Array<UserType>
}

export const usersReducer = (state:InitialStateType=initialState, action: ActionType):InitialStateType => {
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
                {...state,users:[...state.users,action.user]}
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