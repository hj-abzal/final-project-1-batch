import React, {ChangeEvent, useState} from 'react';
import s from "./ForotPassword.module.css";
import {NavLink} from "react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const enterEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const sendInstruction = () => {
//logic for sendInstruction
    }

    return (
        <div className={s.wrapper}>
            <div className={s.modal}>
                <h2>it-incubator </h2>
                <h3>Forgot your password? </h3>

                <input className={s.forgotEmail} placeholder={"Email"} onChange={enterEmail}
                       value={email}/>
                <p className={s.p}>Enter your email address and we will send you further instructions </p>
                <button className={s.button} onClick={sendInstruction}>Send Instructions</button>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/login" className={navData => navData.isActive ? s.active : s.item}>Did you remember
                        your password?</NavLink>
                </div>
                <div className={`${s.try} ${s.active}`}>
                    <NavLink to="/login" className={navData => navData.isActive ? s.active : s.try}>Try logging
                        in</NavLink>
                </div>
            </div>
        </div>
    )
};

export default ForgotPassword;