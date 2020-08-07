import React from 'react';
import { connect } from 'react-redux';
import { searchCard } from '../actions/index';
import Card from '../components/Card';
import mtg from 'mtgsdk';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      searchName:'',
      searchText:'',
      name: '',
      text: '',
      colors: '',
      manaCost: '',
      type: '',
      imageUrl: '',
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
    mtg.card.where({
      name: searchName,
      text: searchText,
    })
    .then(cards => {
      let length = cards.length;
      if (cards.length > 20) {
        length = 20;
      }
      for (var i = 0; i < length; i++) {
        this.setState({
          id: cards[i].id,
          name: cards[i].name,
          text: cards[i].text,
          colors: cards[i].colors,
          manaCost: cards[i].manaCost,
          type: cards[i].type,
          imageUrl: cards[i].imageUrl,
        });
        searchSubmit(this.state);
      }
      this.setState({
        name: '',
        text: '',
        colors: '',
        manaCost: '',
        type: '',
        imageUrl: '',
      });
    });
  }

  render() {
    const { searchName, searchText, name, text, colors, manaCost, type, imageUrl} = this.state;
    const { cardList } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            id="Name"
            onChange={this.handleChange}
            placeholder="Name"
            value={searchName}
          />
          <input
            type="text"
            id="Text"
            onChange={this.handleChange}
            placeholder="Text"
            value={searchText}
          />
          <button
            type="submit"
            onClick={this.handleApiCall}
          >
            Call
          </button>

          <button
            type="button"
            onClick={() => window.location.reload(false)}
          >
            Reset
          </button>
        </form>
        <p>{JSON.stringify(this.state)}</p>
        <div>
          <ul>
            <li>
              Name: {name}
            </li>
            <li>
              Text: {text}
            </li>
            <li>
              Colors: {colors}
            </li>
            <li>
              Mana Cost: {manaCost}
            </li>
            <li>
              Type: {type}
            </li>
            <li>
              <img src={imageUrl} />
            </li>
          </ul>
        </div>
        <div>
          {
            cardList.map(card => (
              <Card
                key={`card-${card.id}`}
                card={card}
              />
            ))
          }
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

const mapStateToProps = state => ({
  cardList: state.cards,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
