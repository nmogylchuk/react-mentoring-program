import React from 'react';
import 'pages/Home/components/MovieItem/ThreeDotMenu/ThreeDotMenu.scss';

const ThreeDotMenu = (props) => {
    return (
        <div className="three-dots-menu" onClick={props.onClick}></div>
    );
};

export default ThreeDotMenu;
