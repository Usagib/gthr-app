import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mtg from 'mtgsdk';
import { searchCard } from '../actions/index';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleApiCall = this.handleApiCall.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    switch (event.target.id) {
      case 'Name':
        this.setState({
          searchName: event.target.value,
        });
        break;
      case 'Text':
        this.setState({
          searchText: event.target.value,
        });
        break;
      default:
        return this.state;
    }
    return false;
  }

  handleApiCall(event) {
    const { searchName, searchText } = this.state;
    const { searchSubmit } = this.props;
    event.preventDefault();
    this.setState({
      name: '',
      text: '',
      colors: '',
      manaCost: '',
      type: '',
      imageUrl: '',
    });
    mtg.card.where({
      name: searchName,
      text: searchText,
    })
      .then(cards => {
        let length = cards.length; // eslint-disable-line prefer-destructuring
        if (cards.length > 20) {
          length = 20;
        }
        for (let i = 0; i < length; i += 1) {
          if (cards[i].imageUrl !== cards[i].name) {
            this.setState({
              id: cards[i].id,
              name: cards[i].name,
              text: cards[i].text,
              colors: cards[i].colors,
              manaCost: cards[i].manaCost,
              type: cards[i].type,
              types: cards[i].types,
              imageUrl: cards[i].imageUrl,
            });
            searchSubmit(this.state);
          }
        }
      });
  }

  render() {
    const { searchName, searchText } = this.state;
    return (
      <div className="searchForm bg-strain text-center py-1" id="searchForm">
        <div className="container">
          <div className="col-md-10 mx-auto my-2">
            <form>
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control my-1"
                    id="Name"
                    onChange={this.handleChange}
                    placeholder="CardName"
                    value={searchName}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    className="form-control my-1"
                    placeholder="Card text"
                    type="text"
                    id="Text"
                    onChange={this.handleChange}
                    value={searchText}
                  />
                </div>
                <div className="col-md-4">
                  <button
                    type="submit"
                    onClick={this.handleApiCall}
                    className="btn btn-light"
                  >
                    Add to Catalog
                  </button>

                  <button
                    type="button"
                    onClick={() => window.location.reload(false)}
                    className="btn btn-light"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cardList: state.cards,
})

const mapDispatchToProps = dispatch => ({
  searchSubmit: card => {
    dispatch(searchCard(card));
  },
});

SearchForm.propTypes = {
  searchSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
