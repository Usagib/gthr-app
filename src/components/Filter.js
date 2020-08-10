import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Filter(props) {
  const [
    typesFilter,
  ] = useState({
    typesFilter: [
      'Type',
      'Instant',
      'Sorcery',
      'Artifact',
      'Creature',
      'Enchantment',
      'Land',
      'Planeswalker',
    ],
  });
  const { onChange } = props;
  const handleChange = event => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <div className="bg-strain text-center" id="filter">
      <div className="container">
        <div className="row mt-0">
          <div className="col-md-10 mx-auto mb-5">
            <form>
              <div className="row">
                <div className="col-md-4">
                  <h3 className="filter-label">Filter</h3>
                  <select
                    name="selectTypes"
                    onChange={handleChange}
                    className="form-control"
                    id="selectTypes"
                  >
                    {typesFilter.typesFilter.map(types => (
                      <option key={types}>
                        {types}
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
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
