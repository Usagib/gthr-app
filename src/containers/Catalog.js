import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { changeFilter } from '../actions/index';
import Filter from '../components/Filter';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    const { cardList, filter } = this.props;
    let filterCatalog = cardList;

    if (filter !== 'Type') {
      filterCatalog = cardList.filter(card => card.types.includes(filter));
    } else {
      filterCatalog = cardList;
    }

    return (
      <div className="catalog-wrapper" id="catalog">
        <Carousel indicators={false}>
          {
            filterCatalog.map(card => (
              <Carousel.Item key={`item-${card.id}`}>
                <img
                  className="d-block w-100"
                  src={card.imageUrl}
                  alt={card.name}
                />
                <div className="container-fluid mt-0 mx-auto bg-strain card-details">
                  <p>
                    Name:
                      {card.name}
                    <br />
                    Mana Cost:
                      {card.manaCost}
                    <br />
                    Colors:
                      {card.colors}
                    <br />
                    Types:
                      {card.type}
                    <br />
                    <br />
                    {card.text}
                    <br />
                    <br />
                    ID:
                      {card.id}
                  </p>
                </div>
              </Carousel.Item>
            ))
          }
        </Carousel>
        <Filter
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = state => ({
  cardList: state.cards,
  filter: state.filter,
});

Catalog.defaultProps = {
  filter: 'Type',
};

Catalog.propTypes = {
  changeFilter: PropTypes.func,
  cardList: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
