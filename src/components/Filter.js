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
    <div className="bg-strain text-center" id="filterFront">
      <div className="container">
        <div className="row mt-0">
          <div className="col-md-10 mx-auto mb-5">
            <form>
                <div class="row">
                  <div class="col-md-4">
                    <label for="selectTypes">Filter</label>
                    <select name="types" onChange={handleChange} class="form-control" id="selectTypes">
                      {typesFilter.map(types => (
                        <option key={types}>
                          {types}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="col-md-4">
                    <select name="colors" onChange={handleChange} class="form-control" id="selectColors">
                      {colorsFilter.map(colors => (
                        <option key={colors}>
                          {colors}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Filter;
