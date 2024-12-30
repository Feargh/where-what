import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row className='my-5'>
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col md={6}>
          <Image src='https://placecats.com/bella/300/200' rounded fluid />
        </Col>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            At Where what our mission is to help people discover the best places
            around the world. Whether you’re looking for a hidden gem or a
            popular attraction, we provide recommendations to make your journey
            memorable.
          </p>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <h2>Our Story</h2>
          <p>
            Our journey began in 2024 when a group of travel enthusiasts decided
            to create a platform that showcases the best cities and attractions.
            While we are a small project now we have ambition to grow and create
            a vibrant community.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Meet the Team</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Fearghal</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Founder & CEO
                  </Card.Subtitle>
                  <Card.Text>
                    Fearghal’s love for travel and exploration led him to start
                    this platform. With years of experience in the travel
                    industry, she brings a wealth of knowledge and passion to
                    the team.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col>
          <h2>Contact Us</h2>
          <p>
            We love hearing from you! If you have any questions, suggestions, or
            feedback, please feel free to reach out to us.
          </p>
          <p>Email: contact@wherewhat.example</p>
          <p>Phone: +44 20 0000 0000</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
