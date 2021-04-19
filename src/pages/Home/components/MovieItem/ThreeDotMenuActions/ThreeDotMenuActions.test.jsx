import React from 'react';
import rerender from 'react-test-renderer';
import ThreeDotMenuActions from "./ThreeDotMenuActions";
import {movie} from '../../../../../../__mocks__/mockData';

describe('when Three Dot Menu Actions', () => {

    test('then snapshot created', () => {
        const threeDotMenuActionsComponent = rerender.create(<ThreeDotMenuActions movie={movie}/>);
        const tree = threeDotMenuActionsComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
