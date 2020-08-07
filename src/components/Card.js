import React from 'react';

const Card = props => {
  const { card } = props;
  const { imageUrl } = card;
  return (
      <img style={{width: '200px',}} src={ imageUrl }></img>
  );
};

export default Card;
