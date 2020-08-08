import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import Card from '../components/Card';
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

    if(filter.types !== 'Types') {
      filterCatalog = cardList.filter(card => card.types.includes(filter));
    }
    if (filter.colors !== 'Colors') {
      filterCatalog = cardList.filter(card => card.colors.includes(filter));
    }
    return (
      <div>
        {
          cardList.map(card => (
            <Card
              key={`card-${card.id}`}
              card={card}
            />
          ))
        }
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
