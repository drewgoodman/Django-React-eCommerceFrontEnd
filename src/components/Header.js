import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <LinkContainer to="/cart">
                                <Nav.Link><FontAwesomeIcon icon="shopping-cart" />Cart</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/login">
                                <Nav.Link><FontAwesomeIcon icon="user" />Login</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
