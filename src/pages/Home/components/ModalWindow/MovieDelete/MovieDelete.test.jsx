import React from 'react';
import rerender from 'react-test-renderer';
import DeleteMovie from "./MovieDelete";
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store';
import {jest} from "@jest/globals";

describe('when Delete Movie', () => {

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