import {createSelector} from 'reselect';

export const getAllMovies = state => state.movies.movies;
export const addMovie = state => state.movies.movie;
export const getMovie = state => state.movies.movie;
export const sortValueSelector = state => state.sorting.sortingValue;
export const sortValueOrder = state => state.sorting.sortingOrder;
export const filterSelector = state => state.filter.filterValue;

export const getParams = createSelector(
    [filterSelector, sortValueSelector, sortValueOrder],
    (filter, sortBy, sortOrder) => {

        return {filter, sortBy, sortOrder};
    }
);

export const addParams = createSelector(
    [addMovie],
    (movie) => {
        return {movie};
    }
);
