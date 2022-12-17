import React, {useEffect} from 'react';
import s from './MainPackList.module.css'
import {SwitchSelect} from "../../components/Switcher/SwitchSelect";
import Slider from "../../components/Slider/Slider";
import {useDispatch, useSelector} from "react-redux";
import {getPackListTC, PackListResponseType} from "../../store/pack-list-reducer";
import {AppRootStateType} from "../../store/store";


const MainPacksList = () => {
    const dispatch = useDispatch<any>()
    const packslist = useSelector<AppRootStateType, PackListResponseType>(state => state.packs.packsList)
    useEffect(() => {
            dispatch(getPackListTC())
        },
        []
    )
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h3 className={s.name}>It-incubator</h3>
                <div className={s.signs1}>
                    <img className={s.image} src="images/Group 608.png" alt=""/>
                    <h4>Packs list</h4>
                </div>
                <div className={s.signs2}>
                    <img className={s.image} src="images/Union (Stroke).png" alt=""/>
                    <h5>Profile</h5>
                </div>
            </div>
            <div className={s.modal}>
                <nav className={s.nav}>
                    <p className={s.NavElements}>Show packs cards</p>
                    <SwitchSelect/>
                    <p className={s.NavElements}>Number of cards</p>
                    <Slider/>
                </nav>
                <div className={s.table}>
                    <p className={s.nameOfTable}>Packs list</p>
                    <input className={s.search} type="text"/>
                    <button className={s.addNewButton}>Add new pack</button>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPacksList;