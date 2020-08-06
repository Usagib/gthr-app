const SEARCH_CARD = 'SEARCH_CARD';
const FILTER_CHANGE = 'FILTER_CHANGE';

const searchCard = request => {
  { type: SEARCH_CARD, request }
};

const filterChange = filter => {
  { type: FILTER_CHANGE, filter }
};

export {
  searchCard,
  filterChange,
};
