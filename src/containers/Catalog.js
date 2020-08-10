import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import Filter from '../components/Filter';
import { Carousel } from 'react-bootstrap';

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

    if(filter !== 'Type') {
      console.log('type different');
      filterCatalog = cardList.filter(card => card.types.includes(filter));
      console.log(filterCatalog);
    } else {
      console.log('set to initial cardlist');
      filterCatalog = cardList;
      console.log(filterCatalog);
    }

    return (
      <div className="catalog-wrapper" id="catalog">
        <Carousel indicators={false}>
          {
            filterCatalog.map(card => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={card.imageUrl}
                  alt={card.name}
                />
              <div className="container-fluid mt-0 mx-auto bg-strain card-details">
                  <p>Name: {card.name}<br />
                  Mana Cost: {card.manaCost}<br />
                  Colors: {card.colors}<br />
                Types: {card.type}<br /><br />
                {card.text}<br /><br />
                  ID: {card.id}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
