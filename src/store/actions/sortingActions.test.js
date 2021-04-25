import configureStore from 'redux-mock-store';
import * as sortingActions from './sortingActions';

const mockStore = configureStore();
const store = mockStore();

describe('test sorting actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('test set sorting value', () => {
        test('dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    'payload': 'release_date',
                    'type': 'SET_SORTING_VALUE',
                },
            ];

            store.dispatch(sortingActions.setSortingValue('release_date'));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('test set sorting order', () => {
        test('dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    'payload': 'desc',
                    'type': 'SET_SORTING_ORDER',
                },
            ];

            store.dispatch(sortingActions.setSortingOrder('desc'));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
