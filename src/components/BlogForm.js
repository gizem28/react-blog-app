import React from 'react';
import { Button, FormControl, Nav, Navbar, Form} from 'react-bootstrap';

const BlogForm = () => {
// const handleSubmit=(e)=>{
//         e.preventDefault()
//         if(searchTerm && currentUser){
//             getMovies(SEARCH_API + searchTerm)
//         }else{
//             alert('Please log in to search a movie.')
//         }
//         setSearchTerm("")
//     }
    return(
        <Navbar expand="lg" style={{backgroundColor:"#FCF9F4", borderTop:"1px solid brown"}}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link className='link' style={{marginLeft:20}} href="#about">About</Nav.Link>
              <Nav.Link className='link' href="#register">Join Us</Nav.Link>
              <Nav.Link className='link' href="#contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search a blog"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{marginRight:20}} variant="outline-secondary">Search</Button>
            </Form>
      </Navbar>
    )
}

export default BlogForm
