import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mtg from 'mtgsdk';
import { searchCard } from '../actions/index';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'c7180237-81df-50d5-86b7-baad1aad2e92',
      searchName: '',
      searchText: '',
      name: 'Nine Lives',
      text: 'Hexproof\nIf a source would deal damage to you, prevent that damage and put an incarnation counter on Nine Lives.\nWhen there are nine or more incarnation counters on Nine Lives, exile it.\nWhen Nine Lives leaves the battlefield, you lose the game.',
      colors: ['White'],
      manaCost: '{1}{W}{W}',
      types: ['Enchantment'],
      type: 'Enchantment',
      imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=488243&type=card',
      card: '',
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
        let length = cards.length; // eslint-diable-line prefer destructuring
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

const mapDispatchToProps = dispatch => ({
  searchSubmit: card => {
    dispatch(searchCard(card));
  },
});

SearchForm.propTypes = {
  searchSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchForm);
