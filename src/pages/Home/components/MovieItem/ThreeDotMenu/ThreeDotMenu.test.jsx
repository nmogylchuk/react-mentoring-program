import React from 'react';
import rerender from 'react-test-renderer';
import ThreeDotMenu from "./ThreeDotMenu";

describe('when Three Dot Menu', () => {

    test('then snapshot created', () => {
        const threeDotMenuComponent = rerender.create(<ThreeDotMenu showMenu={true}/>);
        const tree = threeDotMenuComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

});