import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { Footer } from '../components/Footer';


const ContactPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
     
      
      {/* Contact Page Content */}
      <div className="contact-page">
    
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h1 className="text-center mb-4">Contact Us</h1>
              <p className="text-center mb-5">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="contact-container">
                <div className="contact-info">
                  <ContactInfo />
                </div>
                <div className="contact-form">
                  <ContactForm />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};




export default ContactPage;
