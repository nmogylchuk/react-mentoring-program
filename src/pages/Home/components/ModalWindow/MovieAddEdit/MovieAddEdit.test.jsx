import React from 'react';
import MovieAddEdit from "./MovieAddEdit";
import rerender from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import {movie} from '../../../../../../__mocks__/mockData';

describe('when Movie Add Edit', () => {

    test('then snapshot created', () => {
        const initialStore = {};
        const store = configureStore([])(initialStore);
        store.dispatch = jest.fn();
        const movieAddEditComponent = rerender.create(<Provider store={store}>
            <MovieAddEdit onClose={jest.fn()} movie={movie} isEdit={true}/>
        </Provider>);

        const tree = movieAddEditComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('then snapshot update', () => {
        const initialStore = {};
        const store = configureStore([])(initialStore);
        store.dispatch = jest.fn();
        const movieAddEditComponent = rerender.create(<Provider store={store}>
            <MovieAddEdit onClose={jest.fn()} movie={movie} isEdit={false}/>
        </Provider>);

        const tree = movieAddEditComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
