import { useEffect, useState } from "react";
import { Button, FormControl, Nav, Navbar, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import BlogCard from "./BlogCard";
import { useBlog } from "../contexts/BlogContext";
import Grid from "@mui/material/Grid";
import SearchList from "./SearchList";
// import AuthContext from "../contexts/AuthContext";

const SearchBar = ({ item }) => {
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const { currentBlogs } = useBlog();
  // const {currentUser}= useContext(AuthContext)


    const filteredList = currentBlogs?.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    console.log(filteredList);

    const handleChange= e =>{
      setSearchField(e.target.value);
      if(e.target.value===""){
        setSearchShow(false);
      }
      else {
        setSearchShow(true);
      }

    }

    function searchItem() {
      if (searchShow) {
        return <SearchList filteredList={filteredList} />;
      }
    }

    return (
      <>
        <Navbar
          expand="lg"
          style={{
            backgroundColor: "#FCF9F4",
            borderTop: "1px solid brown",
            borderBottom: "1px solid brown",
          }}
          onSelect={(eventKey) => {
            navigate(`/${eventKey}`);
          }}
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className="link"
              eventKey="about"
              style={{ marginLeft: 20 }}
            >
              About
            </Nav.Link>
            <Nav.Link className="link" eventKey="register">
              Join Us
            </Nav.Link>
            <Nav.Link className="link" eventKey="contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form
            className="d-flex"
            // onSubmit={handleSubmit}
          >
            <FormControl
              type="search"
              placeholder="Search a blog"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button
              style={{ marginRight: 20 }}
              variant="outline-secondary"
              // onSubmit={handleSubmit}
            >
              Search
            </Button>
          </Form>
        </Navbar>
        <div>{searchItem()}</div>
      </>
    );
  }

export default SearchBar;
