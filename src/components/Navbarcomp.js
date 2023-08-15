import React from "react"
import {Navbar,NavDropdown,Nav,Container,Form} from 'react-bootstrap';
function Navbarcomp(){
  return (
    <Navbar style={{background:"red"}} expand="lg">
    <Container fluid>
      <Navbar.Brand href="/"><b>Moto Emporium</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/buycar">Buy Car</Nav.Link>
          <Nav.Link href="/sell">Sell Car</Nav.Link>
          <NavDropdown title="More" id="navbarScrollingDropdown">
            {/*<NavDropdown.Item href="#action4">Resale Value</NavDropdown.Item>*/}
            <NavDropdown.Item href="/explore">
              Explore More About Cars
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {/*<NavDropdown.Item href="#action6">
              Contact Us
  </NavDropdown.Item>*/}
            <NavDropdown.Item href="/carservicing">
              CAR SERVICING
            </NavDropdown.Item>
            <NavDropdown.Item href="/adminlogin">
                Admin Login
              </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
        {/*  <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>*/}
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
    
  }

export default Navbarcomp;