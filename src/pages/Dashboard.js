import React from "react";
import BlogCard from "../components/BlogCard";
import Grid from "@mui/material/Grid";
import { useBlog } from "../contexts/BlogContext";
import { CircularProgress } from "@mui/material";

const Dashboard = () => {
  const { currentBlogs } = useBlog();

  return (
    <>
      <h1 style={{ margin: "30px" }}>Popular Blogs</h1>
      <br />
      <Grid container spacing={5} sx={{ marginBottom: 3 }}>
        {currentBlogs === undefined ? (
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", minHeight: "300px" }}
          >
            <CircularProgress style={{ color: "#977278" }} />
          </Grid>
        ) : currentBlogs ? (
          currentBlogs.map((item, id) => (
            <Grid key={id} item xs={3} md={4} marginBottom={2}>
              <BlogCard item={item} />
            </Grid>
          ))
        ) : (
          <h3>No blogs found.</h3>
        )}
      </Grid>
    </>
  );
};

export default Dashboard;
