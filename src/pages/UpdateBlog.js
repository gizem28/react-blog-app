import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useBlog } from "../contexts/BlogContext";
import BlogForm from "../components/BlogForm";
import img from "../assets/newblog.png"

const UpdateBlog = ({ item }) => {
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
    <div style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: " no-repeat",
      backgroundSize: "100% 170%",
      height: "74vh",
      marginTop: 0,
    }}>
        <h1 style={{padding:30}}>
          Update Blog
        </h1>
        <BlogForm blog={updatedBlog} handler={handler} />
    </div>
  );
};

export default UpdateBlog;
