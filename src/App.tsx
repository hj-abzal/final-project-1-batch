import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {PageNotFound} from "./pages/PageNotFound/PageNotFound";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import React from "react";
import Loader from './Loader/Loader';
import ForgotPassword from "./ForogotPassword/FogotPassword";



function App() {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const isLogged = useSelector<AppRootStateType, boolean>(state => state.app.isLogged);

    if (isLoading) {
        return ( <Loader/>)
    }
    if(!isLogged) {
        return <Navigate to={'/login'}/>
    }

        return (
            <div className="App">

                <Routes>
                    <Route path={'/'} element={<Navigate to={'login'}/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/resetPassword'} element={<ForgotPassword/>}/>
                    <Route path={'*'} element={<PageNotFound/>}/>
                </Routes>
            </div>
        )
    }
    export default App;
