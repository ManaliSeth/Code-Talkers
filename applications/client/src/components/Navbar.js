import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Home/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../App";
import React, { useContext } from "react";

const NavbarComp = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/feedback"> Feedback </Nav.Link>
          <Nav.Link href="/about"> About </Nav.Link>
          <Nav.Link href="/logout"> Logout </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/feedback"> Feedback </Nav.Link>
          <Nav.Link href="/about"> About </Nav.Link>
          <Nav.Link href="/login"> Login </Nav.Link>
          <Nav.Link href="/register"> Register </Nav.Link>
          <Nav.Link href="/logout"> Logout </Nav.Link>
        </>
      );
    }
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="logo1" width="50px" />
          Code Talkers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar-nav  col-md-10"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <RenderMenu />
            {/* <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/feedback"> Feedback </Nav.Link>
            <Nav.Link href="/about"> About </Nav.Link>
            <Nav.Link href="/login"> Login </Nav.Link>
            <Nav.Link href="/register"> Register </Nav.Link>
            <Nav.Link href="/logout"> Logout </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
