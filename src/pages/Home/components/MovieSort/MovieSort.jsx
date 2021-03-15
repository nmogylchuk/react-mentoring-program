import React from 'react';
import 'pages/Home/components/MovieSort/MovieSort.scss';

const MovieSort = ({movieSortData}) => {

    return (
        <div className='movie-sort'>
            <div className='movie-sort__name'>Sort by</div>
            <div className='movie-sort__wrapper'>
                <select className='movie-sort__list'>
                    {movieSortData.map((movieSortItem, index) => (
                        <option className='movie-sort__item' key={index}>{movieSortItem}</option>
                    ))}
                </select>
            </div>
        </div>
    )
};

export default MovieSort;
