const SEARCH_CARD = 'SEARCH_CARD';
const CHANGE_FILTER = 'CHANGE_FILTER';

const searchCard = card => (
  { type: SEARCH_CARD, card }
);

const changeFilter = filter => (
  { type: CHANGE_FILTER, filter }
);

export {
  searchCard,
  changeFilter,
};
