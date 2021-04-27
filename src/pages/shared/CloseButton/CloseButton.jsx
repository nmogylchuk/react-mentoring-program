import React from 'react';
import './CloseButton.scss';

const CloseButton = (props) => {
    const {closeMenu} = props;
    return (
        <div className="close-button" onClick={closeMenu}></div>
    );
};

export default CloseButton;
