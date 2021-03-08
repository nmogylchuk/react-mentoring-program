import React from 'react';
import 'pages/shared/CloseButton/CloseButton.scss';

const CloseButton = (props) => {
    return (
        <div className="close-button" onClick={props.onClick}></div>
    );
};

export default CloseButton;
