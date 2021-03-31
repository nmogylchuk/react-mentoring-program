import React from 'react';
import 'pages/shared/CloseButton/CloseButton.scss';

const CloseButton = (props) => {
    const {closeMenu} = props;
    return (
        <div className="close-button" onClick={closeMenu}></div>
    );
};

export default CloseButton;
