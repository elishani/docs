import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class DocsNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/">Documents Cluster</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/docs">Docs</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#/signup">Signup</Nav.Link>
                    <Nav.Link href="#/login">Login</Nav.Link>
                    <Nav.Link href="#/">Logout</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default DocsNavbar;