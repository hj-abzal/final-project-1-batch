import s from './Register.module.css'
import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {registerLoginTC, setErrorMessageAC} from "../../store/app-reducer";
import {useNavigate} from "react-router-dom";


export const Register = () => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const errorMessage = useSelector<AppRootStateType, string>(state => state.app.errorMessage);

    const dispatch = useDispatch<any>();
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }


    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        removeError();
        setEmail(e.currentTarget.value)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        removeError()
        setPassword(e.currentTarget.value)
    }

    const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        removeError()
        setConfirmPassword(e.currentTarget.value)
    }

    const onClickCancel = () => {
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const onClickRegister = () => {
        dispatch(registerLoginTC(email, password, navigate))
    }

    const removeError = () => {
        if (errorMessage) {
            dispatch(setErrorMessageAC(''))
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.modal}>
                <div className={s.title}>
                    <h2>IT-KARATE</h2>
                    <h3>sign-up</h3>
                </div>
                <input
                    placeholder={"Email"}
                    onChange={onChangeEmail}
                    value={email}
                />
                <input
                    className={s.password}
                    type={showPassword ? 'text' : 'password'}
                    onChange={onChangePassword}
                    value={password}
                    placeholder={"Password"}
                />
                <span onClick={handleClickShowPassword}>{showPassword ? '💀' : '☠'}</span>

                <input
                    className={s.password}
                    type={showConfirmPassword ? 'text' : 'password'}
                    onChange={onChangeConfirmPassword}
                    value={confirmPassword}
                    placeholder={"Confirm Password"}
                />
                <span onClick={handleClickShowConfirmPassword}>{showConfirmPassword ? '💀' : '☠'}</span>
                <div className={s.errorMessage}>
                    {errorMessage && <div>{errorMessage}</div>}
                </div>
                <div className={s.buttons}>
                    <button className={s.cancel} onClick={onClickCancel}>CANCEL</button>
                    {isLoading
                        ? <div>...loading </div>
                        : <button className={s.register} onClick={onClickRegister}>REGISTER</button>
                    }
                </div>
            </div>
        </div>
    )
}

