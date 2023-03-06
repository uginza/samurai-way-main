import {ActionType, dialogsPageType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"

let initialState= {
    users: [
        {id: 1,followed:true, name: "Valera",status:"I'm the boss",location:{city:"Minsk",country:"Belarus"}},
        {id: 2,followed:false, name: "Katya",status:"I'm the boss",location:{city:"SPB",country:"Russia"}},
        {id: 3,followed:false, name: "Kamilla",status:"I'm the boss",location:{city:"Kiev",country:"Ukraine"}},
        {id: 4,followed:false, name: "Lucreciy",status:"I'm the boss",location:{city:"New-York",country:"USA"}}
    ]
}


export const usersReducer = (state: any=initialState, action: any):dialogsPageType => {
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
        default:return state;
    }
}
export const followAC = (userId:number) => ({type:FOLLOW,userId})
export const unfollowAC = (userId:number) => ({type: UNFOLLOW,userId})