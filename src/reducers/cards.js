const SEARCH_CARD = 'SEARCH_CARD';

const initialState = [
  {
    name: 'testname',
    color: 'UW',
    cost: '2',
  },
  {
    name: 'testname2',
    color: 'yas',
    cost: '3',
  },
];

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CARD:
      return state;
    default:
      return state;
  }
};

export default cardReducer;
