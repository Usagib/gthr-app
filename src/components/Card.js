import React from 'react';

const Card = props => {
  const { card } = props;
  const { imageUrl } = card;
  return (
      <img src={ imageUrl }></img>
  );
};

export default Card;
