import React from 'react';
import 'pages/Home/components/MovieFilter/MovieFilter.scss';

const MovieFilter = () => {

    let movieFilterData = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

    return (
        <nav className='movie-filter'>
            <ul className='movie-filter__list'>
                {movieFilterData.map((movieFilterItem, index) => (
                    <li key={index} className='movie-filter__item'>
                        <a href="#" className='movie-filter__link'>{movieFilterItem}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default MovieFilter;
