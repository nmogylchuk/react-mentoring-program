import React from 'react';
import './MovieFilter.scss';

const MovieFilter = () => {

    return (
        <nav className='movie-filter'>
            <ul className='movie-filter__list'>
                <li className='movie-filter__item'><a href="#" className='movie-filter__link movie-filter__link--active'>All</a></li>
                <li className='movie-filter__item'><a href="#" className='movie-filter__link'>Documentary</a></li>
                <li className='movie-filter__item'><a href="#" className='movie-filter__link'>Comedy</a></li>
                <li className='movie-filter__item'><a href="#" className='movie-filter__link'>Horror</a></li>
                <li className='movie-filter__item'><a href="#" className='movie-filter__link'>Crime</a></li>
            </ul>
        </nav>
    )
};

export default MovieFilter;
