import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5">Request a Consultation</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {submitted ? (
              <Alert variant="success" className="text-center">
                ✅ Thanks! Your message has been received.
              </Alert>
            ) : (
              <Form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={() => setSubmitted(true)}
                className="p-4 border rounded shadow-sm"
              >
                <input type="hidden" name="form-name" value="contact" />

                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} name="message" required />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Request Consultation
                  </Button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
