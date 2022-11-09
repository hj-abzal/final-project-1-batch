import React from 'react';
import {Dispatch} from 'redux';
import {authApi} from "../api/api";
import {setIsLoadingAC} from "./app-reducer";

export type UsersStateType = {
    email: string;
    password:string;
}
export type SetLoginActionType = {
    type: 'SET NEW LOGIN',
    email: string,
    password:string
}
export type SetEmailActionType = {
    type: 'SET EMAIL',
    email: string,
}
export type SetPasswordActionType = {
    type: 'SET PASSWORD',
    password: string
}
export type OnCancelActionType={
    type:'ON_CANCEL',
}
type ActionsType = SetLoginActionType|SetEmailActionType|SetPasswordActionType|OnCancelActionType

const initialState: UsersStateType = {email: '', password: ''};

export const authReducer = (state = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case 'SET NEW LOGIN': {
            return {...state, email: action.email, password: action.password}
        }
        case 'SET EMAIL':{
            return {...state,email:action.email}
        }
        case 'SET PASSWORD':{
            return {...state,password:action.password}
        }
        case'ON_CANCEL':{
            return {...state,password:"",email:""}
        }
        default:
            return state
    }
}
export const RegisterNewLoginAC = (email: any, password: any): SetLoginActionType => {
    return {type: 'SET NEW LOGIN', email, password}
}
export const RegisterLoginTC = (email: any, password: any) => {
    return (dispatch: Dispatch) => {
        authApi.create(email, password)
            .then((res) => {
                const action = RegisterNewLoginAC(email, password);
                dispatch(action);
            })
            .catch()
            .finally(() => {
                dispatch(setIsLoadingAC(true))
            })
    }
}
export const SetEmailAC=(email:string):SetEmailActionType=>{
    return {type:'SET EMAIL',email}
}
export const SetPasswordAC=(password:string):SetPasswordActionType=>{
    return {type:'SET PASSWORD',password}
}
export const OnCancelAC=():OnCancelActionType=>{
    return {type:'ON_CANCEL'}
}
