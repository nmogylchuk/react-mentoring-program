import React from 'react';
import rerender from 'react-test-renderer';
import ModalWindow from "./ModalWindow";

describe('when Modal Window', () => {


    test('then snapshot created', () => {
        const modalWindowComponent = rerender.create(<ModalWindow/>);
        const tree = modalWindowComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
});