const SEARCH_CARD = 'SEARCH_CARD';

const initialState = [
  {
    id: '',
    searchName:'',
    searchText:'',
    name: '',
    text: '',
    colors: '',
    manaCost: '',
    type: '',
    types: '',
    imageUrl: '',
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
