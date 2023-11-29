/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {

    
  return (
    <div>
<Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black" }}>
  <Container>
    <Navbar.Brand href="/" style={{ color: "white" }}>
      <img
        src="https://res.cloudinary.com/delscyuhi/image/upload/v1697939680/xna0rag5wqhfhbkzwryh.png"
        className="h-9 sm:h-9 d-inline-block align-top"
        alt="Logo"
        width="35"
        height="35"
      />
      Bro's Hot Chicken
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/menu" style={{ color: "white" }}>
          Menu
        </Nav.Link>
        <Nav.Link href="/hours" style={{ color: "white" }}>
          Hours
        </Nav.Link>
        <NavDropdown
          title="Dropdown"
          id="collapsible-nav-dropdown"
          style={{ color: "white" }}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="/aboutus" style={{ color: "white" }}>
          About Us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  )
}

export default NavbarComponent