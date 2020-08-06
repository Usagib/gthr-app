const SEARCH_CARD = 'SEARCH_CARD';
const FILTER_CHANGE = 'FILTER_CHANGE';

const searchCard = card => (
  { type: SEARCH_CARD, card }
);

const filterChange = filter => (
  { type: FILTER_CHANGE, filter }
);

export {
  searchCard,
  filterChange,
};
