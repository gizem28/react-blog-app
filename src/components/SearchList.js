import React from "react";
import BlogCard from "./BlogCard";
import { Grid } from "@mui/material";

const SearchList = ({ filteredList }) => {
  const filtered = filteredList.map((item) => (
    <BlogCard key={item.id} item={item} />
  ));
  return (
    <Grid container style={{justifyItems:"center", marginTop: 20 }}>
      {filtered}
    </Grid>
  );
};

export default SearchList;
