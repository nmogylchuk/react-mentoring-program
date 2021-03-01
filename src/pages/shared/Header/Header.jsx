import React from 'react';
import MovieAddButton from 'pages/Home/components/MovieAddButton/MovieAddButton';
import Search from 'pages/Home/components/Search/Search'
import 'pages/shared/Header/Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a href="#" className="header__link">
                    <img src='https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' className="logo"
                         alt='logo'/>
                </a>
                <MovieAddButton/>
            </div>
            <Search/>
        </header>
    );
}

export default Header;