/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black" }} className="fixed-top navbar-dark">
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
            </Nav>
            <Nav>
            <Nav.Link href="/menu" style={{ color: "white" }}>
                Menu
              </Nav.Link>
              <Nav.Link href="/hours" style={{ color: "white" }}>
                Hours
              </Nav.Link>
            <Nav.Link href="/aboutus" style={{ color: "white" }}>
                Order Now
              </Nav.Link>
              <Nav.Link href="/aboutus" style={{ color: "white" }}>
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
