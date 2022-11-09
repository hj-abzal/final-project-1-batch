import React, {ChangeEvent} from 'react';
import s from "./ForotPassword.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {SetEmailAC} from "../store/auth-reduser";
import {Login} from "../pages/Login/Login";
import {NavLink} from "react-router-dom";

const ForgotPassword = () => {
    const email = useSelector<AppRootStateType, string>(state => state.auth.email) // from redux
    const dispatch = useDispatch<any>();


    const enterEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetEmailAC(e.currentTarget.value))
    }
const SendInstruction=(email:string)=>{

}
    return (
        <div className={s.wrapper}>
            <div className={s.modal}>
                <h2>it-incubator </h2>
                <h3>Forgot your password? </h3>

                <input placeholder={"Email"} onChange={enterEmail}
                       value={email}/>
                <p className={s.p}>Enter your email address and we will send you further instructions </p>
                <button className={s.button} onClick={}>Send Instructions</button>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/Login" className={navData => navData.isActive ? s.active : s.item}>Did you remember
                        your password?</NavLink>
                    </div>
                <div className={`${s.try} ${s.active}`}>
                    <NavLink to="/Login" className={navData => navData.isActive ? s.active : s.try}>Try logging
                        in</NavLink>
                </div>
            </div>
        </div>
    )
};

export default ForgotPassword;