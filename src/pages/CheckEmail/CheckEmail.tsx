import React from 'react';
import s from "./CheckEmail.module.css";
import {NavLink} from "react-router-dom";

const CheckEmail = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.modal}>
                <h3 className={s.title}>It-incubator</h3>
                <NavLink to="/"><img className={s.letter} src="images/Group 281.png"/>
                </NavLink>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/" className={navData => navData.isActive ? s.active : s.item}>Check Email</NavLink>
                </div>
                <p className={s.p}>We’ve sent an Email with instructions to example@mail.com </p>
            </div>
        </div>
    );
};

export default CheckEmail;