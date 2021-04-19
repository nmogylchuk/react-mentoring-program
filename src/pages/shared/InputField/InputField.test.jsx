import React from 'react';
import rerender from 'react-test-renderer';
import InputField from "./InputField";
import {jest} from "@jest/globals";
import {movie} from '../../../../__mocks__/mockData';

describe('when Input Field', () => {

    test('then snapshot created', () => {
        const inputFieldComponent = rerender.create(<InputField label="Title" value={movie.title} type="text"
                                                                name="title"
                                                                placeholder="Title here"
                                                                handleMovieChange={jest.fn()}
                                                                onChange={jest.fn()}/>);
        const tree = inputFieldComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
