import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {PageNotFound} from "./pages/PageNotFound/PageNotFound";
function App() {

  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<Navigate to={'login'}/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'*'} element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}


export default App
