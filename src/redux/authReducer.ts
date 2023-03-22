import {authReducerActionType, UsersActionType} from "./store";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_ISFETCHING = "TOGGLE_ISFETCHING";

const initialState: InitialStateType = {
    userId: 1,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false
};

export type InitialStateType = {
    userId: number,
    email: string,
    login: string,
    isFetching: boolean,
    isAuth: boolean
}

export const authReducer = (state: InitialStateType = initialState, action: authReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return (
                {
                    ...state,
                    ...action.data,
                    isAuth:true
                }
            )
        case TOGGLE_ISFETCHING:
            return (
                {...state, isFetching: action.isFetching}
            )
        default:
            return state;
    }
}

export const setUserData = (userId: number, email: string, login: string) => (
    {type: SET_USER_DATA, data: {userId, email, login}}
)

export const toggleIsFetching = (isFetching: boolean) => (
    {type: TOGGLE_ISFETCHING, isFetching} as const
)