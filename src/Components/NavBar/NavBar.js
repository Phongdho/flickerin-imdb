import React from 'react'; 
import "./NavBar.css";
import {
    Navbar,
    Container,
    Form,
    FormControl,
    Button,
    Nav,
} from 'react-bootstrap';
// import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="transparent" expand="lg" variant="dark" className="nav-bar">
            <Container fluid className="navContainer">
                <Navbar.Brand className="sign" style={{fontFamily:"Tourney"}}><span className="fast-flicker">F</span>lick<span className="flicker">er</span>in</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 navLink"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link className="navLink">Home</Nav.Link>
                    <Nav.Link className="navLink">TV shows</Nav.Link>
                    <Nav.Link className="navLink">Movies</Nav.Link>
                    <Nav.Link className="navLink">Science</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success" >Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;