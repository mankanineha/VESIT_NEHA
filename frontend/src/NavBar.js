import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./App.module.css";

export default function NavBar() {
    const navLinkStyle = {
        marginRight: '30px', // Adjust the margin as needed
        color: 'Blue',
        textAlign : 'center'
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: 'beige' }}>
                <Container>
                    <Navbar.Brand style={{ fontFamily:'Times New Roman,sans-serif',fontSize: '2.5rem', fontWeight:'bold', textAlign: 'right' }}>
                        Restaurant - Reccomendation </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" style={navLinkStyle} >Home</Nav.Link>
                            <Nav.Link href="#about" style={navLinkStyle}>About</Nav.Link>
                            <Nav.Link href="#services" style={navLinkStyle}>Services</Nav.Link>
                            <Nav.Link href="#contact" style={navLinkStyle}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
        
    );
}
