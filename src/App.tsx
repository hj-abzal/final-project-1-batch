import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {PageNotFound} from "./pages/PageNotFound/PageNotFound";
import React from "react";
import ForgotPassword from "./pages/ForgotPassword/FogotPassword";
import CheckEmail from "./pages/CheckEmail/CheckEmail";
import MainPacksList from "./pages/PacksList/MainPacksList";
import {AppRootStateType} from "./store/store";
import {useSelector} from "react-redux";

export type PackListType= {
    id: string
    title: string

}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/main-packs-list'} element={<MainPacksList/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/reset-password'} element={<ForgotPassword/>}/>
                <Route path={'/check-email'} element={<CheckEmail/>}/>
                <Route path={'*'} element={<PageNotFound/>}/>
                <Route path={'/'} element={<Navigate to={'/main-packs-list'}/>}/>
            </Routes>
        </div>
    )
}


export default App
