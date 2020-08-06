import React from 'react';

const Card = props => {
  const { card } = props;
  const { name } = card;

  return (
    <div className="lesson-panel">
      <p>{name}</p>
    </div>
  );
};

export default Card;
