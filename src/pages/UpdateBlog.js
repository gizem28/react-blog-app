import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useBlog } from "../contexts/BlogContext";
import BlogForm from "../components/BlogForm";
import { Container, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const UpdateBlog = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { updateBlog, currentBlogs } = useBlog();
  const { id } = useParams();
  const result = currentBlogs?.filter((card) => card.id === id);
  

  const res = useMemo(() => {
    return result ? result[0] : { title: "", content: "", image: "" };
  }, [result]);

  const [updatedBlog, setUpdatedBlog] = useState(res);

useEffect(() => {
    setUpdatedBlog(res);
  }, [res]);

  const handler=(blogToUpdate)=>{
      try{
           updateBlog(res?.id, blogToUpdate)
          navigate("/")
      }catch(err){
          alert(err.message)
      }
  }

  return (
    <>
        <Typography component="h1" variant="h5">
          Update Blog
        </Typography>
        <BlogForm blog={updatedBlog} handler={handler} />
    </>
  );
};

export default UpdateBlog;
