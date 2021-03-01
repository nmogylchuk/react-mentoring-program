import React from 'react';
import MovieAddButton from "app/pages/Home/components/MovieAddButton/MovieAddButton";
import './Header.scss';

const buttonAddStyle = {
    background: 'white',
    color: '#f65261',
    width: '120px',
    fontSize: '1.2rem',
}

function Header() {
    return (
        <div className="header">
            <a href="#" className="header__link">
                <img src='https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' className="logo" alt='logo'/>
            </a>
            <MovieAddButton/>
        </div>
    );
};

export default Header;
