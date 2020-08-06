import React from 'react';
import { connect } from 'react-redux';

const url='https://api.magicthegathering.io/v1/cards';

var mtgHeaders = new Headers({
  "Page-Size": "10",
  "Count": "20",
  "Total-Count": "200",
});

var mtgInit = {
  headers: mtgHeaders,
  mode: 'cors',
};

var mtgRequest = new Request(url, mtgInit);



export default class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      id: '',
    };
    this.handleApiCall = this.handleApiCall.bind(this);
  }

  handleApiCall(event) {
    event.preventDefault();
    fetch(mtgRequest).then(response => response.json())
      .then(data => {
        const {
          cards
        } = data;
        console.log(data);
        return true;
      })
      .catch(error => {
        console.log(error);
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
