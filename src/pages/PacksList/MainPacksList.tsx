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

    const columns = [
        {title: "Name", key: 'name', id :1,},
        {title: "Cards", key: 'cardsCount'},
        {title: "Name", key: 'name'},
        {title: "Cards", key: 'cardsCount'},
        {title: "Cards", key: 'cardsCount'},
    ]

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
                    <input className={s.search} type="text" placeholder={'Search..'}/>
                    <button className={s.addNewButton}>Add new pack</button>
                    <div>
                        <table className={s.table2}>
                            <tbody className={s.tbody}>
                            <thead>
                            <tr className={s.trSpec}>
                                {columns.map((c) => {
                                    return <th key={c.key} className={s.thSpec}>{c.title}</th>
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {packslist.cardPacks.map((pack) => {
                                return   <tr className={s.tr}>
                                    <th className={s.th}>{pack.name}</th>
                                    <th className={s.th}>{pack.cardsCount}</th>
                                    <th className={s.th}>{pack.user_name}</th>
                                    <th className={s.th}>Ivan Ivanov</th>
                                    <th className={s.th}>
                                        <button>delete</button>
                                        <button>edit</button>
                                        <button>learn</button>
                                    </th>
                                </tr>
                            })}
                            </tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPacksList;