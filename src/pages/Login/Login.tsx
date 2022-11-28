import s from './Login.module.css';
import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {NavLink, useNavigate} from "react-router-dom";
import {LoginTC, setErrorMessageAC} from "../../store/app-reducer";

export const Login = () => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const errorMessage = useSelector<AppRootStateType, string>(state => state.app.errorMessage);

    const dispatch = useDispatch<any>();
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        removeError();
        setEmail(e.currentTarget.value)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        removeError()
        setPassword(e.currentTarget.value)
    }

    const onClickLogin = () => {
        dispatch(LoginTC(email, password, navigate))
    }

    const removeError = () => {
        if (errorMessage) {
            dispatch(setErrorMessageAC(''))
        }
    }

    const iconPath = `src/accets/icon/${showPassword ? 'eye' : 'eye-off'}.svg`

   return <div className={s.wrapper}>
        <div className={s.modal}>
            <div className={s.title}>
                <h2>IT-KARATE</h2>
                <h3>sign-in</h3>
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
            <img src={iconPath} alt='eye' onClick={handleClickShowPassword} />

            <div className={s.errorMessage}>
                {errorMessage && <div>{errorMessage}</div>}
            </div>
            <div className={s.buttonBox}>
                {isLoading
                    ? <div>...loading </div>
                    : <button className={s.button} onClick={onClickLogin}>LOGIN</button>
                }
            </div>

            <div className={`${s.try} ${s.active}`}>
                <NavLink to="/reset-password" className={navData => navData.isActive ? s.active : s.item}>
                    Reset password
                </NavLink>
            </div>
            <div className={`${s.try} ${s.active}`}>
                    <NavLink to="/register" className={navData => navData.isActive ? s.active : s.try}>Sign-up</NavLink>
                </div>
        </div>
    </div>
}