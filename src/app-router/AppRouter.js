import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import MyNav from "../components/MyNavbar";
import Footer from "../components/Footer";
// import SearchBar from "../components/SearchBar";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     <PrivateRouter path="/detail/:id" element={<Details/>}  /> 
     <PrivateRouter path="/newblog" element={<NewBlog/>} /> 
     <PrivateRouter path="/updateblog/:id" element={<UpdateBlog/>} /> 
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
