import {createSelector} from 'reselect';

export const getAllMovies = state => state.movies.movies;
export const addMovie = state => state.movies.movie;
export const getMovie = state => state.movies.movie;
export const sortValueSelector = state => state.sorting.sortingValue;
export const sortValueOrder = state => state.sorting.sortingOrder;
export const filterSelector = state => state.filter.filterValue;
export const searchValueSelector = state => state.search.searchValue;
export const searchValueBy = state => state.search.searchBy;

export const getParams = createSelector(
    [filterSelector, sortValueSelector, sortValueOrder, searchValueSelector, searchValueBy],
    (filter, sortBy, sortOrder, search, searchBy) => {

        return {filter, sortBy, sortOrder, search, searchBy};
    }
);

export const addParams = createSelector(
    [addMovie],
    (movie) => {
        return {movie};
    }
);
