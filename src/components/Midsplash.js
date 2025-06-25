// src/components/MidSplash.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Midsplash.css';

function MidSplash() {
  return (
    <section className="mid-splash text-white text-center">
      <Container>
        <h2 className="display-6 fw-semibold">
          Trusted. Proven. Committed to safer skies.
        </h2>
      </Container>
    </section>
  );
}

export default MidSplash;
