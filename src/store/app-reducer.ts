import {Dispatch} from "redux";
import {authApi} from "../api/api";

export type AppStateType = {
    isLoading: boolean;
    isLogged: boolean
}
const initState:AppStateType={
    isLoading: false,
    isLogged: false
}
export type SetIsLoadingAT = {
    type: 'SET-IS-LOADING',
    value: boolean
}

type ActionTypes = SetIsLoadingType|SetIsLoadingType

type SetIsLoadingType = ReturnType<typeof setIsLoadingAC>

export const authMeTC=()=> {
    return (dispatch:Dispatch)=> {
        authApi.me()
            .then(()=>{
                dispatch(setIsLoggedAC(true))
            })
            .catch(()=>{
                dispatch(setIsLoggedAC(false))
            })
    }

}
export const loginTC=(email:string,password:string)=>{
    return (dispatch:Dispatch)=>{
        authApi.login(email,password)
            .then((res)=>{
                localStorage.setItem('token',res.data.token)
                dispatch(setIsLoggedAC(true))
            })
            .catch(()=>{
                dispatch(setIsLoggedAC(false))
            })
    }
}

export const appReducer = (state: AppStateType = initState, action: ActionTypes): AppStateType => {
    switch (action.type) {
        case "SET_IS_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }
}
export const setIsLoadingAC = (value: boolean) => {
    return { type: "SET_IS_LOADING", isLoading: value}
}
export const setIsLoggedAC = (value: boolean) => {
    return {type: 'SET-IS-LOGGED', value}
}



