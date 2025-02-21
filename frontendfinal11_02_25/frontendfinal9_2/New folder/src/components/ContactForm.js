
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { messageService } from '../services/messageService';
import { Footer } from "../components/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await messageService.createMessage(formData);
      setShowSuccess(true);
      setError(null);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setShowSuccess(false);
    }
  };

  return (
    <div>
      <h3 className="mb-4">Send Message</h3>
      {showSuccess && (
        <Alert variant="success" className="mb-4">
          <Alert.Heading>Message Sent Successfully!</Alert.Heading>
          <p>
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
        </Alert>
      )}
      {error && (
        <Alert variant="danger" className="mb-4">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your message"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Send Message
        </Button>
      </Form>
      
    </div>
  );
};

export default ContactForm;