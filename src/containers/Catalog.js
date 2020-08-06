import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cardList } = this.props;
    return (
      <div>
        {cardList.map(card => (
          <Card
            key={card.name}
            card={card}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cardList: state.cards,
});

export default connect(mapStateToProps, null)(Catalog);