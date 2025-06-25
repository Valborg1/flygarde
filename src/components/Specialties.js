import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const specialties = [
  {
    title: 'Regulatory Compliance',
    text: 'Navigate FAA, TSA, and international regulations with expert guidance.',
    icon: 'fa-shield-alt',
  },
  {
    title: 'Operational Efficiency',
    text: 'Streamline systems and processes to improve reliability and reduce costs.',
    icon: 'fa-cogs',
  },
  {
    title: 'Safety Management Systems',
    text: 'Develop and maintain a proactive, compliant SMS tailored to your operation.',
    icon: 'fa-exclamation-triangle',
  },
  {
    title: 'Audit & Risk Assessment',
    text: 'Conduct internal audits, identify risks, and close operational gaps.',
    icon: 'fa-search',
  },
  {
    title: 'Training & Documentation',
    text: 'Custom training programs and complete documentation solutions.',
    icon: 'fa-chalkboard-teacher',
  },
  {
    title: 'Strategic Planning',
    text: 'Align your aviation strategy with operational realities and future growth.',
    icon: 'fa-map-signs',
  },
];

function Specialties() {
  return (
    <section id="specialties" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Specialties</h2>

        {/* Mobile: show only first 3 */}
        <Row className="g-4 d-flex d-md-none">
          {specialties.slice(0, 3).map((item, idx) => (
            <Col key={idx} xs={12}>
              <Card className="h-100 shadow-sm border-0 text-center p-3">
                <div className="mb-3">
                  <i className={`fas ${item.icon} fa-2x text-primary`}></i>
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="small">{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Desktop: show all 6 */}
        <Row className="g-4 d-none d-md-flex">
          {specialties.map((item, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 text-center p-3">
                <div className="mb-3">
                  <i className={`fas ${item.icon} fa-2x text-primary`}></i>
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="small">{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Specialties;
