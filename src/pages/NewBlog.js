import {React, useContext}from 'react'
import { useNavigate } from 'react-router'
import BlogForm from '../components/BlogForm'
import {AuthContext} from "../contexts/AuthContext"
import { useBlog } from '../contexts/BlogContext'
import img from "../assets/newblog.png"


const NewBlog = () => {
const {user}=useContext(AuthContext)
const {addBlog}=useBlog();
const navigate =useNavigate();

const handler=(newBlog)=>{
  try{
    addBlog(newBlog);
    navigate("/");
  }catch(error){
    alert(error.message)
  }
}

const blog= {
  author:user.email,
  likeCount:0,
  blogDate:Date.now(),
  title:"",
  image:"",
  content:""
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
