import React from 'react';
import { Carousel } from 'react-bootstrap';

const Card = props => {
  const { card } = props;
  const { imageUrl, name } = card;
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={imageUrl}
        alt={name}
      />
      <div className="container mt-3">
        <h1 className="text-white">Details</h1>
      </div>
    </Carousel.Item>
  );
};

export default Card;
