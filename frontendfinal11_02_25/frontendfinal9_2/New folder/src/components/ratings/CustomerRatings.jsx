import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomerRating from './CustomerRating';

const CustomerRatings = () => {
  const ratings = [
    {
      name: "Rahul Bharaskar",
      rating: 5,
      comment: "Exceptional service! They resolved my issue within hours. Highly recommended!",
      date: "Descember 1, 2024"
    },
    {
      name: "Rohit Owal",
      rating: 4,
      comment: "Very professional and helpful support team. Quick response time.",
      date: "February 28, 2024"
    },
    {
      name: "Sumit Deshmukh",
      rating: 5,
      comment: "Outstanding customer service. They went above and beyond to help me.",
      date: "February 25, 2024"
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row>
        {ratings.map((rating, index) => (
          <Col key={index} md={4}>
            <CustomerRating {...rating} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerRatings;