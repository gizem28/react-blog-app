import "../App.css";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Dashboard from "../pages/Dashboard";
import SearchList from "../components/SearchList";
import Grid from "@mui/material/Grid";
import { useBlog } from "../contexts/BlogContext";

function Home() {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const { currentBlogs } = useBlog();

  const filteredList = currentBlogs?.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };


  return (
    <>
      <SearchBar handleChange={handleChange} />
      {searchShow ? (
        <Grid container spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight:"75vh"}}>
          <Grid item xs={12}>
          <SearchList filteredList={filteredList} />
          </Grid>
        </Grid>
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default Home;
