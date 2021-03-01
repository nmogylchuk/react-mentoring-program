import React from 'react';
import 'pages/Home/components/MovieSort/MovieSort.scss';

const MovieSort = () => {

    return (
        <div className='movie-sort'>
            <div className='movie-sort__name'>Sort by</div>
            <div className='movie-sort__wrapper'>
                <select className='movie-sort__list'>
                    <option className='movie-sort__item'>Release date</option>
                    <option className='movie-sort__item'>From A to Z</option>
                    <option className='movie-sort__item'>From Z to A</option>
                </select>
            </div>
        </div>
    )
};

export default MovieSort;
