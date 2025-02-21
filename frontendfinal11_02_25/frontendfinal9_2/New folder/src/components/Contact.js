import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import CustomerRatings from '../components/ratings/CustomerRatings';
import Navibar from './Navibar';
import {Footer } from './Footer';
const ContactPage = () => {
  return (
    <div>
       <Navibar />
  
    <Container className="py-5">
      <Row>
        <Col xs={12} className="text-center mb-5">
          <h1>Contact Us</h1>
          <p className="text-muted">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <ContactInfo />
        </Col>
        <Col md={7}>
          <div className="bg-light p-4 rounded">
            <ContactForm />
          </div>
        </Col>
      </Row>
    </Container>
    <CustomerRatings />
    <Footer/>
    </div>
  );
};

export default ContactPage;