import {FormControl, Nav, Navbar, Form } from "react-bootstrap";
import { useNavigate } from "react-router";


const SearchBar = ({handleChange }) => {
  const navigate = useNavigate();

        return (
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" 
           className="m-2"
          />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
            </Navbar.Collapse>
          <Form
            className="d-flex"
            // onSubmit={handleSubmit}
          >
            <FormControl
              type="search"
              placeholder="Search a blog"
              className="me-3"
              aria-label="Search"
              style={{width:300}}
              onChange={handleChange}
            />
            {/* <Button
              style={{ marginRight: 20 }}
              variant="outline-secondary"
              onClick={handleChange}
            >
              Search
            </Button> */}
          </Form>
        </Navbar>
    );
}

export default SearchBar;
