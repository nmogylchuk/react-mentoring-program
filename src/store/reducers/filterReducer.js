import {SET_FILTER_VALUE} from './../actions/FilterActions';

const initialState = {
    filterValue: ''
};

function filterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILTER_VALUE:
            return {...state, filterValue: action.payload};
        default:
            return state;
    }
}

export default filterReducer;
