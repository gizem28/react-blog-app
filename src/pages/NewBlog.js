import {React, useContext}from 'react'
import { useNavigate } from 'react-router'
import BlogForm from '../components/BlogForm'
import {AuthContext} from "../contexts/AuthContext"
import { useBlog } from '../contexts/BlogContext'
import img from "../assets/newblog.png"
import { successNote, toastErrorNotify } from '../helper/toastNotify'


const NewBlog = () => {
const {user}=useContext(AuthContext)
const {addBlog}=useBlog();
const navigate =useNavigate();


const blog= {
  author:user.email,
  likeCount:0,
  blogDate:Date.now(),
  title:"",
  image:"",
  content:""
}

const handler=(newBlog)=>{
  try{
    addBlog(newBlog);
    successNote("Blog added");
    navigate("/");
    console.log("author", blog.author);
    
  }catch(error){
    toastErrorNotify("Blog can not be added")
  }
}


  return (
    <div style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: " no-repeat",
      backgroundSize: "100% 170%",
      height: "74vh",
      marginTop: 0,
    }}>
    <h1 style={{padding:30}}>Add New Blog</h1>
      <BlogForm blog={blog} handler={handler} />
    </div>
  )
}

export default NewBlog
