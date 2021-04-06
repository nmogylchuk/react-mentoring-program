import { combineReducers } from 'redux'
import filterReducer from 'store/reducers/filterReducer';
import sortingReducer from 'store/reducers/sortingReducer';
import moviesReducer from 'store/reducers/moviesReducer';

const rootReducer = combineReducers({
    filter: filterReducer,
    movies: moviesReducer,
    sorting: sortingReducer
})

export default rootReducer;
