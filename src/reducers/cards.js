const SEARCH_CARD = 'SEARCH_CARD';

const initialState = [
  {
    name: 'testname',
  },
  {
    name: 'testname2',
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
