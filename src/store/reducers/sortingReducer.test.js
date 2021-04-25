import { SET_SORTING_VALUE, SET_SORTING_ORDER } from '../actions/SortingActions';
import sortingReducer from "./sortingReducer";

const initialState = {
    sortingValue: 'release_date',
    sortingOrder: 'desc',
};

describe('test sorting reducer', () => {
    describe('INITIAL_STATE', () => {
        test('returns correct initial state', () => {
            expect(sortingReducer(undefined, {})).toEqual(initialState);
        });
    });

    describe('test set sorting value', () => {
        test('returns the correct state', () => {
            const action = { type: SET_SORTING_VALUE, payload: 'title' };

            const expectedState = {
                ...initialState,
                sortingValue: 'title',
                sortingOrder: 'desc'
            };

            expect(sortingReducer(initialState, action)).toEqual(expectedState);
        });
    });

    describe('test set sorting order', () => {
        test('returns the correct state', () => {
            const action = { type: SET_SORTING_ORDER, payload: 'asc' };

            const expectedState = {
                ...initialState,
                sortingValue: 'release_date',
                sortingOrder: 'asc',
            };

            expect(sortingReducer(initialState, action)).toEqual(expectedState);
        });
    });
});
