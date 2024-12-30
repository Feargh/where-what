import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useContext } from "react";
import { CityContext } from "../CityContext";

function Header() {
  const { cities, setCities } = useContext(CityContext);

  useEffect(() => {
    fetch("http://localhost:5000/city")
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);

  let citiesSet = new Set([]);

  function uniqueCities(array, set) {
    array.forEach((element) => set.add(element.name));
  }

  uniqueCities(cities, citiesSet);

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
              {Array.from(citiesSet).map((cityName) => (
                <NavDropdown.Item key={cityName} href={`/city/${cityName}`}>
                  {cityName}
                </NavDropdown.Item>
              ))}
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
