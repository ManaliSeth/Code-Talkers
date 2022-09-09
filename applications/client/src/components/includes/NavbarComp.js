import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// import About from "../about/About";
// import Home from "../home/Home";

function NavbarComp() {
  return (
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">NavBar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="navbar-nav justify-content-start col-3 col-md-4"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to={`/`}>Home</Link>
                <Link to={`/About`}>About</Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
}

export default NavbarComp;
