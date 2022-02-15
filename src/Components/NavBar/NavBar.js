import React from "react";
import{Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import './NavBar.css';


function NavBar({ isAuth, login, logout } ){
    return(

<Navbar  bg="dark" expand="lg" >
  <Container>
    <Navbar.Brand style={{ marginRight:"200px", color:" goldenrod", fontSize:"18px", fontWeight:"bolder", fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}} href="#home">  OSCARS NOMINATIONS VOTING APP 2022 </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/"  className="Home"> Home </Link>
        <Link to="/MovieList" className="MovieL"> Movies </Link>
        <Link to="/Admin" className="Admin"> Admin </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>

  <button className="LogIn" onClick={isAuth ? logout : login} > {isAuth ? "LOGOUT" : "LOGIN"} </button>
</Navbar>

    )
}

export default NavBar;