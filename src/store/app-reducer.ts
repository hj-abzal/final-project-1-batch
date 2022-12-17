import {Dispatch} from "redux";
import {authApi, packsApi} from "../api/api";
import {NavigateFunction} from "react-router/dist/lib/hooks";

export type AppStateType = {
    isLoading: boolean;
    isLogged: boolean;
    errorMessage: string;
}
const initState: AppStateType = {
    isLoading: false,
    isLogged: false,
    errorMessage: ''
}

type ActionTypes =
    | ReturnType<typeof setIsLoadingAC>
    | ReturnType<typeof setIsLoggedAC>
    | ReturnType<typeof setErrorMessageAC>


export const appReducer = (state: AppStateType = initState, action: ActionTypes): AppStateType => {
    switch (action.type) {
        case "SET_IS_LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET_IS_LOGGED":
            return {...state, isLogged: action.value}
        case "SET_ERROR_MESSAGE":
            return {...state, errorMessage: action.value}
        default:
            return state;
    }
}

export const setIsLoadingAC = (value: boolean) => {
    return {type: "SET_IS_LOADING", isLoading: value} as const
}

export const setIsLoggedAC = (value: boolean) => {
    return {type: 'SET_IS_LOGGED', value} as const
}

export const setErrorMessageAC = (value: '') => {
    return {type: 'SET_ERROR_MESSAGE', value} as const
}


export const LoginTC = (email: string, password: string, navigate: NavigateFunction) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        authApi.login(email, password)
            .then((res) => {
                localStorage.setItem('token',res.data.token)
                navigate('/')
            })
            .catch((e) => {
                if (e.response?.data?.error) {
                    dispatch(setErrorMessageAC(e.response.data.error))
                }
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false))
            })
    }
}


export const registerLoginTC = (email: string, password: string, navigate: NavigateFunction) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoadingAC(true))
        authApi.create(email, password)
            .then((res) => {
                navigate('/login')
            })
            .catch((e) => {
               if (e.response?.data?.error) {
                   dispatch(setErrorMessageAC(e.response.data.error))
               }
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false))
            })
    }
}
