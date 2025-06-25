import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css'; 

function Hero() {
  return (
    <section id="home" className="hero-section text-white d-flex align-items-center">
      <Container className="text-center">
        <h1 className="display-4 fw-bold">Expert Aviation Consulting</h1>
        <p className="lead mb-4">
          Helping airports, operators, and aviation companies navigate compliance, safety, and strategy.
        </p>
        <Button as="a" href="#contact" variant="light" size="lg">
          Schedule a Consultation
        </Button>
      </Container>
    </section>
  );
}

export default Hero;
