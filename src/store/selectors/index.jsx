import {createSelector} from 'reselect';

export const getAllMovies = state => state.movies.movies;
export const sortValueSelector = state => state.sorting.sortingValue;
export const sortValueOrder = state => state.sorting.sortingOrder;
export const filterSelector = state => state.filter.filterValue;

export const getParams = createSelector(
    [filterSelector, sortValueSelector, sortValueOrder],
    (filter, sortBy, sortOrder) => {

        return {filter, sortBy, sortOrder};
    }
);
