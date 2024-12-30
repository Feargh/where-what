import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function SuggestACity() {
  const [formData, setFormData] = useState({
    cityName: "",
    country: "",
    description: "",
    latitude: "",
    longitude: "",
    whySpecial: "",
    yourName: "",
    yourEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to the backend
    console.log("Form data submitted:", formData);
  };

  return (
    <Container>
      <Row className='my-5'>
        <Col>
          <h1>Suggest a City</h1>
          <p>
            We’re always looking to expand our recommendations and explore new
            cities. If you know a city that we should add to our list, please
            suggest it below.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formCityName'>
              <Form.Label>City Name</Form.Label>
              <Form.Control
                type='text'
                name='cityName'
                value={formData.cityName}
                onChange={handleChange}
                placeholder='Enter city name'
                required
              />
            </Form.Group>

            <Form.Group controlId='formCountry'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                name='country'
                value={formData.country}
                onChange={handleChange}
                placeholder='Enter country'
                required
              />
            </Form.Group>

            <Form.Group controlId='formDescription'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='description'
                value={formData.description}
                onChange={handleChange}
                placeholder='Provide a brief description of the city'
                required
              />
            </Form.Group>

            <Form.Group controlId='formLatitude'>
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                type='number'
                name='latitude'
                value={formData.latitude}
                onChange={handleChange}
                placeholder='Enter latitude'
                required
              />
            </Form.Group>

            <Form.Group controlId='formLongitude'>
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type='number'
                name='longitude'
                value={formData.longitude}
                onChange={handleChange}
                placeholder='Enter longitude'
                required
              />
            </Form.Group>

            <Form.Group controlId='formWhySpecial'>
              <Form.Label>Why is this city special?</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='whySpecial'
                value={formData.whySpecial}
                onChange={handleChange}
                placeholder='Tell us why this city is special'
              />
            </Form.Group>

            <Form.Group controlId='formYourName'>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type='text'
                name='yourName'
                value={formData.yourName}
                onChange={handleChange}
                placeholder='Enter your name'
              />
            </Form.Group>

            <Form.Group controlId='formYourEmail'>
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type='email'
                name='yourEmail'
                value={formData.yourEmail}
                onChange={handleChange}
                placeholder='Enter your email'
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SuggestACity;
