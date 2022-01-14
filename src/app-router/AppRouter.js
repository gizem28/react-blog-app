import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Contact from "../pages/Contact"
import MyNav from '../components/MyNavbar'
import Footer from "../components/Footer"
import SearchBar from '../components/SearchBar'
import NewBlog from '../pages/NewBlog'
import UpdateBlog from '../pages/UpdateBlog'

const AppRouter = () => {
    return (
        <BrowserRouter>
        <MyNav/>
        <SearchBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/register" element={<Register/>}/>
            <Route  path="/newblog" element={<NewBlog/>}/>
            <Route  path="/updateblog" element={<UpdateBlog/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter