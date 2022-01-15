import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useBlog } from "../contexts/BlogContext";
import BlogForm from "../components/BlogForm";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const UpdateBlog = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { updateBlog, currentBlogs } = useBlog();
  const { id } = useParams();
  const res = currentBlogs?.filter((card) => card.id === id);
  console.log(res)
  const [updatedBlog, setUpdatedBlog] = useState(item);

  return (
    <Container maxWidth="xs">
      {currentBlogs
        ?.filter((item) => item.id === id)
        .map((item, index) => (
          <form key={index}>
            <h1 className="pt-3">Update Blog</h1>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="px-4 py-3 relative bg-white border-0 shadow"
                required
                style={{ height: 50, width: 500 }}
                value={item.title}
                onChange={(e) =>
                  setUpdatedBlog({ ...updatedBlog, title: e.target.value })
                }
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
                value={item.imageUrl}
                onChange={(e) =>
                  setUpdatedBlog({ ...updatedBlog, imageUrl: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Content"
                name="content"
                className="px-4 py-3 relative border-0 shadow "
                required
                style={{ height: 150, width: 500 }}
                value={item.content}
                onChange={(e) =>
                  setUpdatedBlog({ ...updatedBlog, content: e.target.value })
                }
              />
            </div>
            <div>
              <Button
                type="button"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5, bgcolor: "secondary.main" }}
                style={{ height: 50, width: 300 }}
                //  onClick={() => handler(updatedBlog)}
              >
                Submit
              </Button>
            </div>
          </form>
        ))}
    </Container>
  );
};

export default UpdateBlog;
