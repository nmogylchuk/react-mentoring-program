import React from 'react';
import './ThreeDotMenu.scss';

const ThreeDotMenu = (props) => {
    const {showMenu} = props;

    return (
        <div className="three-dots-menu" onClick={showMenu}></div>
    );
};

export default ThreeDotMenu;
