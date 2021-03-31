import React from 'react';
import Button from '@material-ui/core/Button';
import 'pages/Home/components/Search/Search.scss';

const Search = () => {

    return (
        <div className='search'>
            <div className='search-wrapper'>
                <div className='search__title'>Find your movie</div>
                <form action="#" className="search__form">
                    <input type='text' className='search__input' placeholder='What do you want to watch?'/>
                    <Button className="search__button">Search</Button>
                </form>
            </div>
        </div>
    )
};

export default Search;
