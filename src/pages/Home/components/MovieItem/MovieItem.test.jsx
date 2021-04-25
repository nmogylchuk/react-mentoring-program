import React from 'react';
import rerender from 'react-test-renderer';
import MovieItem from './MovieItem';
import {movie} from '../../../../../__mocks__/mockData';

describe('when Movie', () => {
    console.log(movie);
    test('then snapshot created', () => {
        const movieItemComponent = rerender.create(<MovieItem movie={movie}/>);
        const tree = movieItemComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
