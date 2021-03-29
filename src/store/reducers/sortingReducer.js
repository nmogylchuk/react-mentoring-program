import {SET_SORTING_ORDER, SET_SORTING_VALUE} from 'store/actions/SortingActions';

const initialState = {
    sortingValue: 'release_date',
    sortingOrder: 'desc',
};

function sortingReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SORTING_VALUE:
            return {...state, sortingValue: action.payload };
        case SET_SORTING_ORDER:
            return {...state, sortingOrder: action.payload };
        default:
            return state;
    }
}

export default sortingReducer;
