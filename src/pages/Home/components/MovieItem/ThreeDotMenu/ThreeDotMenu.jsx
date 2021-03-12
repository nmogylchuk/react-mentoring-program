import React from 'react';
import 'pages/Home/components/MovieItem/ThreeDotMenu/ThreeDotMenu.scss';

const ThreeDotMenu = (props) => {
    const {showMenu} = props;
    return (
        <div className="three-dots-menu" onClick={showMenu}></div>
    );
};

export default ThreeDotMenu;
