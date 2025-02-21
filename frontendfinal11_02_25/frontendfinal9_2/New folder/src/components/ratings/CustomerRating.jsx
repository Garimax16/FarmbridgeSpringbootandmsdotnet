import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const CustomerRating = ({ name, rating, comment, date }) => {
  return (
    <Card className="mb-3 h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <Card.Title className="mb-0">{name}</Card.Title>
            <small className="text-muted">{date}</small>
          </div>
          <div className="d-flex">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className="me-1"
                color={index < rating ? "#ffc107" : "#e4e5e9"}
                size={16}
              />
            ))}
          </div>
        </div>
        <Card.Text>{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomerRating;