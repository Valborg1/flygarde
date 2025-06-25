import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Flygarde's guidance helped us pass our TSA audit with zero findings. They understood our challenges and delivered exactly what we needed.",
    name: 'Director of Security, Regional Airline',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: "Their regulatory knowledge is unmatched. We were able to restructure our safety program with confidence.",
    name: 'VP of Operations, Cargo Operator',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: "Responsive, thorough, and insightful. Flygarde quickly became an extension of our internal team.",
    name: 'Compliance Manager, Airport Services Group',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">What Our Clients Say</h2>

        {/* Mobile horizontal scroll */}
        <div className="testimonials-scroll d-md-none">
          {testimonials.map((item, idx) => (
            <div className="testimonial-card-wrapper" key={idx}>
              <Card className="h-100 shadow-sm border-0 text-center p-3">
                <Image
                  src={item.image}
                  roundedCircle
                  className="testimonial-img mb-3 mx-auto"
                  alt={item.name}
                  width={80}
                  height={80}
                />
                <Card.Body>
                  <Card.Text className="fst-italic small">"{item.quote}"</Card.Text>
                  <Card.Subtitle className="text-muted mt-3 small">– {item.name}</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <Row className="g-4 d-none d-md-flex justify-content-center">
          {testimonials.map((item, idx) => (
            <Col key={idx} md={4}>
              <Card className="h-100 shadow-sm border-0 text-center p-3">
                <Image
                  src={item.image}
                  roundedCircle
                  className="testimonial-img mb-3 mx-auto"
                  alt={item.name}
                  width={80}
                  height={80}
                />
                <Card.Body>
                  <Card.Text className="fst-italic small">"{item.quote}"</Card.Text>
                  <Card.Subtitle className="text-muted mt-3 small">– {item.name}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
