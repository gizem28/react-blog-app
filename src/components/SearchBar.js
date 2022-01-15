// import { useState} from 'react';
import { Button, FormControl, Nav, Navbar, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router';
// import AuthContext from "../contexts/AuthContext";


const SearchBar = () => {
  const navigate =useNavigate();
  // const [searchTerm, setSearchTerm]=useState("")
  // const {currentUser}= useContext(AuthContext)

// const handleSubmit=(e)=>{
//         e.preventDefault()
//         if(searchTerm && currentUser){
            
//         }else{
//             alert('Please log in to search a movie.')
//         }
//         setSearchTerm("")
//     }
  // const searchList =({filteredCards})=>{
  //   const filtered=filteredCards.map(card=>
  //     <Card key={blog.index} title={title}/> )
  // }


    return(
        <Navbar expand="lg" 
        style={{backgroundColor:"#FCF9F4", borderTop:"1px solid brown",borderBottom:"1px solid brown"}}
        onSelect={(eventKey)=>{
        navigate(`/${eventKey}`)
        }}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link className='link' eventKey="about" style={{marginLeft:20}}>About</Nav.Link>
              <Nav.Link className='link' eventKey="register">Join Us</Nav.Link>
              <Nav.Link className='link' eventKey="contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex" 
            // onSubmit={handleSubmit}
            >
              <FormControl
                type="search"
                placeholder="Search a blog"
                className="me-2"
                aria-label="Search"
                // value={searchTerm}
                // onChange={(e)=>setSearchTerm(e.target.value)}
              />
              <Button style={{marginRight:20}} variant="outline-secondary"
              >Search</Button>
            </Form>
      </Navbar>
    )
}

export default SearchBar
