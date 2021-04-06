import React from 'react';
import {useDispatch} from 'react-redux';
import {movieSortData} from 'utils/constants';
import {setSortingValue} from 'store/actions/SortingActions';
import 'pages/Home/components/MovieSort/MovieSort.scss';

const MovieSort = () => {
    const dispatch = useDispatch();

    const sortingOnChange = (ev) => {
        const sortBy = ev.target.value;
        dispatch(setSortingValue(sortBy));
    };

    return (
        <div className='movie-sort'>
            <div className='movie-sort__name'>Sort by</div>
            <div className='movie-sort__wrapper'>
                <select onChange={sortingOnChange} className='movie-sort__list'>
                    {movieSortData.map((movieSortItem, index) => (
                        <option className='movie-sort__item' value={movieSortItem.value} key={index}>{movieSortItem.field}</option>
                    ))}
                </select>
            </div>
        </div>
    )
};

export default MovieSort;
