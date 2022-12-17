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
                    <input className={s.search} type="text" placeholder={'Search..'}/>
                    <button className={s.addNewButton}>Add new pack</button>
                    <div>
                        <table className={s.table2}>
                            <tbody className={s.tbody}>
                                    <tr className={s.trSpec}>
                                        <th className={s.thSpec}>Name</th>
                                        <th className={s.thSpec}>Cards</th>
                                        <th className={s.thSpec}>Last Updated</th>
                                        <th className={s.thSpec}>Created by</th>
                                        <th className={s.thSpec}>Actions</th>
                                    </tr>
                                    <tr className={s.tr}>
                                        <th className={s.th}>Pack Name</th>
                                        <th className={s.th}>4</th>
                                        <th className={s.th}>18.03.2021</th>
                                        <th className={s.th}>Ivan Ivanov</th>
                                        <th className={s.th}><button>delete</button><button>edit</button><button>learn</button></th>
                                    </tr>
                                    <tr className={s.tr}>
                                        <th className={s.th}>Name Pack</th>
                                        <th className={s.th}>37</th>
                                        <th className={s.th}>19.03.2021</th>
                                        <th className={s.th}>Petr Petrov</th>
                                        <th className={s.th}><button>learn</button></th>
                                    </tr>
                                    <tr className={s.tr}>
                                        <th className={s.th}>Pack Name</th>
                                        <th className={s.th}>18</th>
                                        <th className={s.th}>19.03.2021</th>
                                        <th className={s.th}>Ivan Petrov</th>
                                        <th className={s.th}><button>learn</button></th>
                                    </tr>
                                    <tr className={s.tr}>
                                        <th className={s.th}>Name Pack</th>
                                        <th className={s.th}>0</th>
                                        <th className={s.th}>20.03.2021</th>
                                        <th className={s.th}>Petr Ivanov</th>
                                        <th className={s.th}><button>learn</button></th>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPacksList;