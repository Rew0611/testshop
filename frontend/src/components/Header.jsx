import React from 'react'
import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const Header = () => {
  return (
    <>
  <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
    <Container>
      <LinkContainer to="/">
    <Navbar.Brand >PLANIT</Navbar.Brand>
      </LinkContainer>
    <Nav className="me-auto">
      <LinkContainer to="/cart">
      <Nav.Link><i className="fas fa-shopping-cart"></i>&nbsp;cart</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/signin">
      <Nav.Link ><i className="fas fa-user"></i>&nbsp;Sign-In</Nav.Link>
      </LinkContainer>
    </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Header