import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CustomCard = ({ title, buttonText, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Card style={{ width: '18rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={handleClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
