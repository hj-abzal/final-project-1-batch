import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";
import FogotPassword from "./ForogotPassword/FogotPassword";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/auth" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/resetPassword" element={<FogotPassword/>}/>
                </Routes>
        </BrowserRouter>
    </Provider>
)
