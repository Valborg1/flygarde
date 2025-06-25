import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import takeoffImg from '../assets/images/takeoff.jpg';
import './About.css';


function About() {
  return (
    <section id='about' className="py-5 bg-white pb-0">
      <Container>
        <Row className="align-items-center g-5">
        <Col md={6} className="text-center text-md-start">
  <h2 className="mb-4">About Flygarde</h2>
  <p className="lead">
    Backed by 28 years of airline industry experience, Flygarde delivers expert aviation consulting with a focus on operations and regulatory compliance.
  </p>
  <p>
    We partner with airports, carriers, and aviation businesses to help them navigate complex regulations, improve operational performance, and stay mission-ready in a rapidly evolving industry.
  </p>
</Col>

          <Col md={6}>
            <img
              src={takeoffImg}
              alt="About Flygarde"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#f8f9fa" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default About;
