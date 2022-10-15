
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from 'react';
import logo from "../assets/Home/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";

class NavbarComp extends Component {
  render(){
    return (
        <div>
          <Navbar bg="dark" variant="dark" sticky="top" expand="lg" CollapseOnSelect>
              <Navbar.Brand href="/"><img src={logo} alt="logo1" width="50px"/>Code Talkers</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="navbar-nav justify-content-start col-3 col-md-4"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="/"> Home </Nav.Link>
                  <Nav.Link href="/openAI"> OpenAI </Nav.Link>
                  <Nav.Link href="/about"> About </Nav.Link>
                  <Nav.Link href=""> Login </Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
    );
}
}

export default NavbarComp;