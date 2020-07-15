import React from 'react'

// import SignedOutLinks from './SignedOutLinks'
import { Nav, Navbar } from 'react-bootstrap'


const AppNavbar = () => {
  //const { auth, profile } = props
  //console.log ("Auth:", auth);

  // const links = <SignedOutLinks />;

  return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="basket">Basket</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>

  )
}


export default AppNavbar
