import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NetflixNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">
          <img src="/public/img/netflix_logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" className="active text-white opacity-50">
              Home
            </Nav.Link>
            <NavDropdown title="TV Shows" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-white opacity-50">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="text-white opacity-50">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="text-white opacity-50">
              My list
            </Nav.Link>
          </Nav>
          <form className="d-flex">
            <Nav.Link href="#" className="nav-link text-white mt-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#" className="nav-link text-white mt-0 me-3">
              Kids
            </Nav.Link>
            <Nav.Link href="#" className="nav-link text-white mt-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-444-4.005-4.901" />
              </svg>
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  src="/public/img/kids_icon.png"
                  className="img-fluid img-small mt-0 me-1"
                  alt="kids"
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NetflixNav;
