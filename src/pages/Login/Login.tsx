import s from './Login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {Navigate} from "react-router-dom";

export const Login = () => {
    const isLogged = useSelector<AppRootStateType,boolean>(state => state.app.isLogged);
    const dispatch = useDispatch<any>()


    return <div className={s.wrapper}>
        <div className={s.modal}></div>
    </div>
}