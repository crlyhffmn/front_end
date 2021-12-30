import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from "react-bootstrap";
import { faCommentDots, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarProfile = () => {

    return (
        <Navbar expand="lg" variant="light" className="border">
            <Container>
                <Navbar.Brand href="#home"> <img src={process.env.PUBLIC_URL + '/img/MiniMintLogo2.png'} width="40" height="40" alt="logo" /> MiniMint</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-center ms-auto">
                        <Nav.Link href="#"><FontAwesomeIcon icon={faBell} size="lg"/></Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faCommentDots} size="lg"/></Nav.Link>
                        <NavDropdown title={
                            <div className="profile-header">
                                <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} width="20" height="20" alt="profile" />
                                <p>Name</p>
                            </div>} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">Your Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarProfile;