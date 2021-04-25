import configureStore from 'redux-mock-store';
import * as filterActions from './FilterActions';

const mockStore = configureStore();
const store = mockStore();

describe('test filter actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('test set filter value', () => {
        test('dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    'payload': 'title',
                    'type': 'SET_FILTER_VALUE',
                },
            ];

            store.dispatch(filterActions.setFilterValue('title'));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
