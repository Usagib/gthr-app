import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log('handleChange');
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Handle submit');
    return true;
  }

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            placeholder="search"
            value="test"
          />
          <button
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit request
          </button>
        </form>
      </div>
    );
  }
}
