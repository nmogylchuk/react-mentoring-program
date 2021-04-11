import { combineReducers } from 'redux'
import filterReducer from 'store/reducers/filterReducer';
import sortingReducer from 'store/reducers/sortingReducer';
import moviesReducer from 'store/reducers/moviesReducer';
import searchReducer from 'store/reducers/searchReducer';

const rootReducer = combineReducers({
    filter: filterReducer,
    movies: moviesReducer,
    sorting: sortingReducer,
    search: searchReducer,
})

export default rootReducer;
