import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand='lg' className='bg-body-secondary mb-5'>
      <Container>
        <Navbar.Brand href='/'>Where What</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='about'>About Us</Nav.Link>
            <NavDropdown title='Cities' id='basic-nav-dropdown'>
              <NavDropdown.Item href='dublin'>Dublin</NavDropdown.Item>
              <NavDropdown.Item href='london'>London</NavDropdown.Item>
              <NavDropdown.Item href='lisbon'>Lisbon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='suggestacity'>
                Suggest a city
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
