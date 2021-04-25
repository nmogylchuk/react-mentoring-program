import React from 'react';
import rerender from 'react-test-renderer';
import DeleteMovie from "./MovieDelete";
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store';
import {movie} from '../../../../../../__mocks__/mockData';

describe('when Delete Movie', () => {

    test('then snapshot delete', () => {
        const initialStore = {};
        const store = configureStore([])(initialStore);
        store.dispatch = jest.fn();
        const deleteMovieComponent = rerender.create(<Provider store={store}>
            <DeleteMovie onClose={jest.fn()} id={movie.id}/>
        </Provider>);
        const tree = deleteMovieComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
