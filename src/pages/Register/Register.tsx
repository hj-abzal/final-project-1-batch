import s from './Register.module.css'
import {useState} from "react";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onClickRegistr = () => {
        alert(email)
        alert(password)
        alert(confirmPassword)
    }

    return <div className={s.wrapper}>
        <div className={s.modal}>
            <h2>IT-CARATE</h2>
            <h3>sign-up </h3>
            <input placeholder={"EMAIL"} onChange={(e) => setEmail(e.currentTarget.value)} value={email}/>
            <p></p>
            <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} value={password}
                   placeholder={"Password"}/>
            <input type="password" onChange={(e) => setConfirmPassword(e.currentTarget.value)} value={confirmPassword}
                   placeholder={"Confirm Password"}/>
            <button >CANCEL</button>
            <button onClick={onClickRegistr}>REGISTER</button>

        </div>
    </div>
}
