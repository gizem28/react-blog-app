import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../assets/bloglogo.png";
import { useNavigate } from 'react-router-dom';


const MyNav = () => {
  // useNavigate en ustte tanimlanmasi gereken bir hook
  const navigate = useNavigate();
    return (
        //logoya tiklayan olursa eger home sayfasinda degilse home gec
        <Navbar
          expand="lg"
          style={{height:90, marginBottom:0, backgroundColor:"#FCF9F4"}}
            onSelect={(eventKey) =>
             eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)}
           >
              <Nav.Link eventKey="home">
                <img src={logo} alt="Blog"  style={{height:90}}/>
              </Nav.Link>
              <Nav className="ms-auto" >
                <NavDropdown className='h4'  style={{paddingRight:55, fontWeight:"bold", color:"brown"}} title="LOG IN" id="basic-nav-dropdown">
                  <NavDropdown.Item className='h4' eventKey="login">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item className='h4' eventKey="register">
                    Register
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
        </Navbar>
    );
  };
  export default MyNav;
