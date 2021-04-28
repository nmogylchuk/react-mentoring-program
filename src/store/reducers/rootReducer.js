import { combineReducers } from 'redux'
import filterReducer from './filterReducer';
import sortingReducer from './sortingReducer';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    filter: filterReducer,
    movies: moviesReducer,
    sorting: sortingReducer,
    search: searchReducer,
})

export default rootReducer;
