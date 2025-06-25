import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5">Request a Consultation</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form
              name="contact"
              method="POST"
              data-netlify="true"
              className="p-4 border rounded shadow-sm"
            >
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="you@example.com" required />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="How can we help?"
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Request Consultation
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
