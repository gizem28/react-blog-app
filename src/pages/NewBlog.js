import {React, useContext, useState }from 'react'
import BlogForm from '../components/BlogForm'
import {AuthContext} from "../contexts/AuthContext"
import {addData} from "../helper/firebase"


const NewBlog = () => {
const {user}=useContext(AuthContext)
// const [title, setTitle]=useState("")
// const [imageUrl, setImageUrl]=useState("")
// const [content, setContent]=useState("")
const initialValues= {
title:"",
imageUrl:"",
content:""
}
const [info, setInfo]=useState(initialValues)

const handleFormSubmit=()=>{
  console.log(info);
}

  return (
      <BlogForm 
      // handleClick={handleClick}
      // setContent={setContent}
      // setImageUrl={setImageUrl}
      // setTitle={setTitle}
      // title={title}
      // imageUrl={imageUrl}
      // content={content}
      info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}
      />
  )
}

export default NewBlog
