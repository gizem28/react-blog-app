// import React, { useState } from "react";
import Button from "@mui/material/Button";
import img from "../assets/newblog.png";
import {useState} from "react";


const NewBlog = () => {
  const [title , setTitle] = useState();
  const [image , setImage] = useState();
  const [content, setContent]= useState();

  const formSubmit=()=>{
    console.log(title, image, content);
  }
      
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: " no-repeat",
        backgroundSize: "100% 170%",
        height: "74vh",
        marginTop: 0,
      }}
    >
      <form >
        <h1 className="pt-3">Add New Blog</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-4 py-3 relative bg-white border-0 shadow"
            required
            style={{ height: 50, width: 500 }}
            // value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <input
            type="alt"
            placeholder="Image URL"
            name="image"
            className="px-4 py-3 relative border-0 shadow"
            required
            style={{ height: 50, width: 500 }}
            // value={image}
            onChange={(e)=>setImage(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <textarea
            placeholder="Content"
            name="content"
            className="px-4 py-3 relative border-0 shadow "
            required
            style={{ height: 150, width: 500 }}
            // value={content}
            onChange={(e)=>setContent(e.target.value)}
          />
        </div>
        <div>
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5, bgcolor: "secondary.main" }}
            style={{ height: 50, width: 300 }}
            onClick={formSubmit} 
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
