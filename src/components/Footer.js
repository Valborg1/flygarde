// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-white py-4">
      <Container className="text-center">
        <div className="mb-3">
          <a href="#home" className="text-white me-3">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#home" className="text-white me-3">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#home" className="text-white me-3">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
        </div>
        <small>&copy; Flygarde 2026. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;
