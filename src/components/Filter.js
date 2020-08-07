import React from 'react';
import PropTypes from 'prop-types';

const typesFilter = [
  'Instant',
  'Sorcery',
  'Artifact',
  'Creature',
  'Enchantment',
  'Land',
  'Planeswalker',
];

const Filter = props => {
  const { onChange } = props;
  const handleChange = event => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <select
      name="types"
      onChange={handleChange}
    >
      <option>Types</option>
      {typesFilter.map(types => (
        <option key={types}>
          {types}
        </option>
      ))}
    </select>
  );
};


export default Filter;
