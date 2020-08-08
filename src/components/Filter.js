import React from 'react';
import PropTypes from 'prop-types';

const typesFilter = [
  'Types',
  'Instant',
  'Sorcery',
  'Artifact',
  'Creature',
  'Enchantment',
  'Land',
  'Planeswalker',
];

const colorsFilter = [
  'Colors',
  'White',
  'Red',
  'Blue',
  'Black',
  'Green',
];

const Filter = props => {
  const { onChange } = props;
  const handleChange = event => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <div>
      <select
        name="types"
        onChange={handleChange}
      >
        {typesFilter.map(types => (
          <option key={types}>
            {types}
          </option>
        ))}
      </select>
      <select
        name="colors"
        onChange={handleChange}
      >
        {colorsFilter.map(color => (
          <option key={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};


export default Filter;
