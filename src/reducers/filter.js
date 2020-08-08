const CHANGE_FILTER = 'CHANGE_FILTER';

const initialFilter = {
  types: 'Types',
  colors: 'Colors', 
}

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
