import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import Card from '../components/Card';
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

    if(filter.types !== 'Types') {
      filterCatalog = cardList.filter(card => card.types.includes(filter));
    }
    if (filter.colors !== 'Colors') {
      filterCatalog = cardList.filter(card => card.colors.includes(filter));
    }
    return (
      <div>
        <Carousel indicators={false}>
          {
            cardList.map(card => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={card.imageUrl}
                  alt={card.name}
                />
              <div className="container-fluid mt-0 mx-auto bg-strain card-details">
                  <p>{card.name}</p>
                  <p>{card.manaCost}</p>
                  <p>{card.colors}</p>
                  <p>{card.type}</p>
                  <p>{card.text}</p>
                  <p>{card.id}</p>
                </div>
              </Carousel.Item>
            ))
          }
        </Carousel>
        <Filter
          onChange={this.handleFilterChange}
        />
        {
          filterCatalog.map(card => (
            <Card
              key={`card-${card.id}`}
              card={card}
            />
          ))
        }
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
  filter: 'Types',
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
