import { useContext } from "react";
import { Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import logo from "../assets/bloglogo.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../helper/firebase";
import {AuthContext} from "../contexts/AuthContext";

const MyNav = () => {
  // useNavigate en ustte tanimlanmasi gereken bir hook
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const signOutFunc = async () => {
    await signOut(auth);
  };

  return (
    //logoya tiklayan olursa eger home sayfasinda degilse home gec
    <Navbar
      expand="lg"
      style={{ height: 90, marginBottom: 0, backgroundColor: "#FCF9F4" }}
      onSelect={(eventKey) =>
      eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
      }>
      <Nav.Link eventKey="home">
        <img src={logo} alt="Blog" style={{height: 90}} />
      </Nav.Link>
      <Nav className="ms-auto">
        { user ? (<Nav className="h5 p-4">
        <NavLink
        style={{fontWeight: "bold", color: "#977251" }}
        onClick={signOutFunc}>
          Sign Out
        </NavLink>
        <NavLink style={{fontWeight: "bold", color: "#977251" }}
        eventKey="newblog">
          New Blog
          </NavLink>
          </Nav>):
          (<NavDropdown
            className="h4"
            style={{ paddingRight: 55, fontWeight: "bold", color: "brown" }}
            title="Login"
            id="basic-nav-dropdown">
            <NavDropdown.Item className="h4" eventKey="login">
              Login
            </NavDropdown.Item>
            <NavDropdown.Item className="h4" eventKey="register">
              Sign Up
            </NavDropdown.Item>
          </NavDropdown>)}
      </Nav>
    </Navbar>
  );
};
export default MyNav;
