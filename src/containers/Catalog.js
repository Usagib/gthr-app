import React from 'react';
import { connect } from 'react-redux';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cards } = this.props;
    return (
      <div>
        <p>{cards}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
});

export default connect(mapStateToProps, null)(Catalog);
