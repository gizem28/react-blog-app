import React from 'react';
import {Navbar, Container, NavDropdown} from "react-bootstrap";
import icon from "../assets/user.png";

const Nav = () => {
    return (
<Navbar className='bg-light'>
 <Container>
    <Navbar.Brand href="#home">Fire-Blog</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
     <a href=" "><img src={icon} href="#" alt="Login" style={{width:"20px"}}/></a>
      <NavDropdown title="Login"> 
          <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Register</NavDropdown.Item>
        </NavDropdown>
    </Navbar.Collapse>
    </Container>
</Navbar>
    )
}

export default Nav;
