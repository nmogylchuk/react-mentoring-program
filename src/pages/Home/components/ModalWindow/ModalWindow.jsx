import React from 'react';
import {createPortal} from 'react-dom';
import CloseButton from 'pages/shared/CloseButton/CloseButton';
import 'pages/Home/components/ModalWindow/ModalWindow.scss';

const ModalWindow = (props) => {
    const {closeWindow} = props;

    const domEl = document.getElementById("modal");
    if (!domEl) return null;

    return createPortal (
        <>
            <div className="modal-window">
                <CloseButton closeMenu={closeWindow}/>
                {props.children}
            </div>
            <div className="modal-window__background"></div>
        </>,
        domEl
    );
};

export default ModalWindow;
