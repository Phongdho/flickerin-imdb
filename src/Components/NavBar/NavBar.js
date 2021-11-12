import React from 'react'; 
import { useState } from 'react';
import "./NavBar.css";
import {
    Navbar,
    Container,
    Form,
    FormControl,
    Button,
    Nav,
} from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleInput = (el) => {
        el.preventDefault();
        setSearchInput(el.target.value);
    }
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <Navbar expand="lg" variant="dark" className={isScrolled? "scrolled" : "navbar"}>
            <Container fluid className="navContainer">
                <Navbar.Brand className="sign" style={{fontFamily:"Tourney"}}><span className="fast-flicker">F</span>lick<span className="flicker">er</span>in</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 navLink"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link className="navLink"><Link to={`/`} style={{textDecoration:"none", color:"#fff"}}>Home</Link></Nav.Link>
                    <Nav.Link className="navLink">TV shows</Nav.Link>
                    <Nav.Link className="navLink">Movies</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    style={{backgroundColor:"#141414", border:"none", color:"lightgray"}}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchInput}
                    onChange={handleInput}
                    />
                    <Link to={`/search/${searchInput}`}>
                    <Button variant="outline-dark" style={{color:"lightgray"}}>Search</Button>
                    </Link>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;