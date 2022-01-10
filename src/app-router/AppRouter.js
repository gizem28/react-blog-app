import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Contact from "../pages/Contact"

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route  path="/login" element={<Login/>} />
            <Route  path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
