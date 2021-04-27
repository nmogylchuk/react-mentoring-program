import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import './Search.scss';
import {setSearchValue} from './../../../../store/actions/SearchActions';

const Search = () => {
    const [value, setValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSearch = () => {
        history.push({
            pathname: '/search',
            search: `?text=${value}`,
        });
        dispatch(setSearchValue(value));
    };

    const searchOnChange = (ev) => {
        ev.preventDefault();
        setValue(ev.target.value);
    };

    return (
        <div className='search'>
            <div className='search-wrapper'>
                <div className='search__title'>Find your movie</div>
                <form action="#" className="search__form">
                <input type='text' className='search__input' placeholder='What do you want to watch?'                     value = {value}
                           onChange = {searchOnChange}
                           value = {value} />
                    <Button className="search__button" onClick={handleSearch}>Search</Button>
                </form>
            </div>
        </div>
    )
};

export default Search;
