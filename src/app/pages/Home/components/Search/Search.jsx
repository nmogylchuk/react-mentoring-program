import React from 'react';
import Button from '@material-ui/core/Button';
import './search.scss';

const Search = () => {

    const ButtonSearchStyle = {
        background: '#f65261',
        color: '#fff',
        width: '150px',
        fontSize: '1.6rem'
    }

    return (
        <div className='search'>
            <div className='search__title'>Find your movie</div>
            <form action="#" className="search__form">
                <input type='text' className='search__input' placeholder='What do you want to watch?'/>
                <Button style={ButtonSearchStyle}>Search</Button>
            </form>
        </div>
    )
};

export default Search;
