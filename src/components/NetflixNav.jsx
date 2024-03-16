import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NetflixNav() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="mb-4">
      <div className="container">
        <Navbar.Brand href="#">
          <img
            src="https://www.caviarcriativo.com/storage/2020/06/Significados-da-Marca-Netflix-1.gif"
            alt="logo"
            style={{ width: "9rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse
          id="navbarSupportedContent"
          style={{ fontSize: "17px" }}
        >
          <Nav className="me-auto">
            <Nav.Link href="../App.js" className="active text-white zoom2 me-2">
              Home
            </Nav.Link>
            <NavDropdown
              title="TV Shows"
              id="basic-nav-dropdown "
              className="zoom2 me-2"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-white opacity-50 zoom2 me-2">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="text-white opacity-50 zoom2 me-2">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="text-white opacity-50 zoom2">
              My list
            </Nav.Link>
          </Nav>
          <form className="d-flex">
            <Nav.Link
              href="#"
              className="nav-link text-white mt-0 me-3 zoom2 me-4"
            >
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
            <Nav.Link
              href="#"
              className="nav-link text-white mt-0 me-3 zoom2 me-4"
            >
              Kids
            </Nav.Link>
            <Nav.Link
              href="#"
              className="nav-link text-white mt-0 me-3 zoom2 me-4"
            >
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
              className="zoom2"
              title={
                <img
                  src="https://www.thesun.co.uk/wp-content/uploads/2023/02/netflix-downloads-op.jpg?strip=all&quality=100&w=1080&h=1080&crop=1"
                  className="img-fluid img-small mt-0 me-1"
                  alt="kids"
                  style={{ width: "1.7rem" }}
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
