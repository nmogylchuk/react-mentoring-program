import React from 'react';
import rerender from 'react-test-renderer';
import MovieList from "./MovieList";
import {movie} from '../../../../../__mocks__/mockData'

describe('when Movie List', () => {

    test('then snapshot created', () => {
        const movieListComponent = rerender.create(<MovieList movies={[movie]} handleSearchIcon={jest.fn()}/>);
        const tree = movieListComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
