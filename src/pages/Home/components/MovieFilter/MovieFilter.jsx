import React from 'react';
import {useDispatch} from 'react-redux';
import {movieFilterData} from '../../../../utils/constants';
import {setFilterValue} from '../../../../store/actions/FilterActions';
import './MovieFilter.scss';

const MovieFilter = () => {
    const dispatch = useDispatch();

    const filterOnChange = (ev) => {
        ev.preventDefault();
        let filterBy = ev.target.value;
        if (filterBy === 'all') {
            filterBy = '';
        }
        dispatch(setFilterValue(filterBy));
    };

    return (
        <nav className='movie-filter'>
            <ul className='movie-filter__list'>
                {movieFilterData.map((movieFilterItem, index) => (
                    <button key={index} onClick={filterOnChange} value={movieFilterItem.value}>{movieFilterItem.field}</button>
                    // <li key={index} className='movie-filter__item'>
                    //     <a onClick={filterOnChange} value={movieFilterItem.value} className='movie-filter__link'>{movieFilterItem.field}</a>
                    // </li>
                ))}
            </ul>
        </nav>
    )
};

export default MovieFilter;
