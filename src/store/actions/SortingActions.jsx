export const SET_SORTING_VALUE = 'SET_SORTING_VALUE';
export const SET_SORTING_ORDER = 'SET_SORTING_ORDER';

export const setSortingValue = value => ({
    type: SET_SORTING_VALUE,
    payload: value,
});

export const setSortingOrder = value => ({
    type: SET_SORTING_ORDER,
    payload: value,
});
