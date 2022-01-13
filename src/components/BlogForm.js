// import React, { useState } from "react";
import Button from "@mui/material/Button";
import img from "../assets/newblog.png";
import "../helper/firebase";


const BlogForm = ({setInfo, info, handleFormSubmit}) => {

  const handleInputChange =(e)=>{
    const {name, value}=e.target
    // addData(user, info);
    setInfo({...info,[name]:value})
    // setTitle("")
    // setContent("")
    // setImageUrl("")
  }
  
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: " no-repeat",
        backgroundSize: "100% 170%",
        height: "74vh",
        marginTop: 0,
      }}>
      <form>
        <h1 className="pt-3">Add New Blog</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-4 py-3 relative bg-white border-0 shadow"
            required
            style={{ height: 50, width: 500 }}
            value={info.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4">
          <input
            type="alt"
            placeholder="Image URL"
            name="imageUrl"
            className="px-4 py-3 relative border-0 shadow"
            required
            style={{ height: 50, width: 500 }}
            value={info.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4">
          <textarea
            placeholder="Content"
            name="content"
            className="px-4 py-3 relative border-0 shadow "
            required
            style={{ height: 150, width: 500 }}
            value={info.content}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5, bgcolor: "secondary.main" }}
            style={{ height: 50, width: 300 }}
            onClick={handleFormSubmit} 
            // onClick={handleClick}
            >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
