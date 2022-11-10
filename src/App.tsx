import './App.css'
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {PageNotFound} from "./pages/PageNotFound/PageNotFound";
import React from "react";
import ForgotPassword from "./pages/ForogotPassword/FogotPassword";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<div>home</div>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/reset-password'} element={<ForgotPassword/>}/>
                <Route path={'*'} element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}


export default App
