import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useBlog } from "../contexts/BlogContext";
import BlogForm from "../components/BlogForm";
import img from "../assets/newblog.png"
// import placeholderPng from "../assets/bloglogo.png";
import {successNote} from "../helper/toastNotify"

const UpdateBlog = ({ item }) => {
  const navigate = useNavigate();
  const { updateBlog, currentBlogs } = useBlog();
  const { id } = useParams();
  const result = currentBlogs?.filter((card) => card.id === id);

  

  const res = useMemo(() => {
    return result ? result[0] : { title: "", content: "", image: ""};
  }, [result]);

  const [updatedBlog, setUpdatedBlog] = useState(res);

//sayfa render edildiginde form verileri gitmemesi icin yazmaliyiz
useEffect(() => {
    setUpdatedBlog(res);
  }, [res]);

  const handler=(blogToUpdate)=>{
      try{
           updateBlog(res?.id, blogToUpdate)
           successNote("Blog updated")
          navigate("/")
      }catch(err){
          alert(err.message)
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
      {/* <img src={updatedBlog?.image || placeholderPng} alt="blog"
      style={{height:100}}/> */}
        <h1 style={{padding:30}}>
          Update Blog
        </h1>
        <BlogForm blog={updatedBlog} handler={handler} />
    </div>
  );
};

export default UpdateBlog;
