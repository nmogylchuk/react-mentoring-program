export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';

export const setSearchValue = value => ({
    type: SET_SEARCH_VALUE,
    payload: value,
});

export const setSearchBy = value => ({
    type: SET_SEARCH_BY,
    payload: value,
});
