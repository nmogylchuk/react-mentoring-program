import { SET_SEARCH_VALUE, SET_SEARCH_BY } from './../../store/actions/SearchActions';

const initialState = {
  searchValue: '',
  searchBy: 'title',
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case SET_SEARCH_BY:
      return { ...state, searchBy: action.payload };
    default:
      return state;
  }
}

export default searchReducer;
