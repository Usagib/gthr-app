import React from 'react';
import { connect } from 'react-redux';
import mtg from 'mtgsdk';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.handleApiCall = this.handleApiCall.bind(this);
  }

  handleApiCall(event) {
    event.preventDefault();
    const { search } = this.props;
    const { name, text, colors } = search;
    console.log(search);
    mtg.card.where({
      name: name,
      text: text,
      colors: colors,
      Count: '2',
    })
    .then(cards => {
      console.log(cards[0].name);
    });
  }

  render() {
    return (
      <div>
        <button
          type="submit"
          onClick={this.handleApiCall}
        >
          Call
        </button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  search: state,
});

export default connect(mapStateToProps, null)(Api);
