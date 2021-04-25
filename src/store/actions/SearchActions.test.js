import configureStore from 'redux-mock-store';
import * as searchActions from './SearchActions';

const mockStore = configureStore();
const store = mockStore();

describe('test search actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('test set search value', () => {
        test('dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    'payload': 'test',
                    'type': 'SET_SEARCH_VALUE',
                },
            ];

            store.dispatch(searchActions.setSearchValue('test'));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('test set search by', () => {
        test('dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    'payload': 'title',
                    'type': 'SET_SEARCH_BY',
                },
            ];

            store.dispatch(searchActions.setSearchBy('title'));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
