import React from 'react';
import MovieAddEdit from "./MovieAddEdit";
import rerender from "react-test-renderer";
import { jest } from "@jest/globals";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe('when Movie Add Edit', () => {

    const movie = {
        "id": 447365,
        "title": "Guardians of the Galaxy Vol. 3",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 9,
        "release_date": "2020-05-01",
        "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
        "overview": "The third film based on Marvel's Guardians of the Galaxy.",
        "budget": 0,
        "revenue": 0,
        "genres": [
            "Action",
            "Adventure",
            "Science Fiction"
        ],
        "runtime": null
    }

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