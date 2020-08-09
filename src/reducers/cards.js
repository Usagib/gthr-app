const SEARCH_CARD = 'SEARCH_CARD';

const initialState = [
  {
    id: 'c7180237-81df-50d5-86b7-baad1aad2e92',
    searchName:'',
    searchText:'',
    name: 'Nine Lives',
    text: 'Hexproof\nIf a source would deal damage to you, prevent that damage and put an incarnation counter on Nine Lives.\nWhen there are nine or more incarnation counters on Nine Lives, exile it.\nWhen Nine Lives leaves the battlefield, you lose the game.',
    colors: Array [ "White" ],
    manaCost: '{1}{W}{W}',
    types: Array [ "Enchantment" ],
    type: 'Enchantment',
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=488243&type=card',
  },
];

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CARD:
      return [...state, action.card];
    default:
      return state;
  }
};

export default cardReducer;
