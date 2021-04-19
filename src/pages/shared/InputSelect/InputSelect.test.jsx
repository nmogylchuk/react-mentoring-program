import React from 'react';
import rerender from 'react-test-renderer';
import InputSelect from "./InputSelect";
import {jest} from "@jest/globals";
import {movie} from '../../../../__mocks__/mockData';

describe('when Input Select', () => {

    test('then snapshot created', () => {
        const inputSelectComponent = rerender.create(<InputSelect label="Genres" name="genres" genres={movie.genres}
                                                                  value={movie.genres} onChange={jest.fn()}
        />);
        const tree = inputSelectComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
