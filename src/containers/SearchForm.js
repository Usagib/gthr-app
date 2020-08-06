import React from 'react';
import { connect } from 'react-redux';
import { searchCard } from '../actions/index';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      set: '',
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    switch (event.target.id) {
      case 'Search':
        this.setState({
          name: event.target.value;
        });
        break;
      default:
        return this.state;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    searchSubmit(this.state);
    this.setState({
      name:'';
    });
    return true;
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="search"
            value={name}
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

const mapDispatchToProps = dispatch => ({
  searchSubmit: card => {
    dispatch(searchCard(card));
  },
});

export default connect(null, null)(SearchForm);
