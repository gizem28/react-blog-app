import {React, useContext, useState }from 'react'
import { useNavigate } from 'react-router'
import BlogForm from '../components/BlogForm'
import {AuthContext} from "../contexts/AuthContext"
import { useBlog } from '../contexts/BlogContext'


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
    <>
    <h1>Add New Blog</h1>
      <BlogForm blog={blog} handler={handler} />
    </>
  )
}

export default NewBlog
