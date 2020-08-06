import React from 'react';
import { connect } from 'react-redux';

const url='https://api.magicthegathering.io/v1/cards?page=1';

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
    fetch(url, { mode: 'cors' }).then(response => response.json())
      .then(data => {
        const {
          card
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
