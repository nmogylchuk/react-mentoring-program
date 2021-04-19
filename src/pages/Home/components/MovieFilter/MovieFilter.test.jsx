import React from 'react';
import rerender from 'react-test-renderer';
import MovieFilter from './MovieFilter';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store';
import {jest} from "@jest/globals";

describe('when MovieFilter', () => {

    test('then snapshot created', () => {
        const initialStore = {};
        const store = configureStore([])(initialStore);
        store.dispatch = jest.fn();
        const movieFilterComponent = rerender.create(<Provider store={store}>
            <MovieFilter/>
        </Provider>);

        const tree = movieFilterComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
