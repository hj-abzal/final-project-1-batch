import s from './Register.module.css'
import React, {ChangeEvent, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    OnCancelAC,
    RegisterLoginTC,
    SetEmailAC,
    SetPasswordAC,
} from "../../store/auth-reduser";
import {AppRootStateType} from "../../store/store";
import {Navigate} from "react-router-dom";
import {Login} from "../Login/Login";


export const Register = () => {
    const email = useSelector<AppRootStateType, string>(state => state.auth.email) // from redux
    const password = useSelector<AppRootStateType, string>(state => state.auth.password) // from redux
    const dispatch = useDispatch<any>();

    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }
    const enterPassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetPasswordAC(e.currentTarget.value))
    }
    const enterEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetEmailAC(e.currentTarget.value))
    }
    const enterConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setConfirmPassword(e.currentTarget.value))
    }
    const onClickCancel = () => {
        dispatch(OnCancelAC())
        setConfirmPassword('')
    }
    const onClickRegister = () => {
        dispatch(RegisterLoginTC(email, password))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.modal}>
                <div className={s.p}>
                    <h2>IT-CARATE </h2>
                    <h3>sign-up </h3>
                </div>
                <input placeholder={"Email"} onChange={enterEmail}
                       value={email}/>
                <input className={s.password} type={showPassword ? 'text' : 'password'}
                       onChange={enterPassword}
                       value={password}
                       placeholder={"Password"}
                />
                <span onClick={handleClickShowPassword}>{showPassword ? '💀' : '☠'}</span>

                <input className={s.password} type={showConfirmPassword ? 'text' : 'password'}
                       onChange={enterConfirmPassword}
                       value={confirmPassword}
                       placeholder={"Confirm Password"}/>
                <span onClick={handleClickShowConfirmPassword}>{showConfirmPassword ? '💀' : '☠'}</span>
                <div className={s.buttons}>
                    <button className={s.cancel} onClick={onClickCancel}>CANCEL</button>
                    <button className={s.register} onClick={onClickRegister}>REGISTER</button>
                </div>
            </div>
        </div>
    )
}

